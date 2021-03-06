import React, { Component } from 'react';
import SimpleFormTmpl from './SimpleFormTmpl';
import { reduxForm, SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'User name is Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
  }

  const warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }

class SimpleForm extends Component {
    constructor(props) {    
        super(props);        
    }
    render () {
        return SimpleFormTmpl.call(this);
    }

    submit(values) {
        return values;

        return sleep(1000) // simulate server latency
          .then(() => {
            return values;
          })
      }

}

export default reduxForm({
    form: 'SimpleForm',
    validate,
    warn
  })(SimpleForm)