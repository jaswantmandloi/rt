import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import { routes } from '../../Shared/Routes';
import LeftPanel from '../Header/LeftPanel';
import Plans from '../Plans/Plans';
import FooterTmpl from '../Footer/FooterTmpl';


const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  let formGroupCls = ['form-group'];
  if (touched && error) {    
    formGroupCls.push('has-error');
  }
  input.required = 'required';

  return (
    <div class="col-sm-6">
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


function UserInfoTmpl() {

  const { handleSubmit, pristine, reset, submitting, error, userType, synchErrors, formValues } = this.props

  return (
    <form class="form-signin" onSubmit={handleSubmit(this.submit)} noValidate>
      
      <div class="form-body">

      <div class="row">

          <LeftPanel {...this.props}/>
            
            <div class="col-sm-8">        

        {this.props['userInfo'] && this.props['userInfo']['code'] &&
          <div class="alert alert-danger" role="alert">{this.props['userInfo']['message']}</div>}

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
          
          <div class="form-footer submit-footer">
            <button class="btn btn-lg btn-primary btn-lg2" disabled={submitting} type="submit">Update</button>            
          </div>

        </div>

        <div class="form-row2">
            <Plans 
            selectedPlan={this.props.selectedPlanInfo} 
            userData={this.props.userData}
            isUserInfoPage={true} 
            history={this.props.history}
            />
        </div>
        
        </div>
      </div>
      </div>
      <FooterTmpl />
    </form>

  )
}


export default UserInfoTmpl;
