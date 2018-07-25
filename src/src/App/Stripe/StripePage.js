import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import StripePageTmpl from './StripePageTmpl';
import {routes, baseUrl, prefixUrl, stripeChargeUrl} from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';
import PaymentCalculation from './PaymentCalculation';


const mapStateToProps = state => {    
    return  ({  
        loggedInUser : state.firebase.loggedInUser,      
        plans : state.firebase.plans,   
        userData: state.firebase.userData,
        isAppBusy: state.AppRdcr.isAppBusy,        
    });  
  }
  
  const mapDispatchToProps = dispatch => {      
    return ({
        appBusyStateChange : (isAppBusy) => {
            dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : isAppBusy}
            });
        }
    })
  }

const redirectToDashboardFn = () => {
    window.location.href = baseUrl + prefixUrl + routes.dashboard.path; 
}

let selectedPlanObj ;
class StripePage extends Component {
    stripeToken;
    constructor(props) {
        super(props);   
        this.onToken = this.onToken.bind(this);
        FirebaseActions.getPlanData();           
    }

    componentDidMount() {
        this.commonUpdateCheck();
    }

    componentWillUpdate() {
        this.commonUpdateCheck();
    }

    commonUpdateCheck() {
        if(this.props.plans && this.props.userData 
            && this.props.userData.stripePlanId && this.props.userData.stripeAmountToBePaid ) {

            this.props.plans.map((planData) => {
                if(this.props.userData.stripePlanId == planData.id) {
                    selectedPlanObj = planData; 
                }
            })
        }
    }

    componentDidUpdate() {
        if(!this.props.loggedInUser) {            
            this.props.history.replace(routes.signin.path);
        }   

        // if(this.props.loggedInUser && this.props.userData  && this.props.plans && this.props.isAppBusy) {            
        //     this.props.appBusyStateChange(false)
        // }         
        
        if(this.props.userData && !this.props.userData.stripeAmountToBePaid) {            
            this.props.history.replace(routes.dashboard.path);
        }             
    }

    onToken = (token) => {        
        this.stripeToken = token;
        this.props.appBusyStateChange(true);        
        this.onPaymentSuccess(token);
    }

    onStripePopupClosed = (evt) => {
        this.props.appBusyStateChange(true);        
        if(this.stripeToken) {
            //this.props.history.replace(routes.dashboard.path);
        } else {
            this.resetUserPaymentData(redirectToDashboardFn);       
        }                     
    }

    resetUserPaymentData(onCancel) {
        let userDataToUpdate = this.getResetPaymentData();
        // Reset on payment success
        FirebaseActions.updateUserData(userDataToUpdate, onCancel);
        //this.props.history.replace(routes.dashboard.path);
    }

    onStripePopupOpened = () => {
        this.props.appBusyStateChange(false)
    }

    applyStripeCharge(tokenId) {
        let amountAfterVat = PaymentCalculation.applyVatCharge(this.props.userData.stripeAmountToBePaid);
        let amountInCents =  amountAfterVat* 100;
        let description = this.props.loggedInUser.email + ' paid EUR '
        +amountAfterVat.toFixed(2);
        let chargeData = {
            stripeToken : tokenId,
            stripeAmount : parseInt(amountInCents),
            description : description,
            stripeEmail : this.props.loggedInUser.email
        };
        axios.post(stripeChargeUrl, chargeData)
        .then(res => {
            console.log(res);
            console.log(res.data);

            if(res.data && res.data.status == "succeeded" && res.data.id) {
                let chargeId = res.data.id;
                this.afterChargeApply(chargeId);
            } else {
                this.onChargeFail();
            }            
        })
    }

    onChargeFail() {
        this.resetUserPaymentData(redirectToDashboardFn);       
    }

    getResetPaymentData() {
        let userDataToUpdate = {
            stripePlanId : 0,
            stripeAmountToBePaid : 0,
            topUpSMS : 0,
            topUpMMS : 0,
        };

        return userDataToUpdate;
    }

    onPaymentSuccess(token) {                
        this.applyStripeCharge(token.id);
    }  

    afterChargeApply(chargeId) {
        let userDataToUpdate = this.getResetPaymentData();
        userDataToUpdate.chargeId = chargeId;
        if(this.props.userData) {
            if(this.props.userData.stripePlanId) {
                this.onPlanPurchase(userDataToUpdate, chargeId);
            } else {
                this.onTopupPurchase(userDataToUpdate, chargeId);
            }
        } 
    }
    
    onPlanPurchase(userDataToUpdate, chargeId) {
        // Plan data to be populated
        userDataToUpdate.planPurchaseDate = new Date();
        userDataToUpdate.planId = selectedPlanObj.id;
        userDataToUpdate.planName = selectedPlanObj.name;
        userDataToUpdate.planPrice = selectedPlanObj.grandTotal;
        userDataToUpdate.subsribedSMS = selectedPlanObj.totalSMS;
        userDataToUpdate.subsribedMMS = selectedPlanObj.totalMMS;
        userDataToUpdate.planExpireDate = PaymentCalculation.getPlanExpireDate(selectedPlanObj);       

        userDataToUpdate.remainingSMS = 0;
        userDataToUpdate.remainingMMS = 0;                
        userDataToUpdate.remainingSMS = +selectedPlanObj.totalSMS;
        userDataToUpdate.remainingMMS = +selectedPlanObj.totalMMS;                

        // push plan details in plan history
        let selectedPlanObjCpy = Object.assign({}, selectedPlanObj);            
        selectedPlanObjCpy.purchaseDate = new Date().toDateString();
        selectedPlanObjCpy.purchaseTime = new Date().toTimeString();
        selectedPlanObjCpy.chargeId = chargeId;
        FirebaseActions.pushUserObj('planHistory', selectedPlanObjCpy);

        // Reset on payment success
        FirebaseActions.updateUserData(userDataToUpdate, redirectToDashboardFn);
    }

    onTopupPurchase(userDataToUpdate, chargeId) {
        
        let topUpObj = {
            topUpSMS : this.props.userData.topUpSMS,
            topUpMMS : this.props.userData.topUpMMS,
            amount : this.props.userData.stripeAmountToBePaid
        };

        userDataToUpdate.remainingSMS = 0;
        if(this.props.userData && this.props.userData.remainingSMS) {
            userDataToUpdate.remainingSMS = +this.props.userData.remainingSMS;
        }

        userDataToUpdate.remainingMMS = 0;
        if(this.props.userData && this.props.userData.remainingMMS) {
            userDataToUpdate.remainingMMS = +this.props.userData.remainingMMS;
        }
        
        userDataToUpdate.remainingSMS += +topUpObj.topUpSMS;
        userDataToUpdate.remainingMMS += +topUpObj.topUpMMS;                

        // push topup details in topup history
        let topUpObjCpy = Object.assign({}, topUpObj);
        topUpObjCpy.purchaseDate = new Date().toDateString();
        topUpObjCpy.purchaseTime = new Date().toTimeString();
        topUpObjCpy.chargeId = chargeId;
        FirebaseActions.pushUserObj('topUpHistory', topUpObjCpy);

        // Reset on payment success
        FirebaseActions.updateUserData(userDataToUpdate, redirectToDashboardFn);
    }

    render () {     
        if(!this.props.loggedInUser || !this.props.userData || !this.props.plans) {            
            return <Loader isComponentBusy={true} />;
        }          

        if(this.props.userData && this.props.userData.stripeAmountToBePaid) {
            return StripePageTmpl.call(this);
        }

        return null;
        
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StripePage)




