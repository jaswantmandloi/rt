import React from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider, CardElement, injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';

import FooterTmpl from '../Footer/FooterTmpl';
import '../Css/stripeElements.css';

let style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#a94442',
    iconColor: '#fa755a'
  }
};

let elementClasses = {
  focus: 'focused',
  empty: 'empty',
  invalid: 'invalid',
};

function listenErrors(elements) {
  // Listen for errors from each Element, and show error messages in the UI.
  var savedErrors = {};
  elements.forEach( (element, idx) => {
    element.on('change',  (event) => {
      if (event.error) {
        //error.classList.add('visible');
        savedErrors[idx] = event.error.message;
        //errorMessage.innerText = event.error.message;
        this.setState({
          cardError: event.error.message
        });
      } else {
        savedErrors[idx] = null;

        // Loop over the saved errors and find the first one, if any.
        var nextError = Object.keys(savedErrors)
          .sort()
          .reduce(function (maybeFoundError, key) {
            return maybeFoundError || savedErrors[key];
          }, null);

        if (nextError) {
          // Now that they've fixed the current error, show another one.
          //errorMessage.innerText = nextError;
          this.setState({
            cardError: nextError
          });
        } else {
          this.setState({
            cardError: ''
          });
          // The user fixed the last error; no more errors.
          //error.classList.remove('visible');
        }
      }
    });
  });
}


var cardBrandToPfClass = {
	'visa': 'pf-visa',
  'mastercard': 'pf-mastercard',
  'amex': 'pf-american-express',
  'discover': 'pf-discover',
  'diners': 'pf-diners',
  'jcb': 'pf-jcb',
  'unknown': 'pf-credit-card',
}

function setBrandIcon(brand) {
	var brandIconElement = this.cardNumberBrandElement.current;
  var pfClass = 'pf-credit-card';
  if (brand in cardBrandToPfClass) {
  	pfClass = cardBrandToPfClass[brand];
  }
  for (var i = brandIconElement.classList.length - 1; i >= 0; i--) {
  	brandIconElement.classList.remove(brandIconElement.classList[i]);
  }
  brandIconElement.classList.add('pf');
  brandIconElement.classList.add(pfClass);
}



function createElementsAfterReady() {
  let Stripe = window.Stripe;
  let stripe = Stripe(this.props.stripeKey);
  this.stripe = stripe;

  let elements = stripe.elements();

  // Create card elements
  let cardNumber = elements.create('cardNumber', {
    style: style,
    classes: elementClasses,
  });
  let cardExpiry = elements.create('cardExpiry', {
    style: style,
    classes: elementClasses,
  });
  let cardCvc = elements.create('cardCvc', {
    style: style,
    classes: elementClasses,
  });

  listenErrors.call(this, [cardNumber, cardExpiry, cardCvc]);

  // To set card icon
  cardNumber.on('change', (event) => {
    // Switch brand logo
    if (event.brand) {
      setBrandIcon.call(this, event.brand);
    }    
  });


  cardNumber.mount(this.cardNumberElement.current);
  cardExpiry.mount(this.cardExpiryElement.current);
  cardCvc.mount(this.cardCVCElement.current);

  this.card = cardNumber;

  // Create an instance of the card Element.
  // let card = elements.create('card', {
  //   style: style,
  //   hidePostalCode: true
  // });
  // this.card = card;

  // // Mount card
  // card.mount(this.cardElementContainer.current);

  // // Listen for changes 
  // card.addEventListener('change', (event) => {

  //   if (event.error) {
  //     this.setState({
  //       cardError: event.error.message
  //     });
  //   } else {
  //     this.setState({
  //       cardError: ''
  //     });
  //   }
  // });

  this.setState({
    isReady: true
  });

}

function loadStripeScript() {
  const script = document.createElement('script');
  const linkCss = document.createElement('link');
  if (typeof this.props.onScriptTagCreated === 'function') {
    this.props.onScriptTagCreated(script);
  }

  script.src = 'https://js.stripe.com/v3/';
  script.async = 1;
  linkCss.rel = 'stylesheet';
  linkCss.type = "text/css";
  linkCss.href = "https://cdnjs.cloudflare.com/ajax/libs/paymentfont/1.1.2/css/paymentfont.min.css";

  this.loadPromise = (() => {
    let canceled = false;
    const promise = new Promise((resolve, reject) => {
      script.onload = () => {
        resolve();
        this.onScriptLoaded();
      };
      script.onerror = (event) => {
        reject(event);
        this.onScriptError(event);
      };
    });

    const wrappedPromise = new Promise((accept, cancel) => {
      promise.then(() => canceled ? cancel({ isCanceled: true }) : accept()); // eslint-disable-line no-confusing-arrow
      promise.catch(error => canceled ? cancel({ isCanceled: true }) : cancel(error)); // eslint-disable-line no-confusing-arrow
    });

    return {
      promise: wrappedPromise,
      cancel() { canceled = true; },
    };
  })();

  this.loadPromise.promise
    .then(this.onScriptLoaded)
    .catch(this.onScriptError);

  document.body.appendChild(script);
  document.body.appendChild(linkCss);
}


class Checkout extends React.Component {

  card = null;
  stripe = null;

  constructor() {
    super();
    //this.cardElementContainer = React.createRef();

    this.cardNumberElement = React.createRef();
    this.cardExpiryElement = React.createRef();
    this.cardCVCElement = React.createRef();
    this.cardNumberBrandElement = React.createRef();


    this.onScriptLoaded = this.onScriptLoaded.bind(this);
    this.onScriptError = this.onScriptError.bind(this);
    this.state = {
      cardError: '',
      isReady: false
    };
  }

  componentDidMount() {
    loadStripeScript.call(this);
  }

  userPay = (event) => {
    this.props.appBusyStateChange(true);
    event.preventDefault();
    this.setState({
      cardError: ''
    });
    let card = this.card;
    let stripe = this.stripe;
    let extraData = {
      email: this.props.email,
      amount: this.props.amount,
      currency: this.props.currency,
      name: this.props.userData.firstName + ' ' + this.props.userData.lastName
    };
    stripe.createToken(card).then((result) => {
      this.props.appBusyStateChange(false);
      if (result.error) {
        // Inform the user if there was an error.          
        this.setState({
          cardError: result.error.message
        });
      } else {
        // Send the token to your server.        
        if (result.token) {
          this.props.token(result.token);
        }
      }
    });
  };

  onScriptLoaded() {
    createElementsAfterReady.call(this);
  }

  onCancel() {
    this.props.closed();
  }

  onScriptError() {
    this.setState({
      cardError: 'Some error occured. Please relead and try again.'
    });
  }

  componentWillUnmount() {
    if (this.loadPromise) {
      this.loadPromise.cancel();
    }
  }



  render() {
    return (
      <form action="/charge" method="post" onSubmit={(event) => { this.userPay(event) }} className="form-signin form-stripe" noValidate>
        <div class="form-label-group header-logo">
          <img src="images/logo.jpg" className="logo logo-login" alt="" />
          <h1 className="login-marb">&nbsp;</h1>
        </div>

        <div className="form-body stripeElements">
          {this.state && this.state.cardError &&
            <div className="alert alert-danger" role="alert">{this.state.cardError}</div>
          }
          {/* <div id="card-element" ref={this.cardElementContainer}></div> */}


          <div class="row">
            <div class="field">
              <div id="card-number" ref={this.cardNumberElement} class="input empty"></div>              
              <label for="card-number" >Card number</label>
              <div class="baseline"></div>
            </div>
            <span class="brand" >
              <i class="pf pf-credit-card" ref={this.cardNumberBrandElement}></i>
            </span>

          </div>
          <div class="row">
            <div class="field half-width">
              <div id="card-expiry" ref={this.cardExpiryElement} class="input empty"></div>
              <label for="card-expiry" >Expiration</label>
              <div class="baseline"></div>
            </div>
            <div class="field half-width">
              <div id="card-cvc" ref={this.cardCVCElement} class="input empty"></div>
              <label for="card-cvc" >CVC</label>
              <div class="baseline"></div>
            </div>
          </div>


          {this.state && this.state.isReady &&
            <div className="form-footer form-footer-strip">

              

              <button className="btn btn-default" onClick={() => { this.onCancel(); }}>Cancel</button>
              <span>&nbsp;&nbsp;</span>
              <button className="btn btn-primary" >Pay £{this.props.actualAmnt.toFixed(2)}</button>
              <a href="https://stripe.com/gb/checkout/legal" target="_blank">
              <img src="images/powered_by_stripe.png" className="logo-stripe" alt="" />
              </a>
            </div>
          }
        </div>
        
          <FooterTmpl />
      </form>
    );
  }
}

//const StripeCheckout = injectStripe(Checkout);

export default Checkout;
