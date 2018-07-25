import React, { Component } from 'react';
import { reduxForm} from 'redux-form';

import SignInFormTmpl from './SignInFormTmpl';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';

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
    
    return errors
  }

  const warn = values => {
    const warnings = {}    
    return warnings
  }




class SignInForm extends Component {
    constructor(props) {
        super(props);              
    }

    submit(values) {  
      FirebaseActions.login(values);    
      return values;      
    }

    render () {      
       return SignInFormTmpl.call(this);
    }
}


export default reduxForm({
    form: 'SignInForm',
    validate,
    warn
  })(SignInForm)

