import React from 'react';
import Header from '../Header/Header';

import UserInfo from './UserInfo';


function MyAccountTmpl() {

  return (
    <div class="inner-container inner-container2">
      <div class="form-signin">
        <Header isUserDash="1" />
        </div>

        <div class="container-body">

        
          <UserInfo />
         
        </div>
       
    </div>    
  )
}


export default MyAccountTmpl;
