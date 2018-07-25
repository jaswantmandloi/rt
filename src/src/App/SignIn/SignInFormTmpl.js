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
  input.required = 'required'

  return (
    <div className={formGroupCls.join(' ')}>
      <input type={type} {...input} id={label} class="form-control" />
      <label class="form-control-placeholder" for={label}>{placeholder}</label>            
      {touched && error &&
        <label class="control-label" >{error}</label>}
    </div>
  )
}

function SignInFormTmpl() {
  const { handleSubmit, pristine, reset, submitting, error } = this.props
  return (
    <form onSubmit={handleSubmit(this.submit)} class="form-signin" noValidate>
      <div class="form-label-group header-logo">
        <img src="images/logo.jpg" class="logo logo-login" alt="" />
        <h1 class="login-marb">Login</h1>
      </div>

      <div class="form-body">

        {this.props['signInState']
          && this.props['signInState']['code'] &&
          <div class="alert alert-danger" role="alert">{this.props['signInState']['message']}</div>}

        <Field name="email" type="text" component={renderField} label="Email" placeholder="Email address" />
        <Field name="password" type="password" component={renderField} label="Password" placeholder="Password" />

        <div class="checkbox mb-3 lh-sm d-flex justify-content-between align-items-center">
          <Field component="input" id="rememberMe" type="checkbox" name="rememberMe" value="1" />

          <label for="rememberMe" class="mb-0">Remember me</label>
          <Link to={routes.forgotPass.path}>{routes.forgotPass.linkName}</Link>
        </div>

        <div class="form-footer">
          <button class="btn btn-lg btn-primary btn-block" disabled={submitting} type="submit">Login</button>
          <div class="form-label-group mb-0 text-center"> Don’t have an account? &nbsp;
            <Link to={routes.signup.path} class="font-bold">{routes.signup.linkName}</Link>
          </div>
        </div>
      </div>
      <FooterTmpl />
    </form>
  )
}


export default SignInFormTmpl;
