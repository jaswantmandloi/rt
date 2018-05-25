import React, { Component } from 'react';
import AsynchValidationTmpl from './AsynchValidationTmpl';
import { reduxForm, SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  const asyncValidate = (values/*, dispatch */) => {
    return sleep(1000) // simulate server latency
      .then(() => {
        if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
          throw { username: 'That username is taken' }
        }
      })
  }


class AsynchValidation extends Component {
    constructor(props) {    
        super(props);        
    }
    render () {
        return AsynchValidationTmpl.call(this);
    }

    submit(values) {
        return values;        
      }

}

export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: [ 'username' ]
  })(AsynchValidation)