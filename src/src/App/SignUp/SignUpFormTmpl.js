import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';


import Plans from '../Plans/Plans';
import Header from '../Header/Header';
import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';



const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  let formGroupCls = ['form-group'];

  input.required = 'required'

  if (touched && error) {    
    formGroupCls.push('has-error');
  }

  let inputColCls = "col-sm-6";
  if(input.name == 'email') {
    inputColCls = "col-sm-12";
  }

  return (
    <div className={inputColCls}>
      <div className={formGroupCls.join(' ')}>
        <input type={type} {...input} id={label} class="form-control" />
        <label class="form-control-placeholder" for={label}>{placeholder}</label>
        {touched && error &&
          <label class="control-label" >{error}</label>}
      </div>
    </div>
  )
}
const userProfileTypes = [
  { label: 'Individual', value: 'Individual', checked: true },
  { label: 'Business', value: 'Business', checked: false },
];



function SignUpFormTmpl() {
  const { handleSubmit, pristine, reset, submitting, error, userType, synchErrors, formValues } = this.props

  return (
    <form ref="SignUpForm" class="form-signin" onSubmit={handleSubmit(this.submit)} noValidate>

      <Header isSignUpHeader="1" />
      <div class="form-body">
        <div class="text-center">
          <h1 class="login-marb">
            Sign Up
          </h1>
        </div>

        {this.props['signUpState'] && this.props['signUpState']['code'] &&
          <div ref={this.formErrorRef} class="alert alert-danger" role="alert">
          {this.props['signUpState']['message']}</div>}

        <div class="form-row2">
          <h2>Choose the User Type</h2>
          {userProfileTypes.map((userType, index) => {
            return (<div class="form-check form-check-inline" key={index}>
              <Field component="input" type="radio" id={userType.label} name="user_type" value={userType.value} />
              <label htmlFor={userType.label}>{userType.label}</label>
            </div>)
          })}
        </div>

        <div class="form-row2">

          <div class="row">
            <Field name="firstName" type="text" component={renderField} label="First Name" placeholder="First Name" />
            <Field name="lastName" type="text" component={renderField} label="Last Name" placeholder="Last Name" />


          </div>

          <div class="row">
            <Field name="email"  type="email" component={renderField} label="Email address" placeholder="Email address" />

          </div>

          <div class="row">
            <Field name="password" type="password" component={renderField} label="Password" placeholder="Password" />
            <Field name="verifypassword" type="password" component={renderField} label="Verify Password" placeholder="Verify Password" />
          </div>

          <div class="row">
            {userType == 'Business' &&
              <React.Fragment>
                <Field name="company_registration" type="text" component={renderField} label="Company Registration" placeholder=" Company Registration" />
                <Field name="company_name" type="text" component={renderField} label="Company Name" placeholder="Company Name" />
              </React.Fragment>
            }
          </div>


          <Plans
            error={synchErrors} onSelectPlan={this.onSelectPlan}
            isSubmitted={this.isSubmitted} selectedPlan={formValues}
            isSignUpPage={true} ref={this.planErrorRef}
          />


          <div class="checkbox mb-3 lh-sm d-flex justify-content-between align-items-center mt-40">
            <Field component={({ input, type, meta: { touched, error, pristine, submitting } }) => {
              let formGroupCls = ['form-group'];
              if (!pristine && error) {
                input.required = 'required'
                formGroupCls.push('has-error');
              }
              return (
                <div className={formGroupCls.join(' ')}>
                  <input type={type} {...input} id="Terms" />

                  <label for="Terms" class="mb-0">
                    I agree to the &nbsp;
                        <Link to={routes.terms.path} class="font-bold" >Terms &amp; Conditions</Link>
                    &nbsp; and  &nbsp;
                        <Link to={routes.privacy.path} class="font-bold" >Privacy Policy</Link>

                  </label>

                  {!pristine && error &&
                    <label class="control-label">{error}</label>}
                </div>
              )

            }}
              id="Terms" value="1" name="agree_terms" type="checkbox"
            />
          </div>
          <div class="form-footer">
            <button class="btn btn-lg btn-primary btn-lg2" disabled={submitting} type="submit">Submit</button>
            <div class="form-label-group mb-0 text-center">
              Registered member? &nbsp;
            <Link to={routes.signin.path} class="font-bold" >{routes.signin.linkName} Here</Link>
            </div>
          </div>

        </div>
      </div>
      <FooterTmpl />
    </form>

  )
}


export default SignUpFormTmpl;
