import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import SignInRdcr from '../SignIn/SignInRdcr';
import ForgotPassFormTmpl from './ForgotPassFormTmpl';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';
import {routes} from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import Common from '../Common';


const validate = values => {
    const errors = {}    
    if (!values.email) {
      errors.email = 'Email is requied.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address.'
    }    
    
    return errors
}

const warn = values => {
  const warnings = {}    
  return warnings
}

const mapStateToProps = state => {    
  return  ({  
      loggedInUser: state.firebase.loggedInUser,      
      forgotPassState: state.SignInRdcr.forgotPassState,      
      forgotPassStateSuccess: state.SignInRdcr.forgotPassStateSuccess,      
  });  
}

const mapDispatchToProps = dispatch => {      
  return ({ 
      resetForgotPassState : () => {
          dispatch({
              type : 'CHANGE_FORGOTPASS_STATE',
              payload : {}
          });
      }
  })
}


class ForgotPassForm extends Component {
    constructor(props) {
        super(props);              
    }

    componentWillMount() {
      this.props.resetForgotPassState();
    }

    submit(values) {  
      FirebaseActions.forgotPassword(values.email);
      return values;      
    }

    render () {          
      return ForgotPassFormTmpl.call(this);
    }
}


const ForgotPassFormRXFrm = reduxForm({
    form: 'ForgotPass',
    validate,
    warn
})(ForgotPassForm)


const forgotPassFrmCnct = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassFormRXFrm)

export default Common(forgotPassFrmCnct)

