import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { Field } from 'redux-form';


let topupNumBoundries = {};

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  let formGroupCls = ['form-group'];
  if (touched && error) {
    input.required = 'required'
    formGroupCls.push('has-error');
  }

  let min = topupNumBoundries.minSMS;
  let max = topupNumBoundries.maxSMS;

  if(input.name == 'topupMMS') {
    min = topupNumBoundries.minMMS;
    max = topupNumBoundries.maxMMS;
  }

  return (
    <div class="col-xs-6">
      <div className={formGroupCls.join(' ')}>
        <input type={type} {...input} min={min} max={max} id={label} class="form-control" />                   
        {touched && error &&
          <label class="control-label" >{error}</label>}
      </div>
    </div>
  )
}



function TopUpTmpl() {
  return (
    <Modal className="modal-topup" show={this.props.toggleState} onHide={() => { this.props.togglePopUp(false) }}>
      <Modal.Header closeButton>
        <Modal.Title>Top Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {TopupForm.call(this)}

      </Modal.Body>

    </Modal>
  )
}




function TopupForm() {

  const { handleSubmit, pristine, reset, submitting, error, userType, synchErrors, formValues } = this.props

  let topupGrandTotal = +this.props.topUpInfo.topupGrandTotal;
  let topupBtnProps = {};
  if(submitting || topupGrandTotal <= 0 || formValues.topupSMS < 0 || formValues.topupMMS < 0) {
    topupBtnProps = {disabled : true};
  }

  topupNumBoundries = this.topupNumBoundries;

  return (
    <form class="form-topup" onSubmit={handleSubmit(this.submit)} noValidate>

      <div class="row">
        <div class="col-xs-6">
          <label> Topup SMS </label>
        </div>
        <Field 
        name="topupSMS" type="number"  
        onChange={(evt) => { this.onFieldChange('topupSMS', evt); }} 
        component={renderField} label="SMS" placeholder="Number of SMS" />
      </div>

      <div class="row">
        <div class="col-xs-6">
          <label> Topup MMS </label>
        </div>
        <Field 
        name="topupMMS" type="number" 
        onChange={(evt) => { this.onFieldChange('topupMMS', evt); }} 
        component={renderField} label="MMS" placeholder="Number of MMS" />
      </div>

      { (topupGrandTotal > 0) &&
      <div class="row">
        <div class="col-xs-6">
            <label> Grand Total </label>
        </div>
        <div class="col-xs-6">
            <label>£{(topupGrandTotal).toFixed(2)}</label>
        </div>
      </div>
      }

      <div class="form-footer">
        <button class="btn btn-lg btn-primary btn-lg2" {...topupBtnProps} type="submit">Purchase</button>
      </div>



    </form>

  )
}



export {TopUpTmpl, renderField};
