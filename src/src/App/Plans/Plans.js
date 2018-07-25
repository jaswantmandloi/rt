import React, { Component } from 'react';
import { connect } from 'react-redux';

import {routes} from '../../Shared/Routes';
import PlansTmpl from './PlansTmpl';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';
import PaymentCalculation from '../Stripe/PaymentCalculation';


const mapStateToProps = state => {
  return ({
    loggedInUser: state.firebase.loggedInUser,
    plans: state.firebase.plans,
    userData: state.firebase.userData,
    selectedPlanInfo : state.AppRdcr.selectedPlanInfo
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    appBusyStateChange: (isAppBusy) => {
      dispatch({
        type: 'APP_BUSY_STATE_CHANGE',
        payload: { isAppBusy: isAppBusy }
      });
    },

    userPlanChange : (stripePlanId, stripeAmountToBePaid, reset = false) => {
      if(reset) {
        dispatch({
          type: 'USER_PLAN_CHANGE',
          payload: {}
        });

        return;
      }
      dispatch({
        type: 'USER_PLAN_CHANGE',
        payload: {stripePlanId, stripeAmountToBePaid}
      });
    }
  })
}

class Plans extends Component {

  constructor(props) {
    super(props);
    FirebaseActions.getPlanData();
  }

  componentDidMount() {
    // Reset selected plan on mount
    if(!this.props.isSignUpPage) {
      this.props.userPlanChange(0, 0, true);
    }
    
  }

  componentDidUpdate() {
    if (!this.props.isSignUpPage && this.props.userData && this.props.userData.stripeAmountToBePaid) {
      this.props.history.replace(routes.stripe.path);
    }    

    // if(!this.props.isSignUpPage && this.props.userData && !PaymentCalculation.isUserPlanExpired(this.props.userData)) {            
    //   this.props.history.replace(routes.dashboard.path);
    // }
  }

  onSelectPlan(planId, stripeAmountToBePaid) {
    this.props.userPlanChange(planId, stripeAmountToBePaid);
  }

  purchasePlan() {
    if(!this.props.selectedPlan.stripePlanId) {
      return;
    }
    
    this.props.appBusyStateChange(true);
    FirebaseActions.updateUserData({
      stripePlanId: this.props.selectedPlan.stripePlanId,
      stripeAmountToBePaid: this.props.selectedPlan.stripeAmountToBePaid
    });
  }

  render() {
    return PlansTmpl.call(this);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans)





