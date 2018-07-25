import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';


function FooterTmpl() {
  return (<div class="footer"> 
  <div>
  #madeinkingston By <a href="https://www.sodaka.com" >Sodaka Digital</a>  
   &#8482;
   </div>
   <div> 
   Secure payment powered by Stripe
   </div>
   </div>
  )
   ;

}


export default FooterTmpl;
