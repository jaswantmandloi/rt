import React, { Component } from 'react'
import { Field } from 'redux-form';
import '../Form.css';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

function SimpleFormTmpl() {

    const { handleSubmit, pristine, reset, submitting, error } = this.props
  return (
    <form onSubmit={handleSubmit(this.submit)}>
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )

}
export default SimpleFormTmpl