import React from 'react';

import SignInForm from './SignInForm';


function SignInTmpl () {
    
  return (
    <div class="form-signin-container">    
    <SignInForm {...this.props} />
    
    </div>
  )
}


export default SignInTmpl;
