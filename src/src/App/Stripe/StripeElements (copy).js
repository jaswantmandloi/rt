import React from 'react';
import PropTypes from 'prop-types';
import {Elements, CardElement, injectStripe} from 'react-stripe-elements';

let scriptLoading = false;
let scriptLoaded = false;
let scriptDidError = false;


class CardForm extends React.Component {
  render() {
    return (
      <form onSubmit={() => this.props.stripe.createToken().then(payload => console.log(payload))}>
        <label>
          Card details
          <CardElement />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}

class StripeElements extends React.Component {
  

  static _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      buttonActive: false,
    };

    this.submit = this.submit.bind(this);

  }

  componentDidMount() {
    this._isMounted = true;
    if (scriptLoaded) {
      return;
    }

    if (scriptLoading) {
      return;
    }

    scriptLoading = true;

    const script = document.createElement('script');
    if (typeof this.props.onScriptTagCreated === 'function') {
      this.props.onScriptTagCreated(script);
    }

    script.src = 'https://js.stripe.com/v3/';
    script.async = 1;

    this.loadPromise = (() => {
      let canceled = false;
      const promise = new Promise((resolve, reject) => {
        script.onload = () => {
          scriptLoaded = true;
          scriptLoading = false;
          resolve();
          this.onScriptLoaded();
        };
        script.onerror = (event) => {
          scriptDidError = true;
          scriptLoading = false;
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
  }

  

  componentWillUnmount() {
    this._isMounted = false;
    if (this.loadPromise) {
      this.loadPromise.cancel();
    }
    // if (ReactStripeCheckout.stripeHandler && this.state.open) {
    //   ReactStripeCheckout.stripeHandler.close();
    // }
  }

  onScriptLoaded = () => {
    this.props.opened();
  }

  onScriptError = (...args) => {    
    if (this.props.onScriptError) {
      this.props.onScriptError.apply(this, args);
    }
  }

  
  async submit(ev) {
    
    //this.props.token

  }
  

  
  render() {
    return(
      <div className="Checkout">
      <h1>Available Elements</h1>
      <Elements>
        <CardForm />
      </Elements>
    </div>
    )
  }

  

  

  

  
}



export default injectStripe(StripeElements);