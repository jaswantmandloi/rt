import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserDashTmpl from './UserDashTmpl';
import {routes} from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import PaymentCalculation from '../Stripe/PaymentCalculation';
import Common from '../Common';


const mapStateToProps = state => {         
    return  ({        
        userData : state.firebase.userData,
        toggleState : state.AppRdcr.topUpPopUp,
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({ 
        togglePopUp : (toggleState) => {
            dispatch({
                type : 'USER_TOPUP_POPUP_CHANGE',
                payload : toggleState
            });
        },
        appBusyStateChange : (appBusyState) => {
            dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : appBusyState}
            });
        }       
    })
}


class UserDash extends Component {

    isUserPlanActive = false;

    constructor(props) {
        super(props);  

        if(this.props && this.props.userData) {
            this.isUserPlanActive = !PaymentCalculation.isUserPlanExpired(this.props.userData);
        }
    }

    componentDidMount() {
        this.commonValidation();

        //this.props.appBusyStateChange(false); 
        
        
    }

    commonValidation() {
         // Need stripe checkout
         if(this.props.userData && this.props.userData.stripeAmountToBePaid) {            
            this.props.history.replace(routes.stripe.path);
        }

        // Need To renew plan
        if(this.props.userData) {
            this.isUserPlanActive = !PaymentCalculation.isUserPlanExpired(this.props.userData);
        }
        
        if(this.props.userData && !this.isUserPlanActive) {            
            //this.props.history.replace(routes.plans.path);
        }
        
        // if(this.props.userData && !('stripeAmountToBePaid' in this.props.userData)) {            
        //     this.props.history.replace(routes.stripe.path);
        // }
        
    }

    componentWillUpdate() { 
        this.commonValidation();
    }

    componentDidUpdate() {                
        this.commonValidation();
    }

    
    render () {

        if(!this.props.userData) {            
            return <Loader isComponentBusy={true} />;
        }  
        
        if(this.props.userData && !('stripeAmountToBePaid' in this.props.userData)) {            
            return <Loader isComponentBusy={true} />;
        }        

        if(this.props.userData && this.props.userData.stripeAmountToBePaid) {            
            return <Loader isComponentBusy={true} />;
        }        

       return UserDashTmpl.call(this);
    }
}


const userDashCnct = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDash)

export default Common(userDashCnct, true)