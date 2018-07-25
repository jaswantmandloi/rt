import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, SubmissionError, formValueSelector, change } from 'redux-form';

import {TopUpTmpl, renderField} from './TopUpTmpl';
import {routes} from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import PaymentCalculation from '../Stripe/PaymentCalculation';
import Common from '../Common';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';

let topupNumBoundries = {
    minSMS : 10,
    maxSMS : 10000000,
    minMMS : 10,
    maxMMS : 10000000,
};

renderField.topupNumBoundries = topupNumBoundries;

function isNormalInteger(str) {
    if(!str) {
        return true;
    }
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

const validate = values => {
    const errors = {};  
    if(values.topupSMS < 0 || values.topupSMS > topupNumBoundries.maxSMS || !isNormalInteger(values.topupSMS)) {
        errors.topupSMS = 'Invalid number entered.';
    }

    if(values.topupMMS < 0 || values.topupMMS > topupNumBoundries.maxMMS || !isNormalInteger(values.topupMMS)) {
        errors.topupMMS = 'Invalid number entered.';
    }

    if(values.topupSMS && values.topupSMS < topupNumBoundries.minSMS) {
        errors.topupSMS = 'Minimum allowed number of SMS: ' + topupNumBoundries.minSMS;
    }

    if(values.topupMMS && values.topupMMS < topupNumBoundries.minMMS) {
        errors.topupMMS = 'Minimum allowed number of MMS: ' + topupNumBoundries.minMMS;
    }


    return errors
}

const warn = values => {
    const warnings = {};
    return warnings
}

let onSubmitFail = (errors, dispatch) => {

    let test = 123;    
}

class TopUp extends Component {    

    totalSMSCharge = 0;
    totalMMSCharge = 0;
    topupGrandTotal = 0;

    topupNumBoundries = topupNumBoundries;

    constructor(props) {
        super(props);  
        this.submit = this.submit.bind(this);        
    }

    componentDidMount() {
        this.props.updateTopupInfo(0);
    }

    submit(values) { 
        // Prevent submitting invalid amount
        if(this.topupGrandTotal <= 0) {
            return;
        }

        this.props.appBusyStateChange(true);        
        FirebaseActions.updateUserData({
            topUpSMS: values.topupSMS,
            topUpMMS:values.topupMMS,
            stripeAmountToBePaid: this.topupGrandTotal
        });                 
        this.props.togglePopUp(false);
    }

    onFieldChange(eleType, evt) {
        let total = evt.currentTarget.value;       

        if(eleType == 'topupSMS') {
            this.totalSMSCharge = PaymentCalculation.getItemsChargeAmunt(total, 'smsCharge');
        } else {
            this.totalMMSCharge = PaymentCalculation.getItemsChargeAmunt(total, 'mmsCharge');
        }

        this.topupGrandTotal = this.totalSMSCharge + this.totalMMSCharge;
        this.props.updateTopupInfo(this.topupGrandTotal);
    }
    
    render () {        
       return TopUpTmpl.call(this);
    }
}

const TopUpRdxFrm = reduxForm({
    form: 'TopUpForm',
    validate,
    onSubmitFail,
    warn
})(TopUp);



/**********************************Connect with redux*******************************************/

const mapStateToProps = state => {         
    return  ({        
        userData: state.firebase.userData,
        topUpInfo: state.AppRdcr.topUpInfo,
        formValues: (state.form.TopUpForm) ? state.form.TopUpForm.values : {},
        initialValues: { topupSMS: 0, topupMMS : 0 },
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({      
        updateTopupInfo : (topupGrandTotal) => {
            dispatch({
                type : 'USER_TOPUP_CHANGE',
                payload : {
                    topupGrandTotal
                }
            });            
        }
    })
}


const TopUpCnct = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopUpRdxFrm)

export default Common(TopUpCnct, true)