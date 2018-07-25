import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {

  let formGroupCls = ['form-group'];
  if (touched && error) {    
    formGroupCls.push('has-error');
  }

  input.required = 'required';


  return (
    <div className={formGroupCls.join(' ')}>
      <input type={type} {...input} id={label} class="form-control"  />
      <label class="form-control-placeholder" for={label}>{placeholder}</label>            
      {touched && error &&
        <label class="control-label">{error}</label>}
    </div>
  )

}

function ForgotPassFormTmpl() {
  const { handleSubmit, pristine, reset, submitting, error } = this.props
  return (
    <div class="form-signin-container forgot-password">
      <form class="form-signin " onSubmit={handleSubmit(this.submit)} noValidate>
        <div class="form-label-group header-logo">
          <img src="images/logo.jpg" class="logo logo-login" alt="" />
          <h1 class="login-marb">Forgot Password</h1>
        </div>


        <div class="form-body">
          {this.props['forgotPassState'] && this.props['forgotPassState']['code'] &&
            <div class="alert alert-danger" role="alert">{this.props['forgotPassState']['message']}</div>}

          {this.props['forgotPassStateSuccess'] && this.props['forgotPassStateSuccess']['code'] &&
            <div class="alert alert-success" role="alert">{this.props['forgotPassStateSuccess']['message']}</div>}

          <Field name="email" type="text" component={renderField} label="Email" placeholder="Email address" />

          <div class="form-footer mt-0">
            <button class="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting} >
              Submit
            </button>
            <div class="form-label-group mb-0 text-center"> 
            Already has an account &nbsp;             
            <Link to={routes.signin.path} class="font-bold" >{routes.signin.linkName} Here</Link>                   
            </div>
          </div>
        </div>
        <FooterTmpl />
      </form>
      
    </div>
  )
}


export default ForgotPassFormTmpl;
