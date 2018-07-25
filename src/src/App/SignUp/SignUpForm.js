import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError, formValueSelector, change } from 'redux-form';
import { Button } from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'
import scrollToComponent from 'react-scroll-to-component';

import FirebaseActions from '../../Shared/Firebase/FirebaseActions';
import {signUpFrmLastState} from '../../Shared/FormReduces';
import SignUpFormTmpl from './SignUpFormTmpl';


let planId = 0;
let stripeAmountToBePaid = 0;

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }
  if (!values.password) {
    errors.password = 'Password is required.'
  }

  if (values.password != values.verifypassword) {
    errors.verifypassword = 'Password and verify password should be same.'
  }

  if (!values.firstName) {
    errors.firstName = 'First name is required.'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required.'
  }

  if (!values.agree_terms) {
    errors.agree_terms = 'Please agree to the Terms of Service.'
  }

  if (values.user_type == 'Business' && !values.company_name) {
    errors.company_name = 'Company name is required.'
  }

  if (values.user_type == 'Business' && !values.company_registration) {
    errors.company_registration = 'Company registration id is required.'
  }

  return errors
}

const warn = values => {
  const warnings = {};
  return warnings
}


let onSubmitFail = (errors, dispatch) => {  
  //dispatch(change('SignUpForm', 'agree_terms', 0));
}


class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.onSelectPlan = this.onSelectPlan.bind(this);
    onSubmitFail = onSubmitFail.bind(this);
    this.isSubmitted = false;
    this.formErrorRef = React.createRef();
    this.planErrorRef = React.createRef();
  }

  onSelectPlan(selectedPlanId, selectedPlanAmount) {
    this.props.onPlanDataChange(selectedPlanId, selectedPlanAmount, '');
  }

  submit(values) {
    
    if(this.props.selectedPlanInfo && !this.props.selectedPlanInfo.stripePlanId) {
      this.props.onPlanDataChange(this.props.selectedPlanInfo.stripePlanId, this.props.selectedPlanInfo.stripeAmountToBePaid,
      'Please select one of the plan.');
      scrollToComponent(this.planErrorRef.current);
      return;
    }    

    FirebaseActions.createUser({
       ...values, stripePlanId : this.props.selectedPlanInfo.stripePlanId,
       stripeAmountToBePaid : this.props.selectedPlanInfo.stripeAmountToBePaid, planHistory : [], topUpHistory : []
    }, () => {
      if(this.props['signUpState'] && this.props['signUpState']['code']) {      
        scrollToComponent(this.formErrorRef.current);
      }
    });
    return values;
  }


  render() {
    return SignUpFormTmpl.call(this);
  }
}


const SignUpFormRdxFrm = reduxForm({
  form: 'SignUpForm',
  validate,
  onSubmitFail,
  warn
})(SignUpForm);

const selector = formValueSelector('SignUpForm');

const signupFrmConnected = connect(
  state => {
    return {
      userType: selector(state, 'user_type'),
      initialValues: signUpFrmLastState,
      synchErrors: (state.form.SignUpForm) ? state.form.SignUpForm.syncErrors : {},
      formValues: (state.form.SignUpForm) ? state.form.SignUpForm.values : {},
      selectedPlanId: state.SignUpRdcr.selectedPlanId,
      selectedPlanInfo : state.AppRdcr.selectedPlanInfo
    }
  },
  dispatch => {
    return {
      onPlanDataChange: (stripePlanId, stripeAmountToBePaid, error) => {        
        dispatch({
          type : 'USER_PLAN_CHANGE',
          payload : {stripePlanId : stripePlanId, stripeAmountToBePaid : stripeAmountToBePaid, error: error}
        });

      }
    }
  }
)(SignUpFormRdxFrm);


export default signupFrmConnected;

