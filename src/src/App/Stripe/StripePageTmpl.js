import React from 'react';
//import StripeCheckout from 'react-stripe-checkout';
//import {ReactStripeCheckout as StripeCheckout} from './StripeCheckout';

import {Elements, CardElement, StripeProvider} from 'react-stripe-elements';

import StripeElements from './StripeElements';
import PaymentCalculation from './PaymentCalculation';
import Loader from '../Loader/Loader';
import { baseUrl, prefixUrl } from '../../Shared/Routes';

import StripeCheckout from './StripeCheckout';



function StripePageTmpl() {
  let actualAmnt = 0;
  if(this.props.userData.stripePlanId) {
    actualAmnt = PaymentCalculation.applyVatCharge(this.props.userData.stripeAmountToBePaid);
  } else {
    actualAmnt = this.props.userData.stripeAmountToBePaid;
  }

  let amountInCents = actualAmnt * 100;

  if(this.stripeToken) {
    return <Loader isComponentBusy={true} />;
  }

  return (
    
    <StripeElements
        token={this.onToken}
        closed={this.onStripePopupClosed}
        opened={this.onStripePopupOpened}
        stripeKey="pk_test_7lHXCzB6GBmuMPv6NavUWEC1"
        currency="GBP"
        actualAmnt={actualAmnt}
        amount={amountInCents}
        desktopShowModal={true} 
        image={baseUrl + prefixUrl + "/images/logo-small.jpg"}  
        name="Textend CRM APP"  
        email={this.props.loggedInUser.email} 
        allowRememberMe={false}  
        appBusyStateChange={this.props.appBusyStateChange} 
        userData={this.props.userData}       
    />
    
  )

}


export default StripePageTmpl;
