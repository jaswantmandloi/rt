import React, { Component } from 'react';
import FieldLevelValidationTmpl from './FieldLevelValidationTmpl';
import { reduxForm, SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


class FieldLevelValidation extends Component {
    constructor(props) {    
        super(props);        
    }
    render () {
        return FieldLevelValidationTmpl.call(this);
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
    form: 'FieldLevelValidation'    
  })(FieldLevelValidation)