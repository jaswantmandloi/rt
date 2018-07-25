import React from 'react';
import PaymentCalculation from '../Stripe/PaymentCalculation';

function planHeader(plans) {
  return (
    <thead>
      <tr>
      <th>Plan</th>
        {plans && plans.map((planData) => {
          return (<th key={planData.id}>{planData.name}</th>);
        })}
      </tr>
    </thead>)
}

function planBody(plans) {
  return (
    <tbody>
      <tr>
        <td>MMS</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>{planData.totalMMS} <span>£ {planData.MMSPrice.toFixed(2)}</span></td>);
        })}
      </tr>
      <tr>
        <td scope="row">SMS</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>{planData.totalSMS} <span>£ {planData.SMSPrice.toFixed(2)}</span></td>);
        })}
      </tr>
      <tr>
        <td scope="row">Total</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>£{planData.totalPrice.toFixed(2)}</td>);
        })}
      </tr>
      <tr>
        <td scope="row">App Service Charge</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>£{planData.appServiceCharge.toFixed(2)}</td>);
        })}
      </tr>
      
      <tr>
        <td scope="row">VAT Charge</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>£{planData.vatCharge.toFixed(2)}</td>);
        })}
      </tr>

    </tbody>)
}

function planFooter(plans) {
  //const selectedPlanData = this.props.selectedPlan;
  const selectedPlanId = this.props.selectedPlanInfo.stripePlanId;
  
  return (
    <tfoot>
      <tr>
        <td scope="row">Grand Total</td>
        {plans && plans.map((planData) => {
          return (<td key={planData.id}>£{planData.grandTotalShow.toFixed(2)}</td>);
        })}        
      </tr>
      <tr>
        <td>&nbsp;</td>
        {plans && plans.map((planData) => {

          let planBtnCls = 'btn btn-default btn-xs';
          if(selectedPlanId == planData.id) {
            planBtnCls += ' selected';
          }

          return (<td key={planData.id}>
            <a 
            href="javascript:void(0)" 
            onClick={() => { 

              this.onSelectPlan(planData.id, planData.grandTotal); 

              // if(this.props.isSignUpPage) {
              //   this.props.onSelectPlan(planData.id, planData.grandTotal);                 
              // } else {
                
              // }              
            }}
            className={planBtnCls}>Select</a>
            </td>);
        })}            
      </tr>
    </tfoot>
  )
}

function getActivePlanCode(plans) {
  const selectedPlanId = this.props.userData ? this.props.userData.planId : 0;
  
  return(<colgroup>
    <col span="1" class="td-deactive"/>
    {plans && plans.map((planData) => {
      if(selectedPlanId == planData.id) {
        return <col key={planData.id} span="1" class="td-active"/>
      }
      return <col key={planData.id} span="1" class="td-deactive"/>
    })}    
  </colgroup>)
}


function getPlan(plans) {

  let purchaseBtnProps = {};
  if(this.props.selectedPlan.planId && this.props.selectedPlan.user_type) {
    purchaseBtnProps.disabled = true;
  }

  return (
    <React.Fragment>
    <h2>Choose the Plan</h2>
    <div class="plan-table">
      <table class="table table-plan">
        {getActivePlanCode.call(this, plans)}
        {planHeader.call(this, plans)}
        {planBody.call(this, plans)}
        {planFooter.call(this, plans)}
      </table>
    </div>
    { this.props.isUserInfoPage &&
    <div class="form-footer purchase-footer">
      <button class="btn btn-lg btn-primary btn-lg2" type="button" onClick={() => {
        this.purchasePlan();
      }} {...purchaseBtnProps}>Purchase Plan</button>            
    </div>
    }
    </React.Fragment>
  )
}


function PlansTmpl() {

  const error = this.props.error;
  const plans = PaymentCalculation.processPlanData(this.props.plans);

  if(!plans || ( Array.isArray(plans) && !plans.length )) {
    return null;
  }

  return (
    <React.Fragment>
    {this.props.isSignUpPage && this.props.selectedPlanInfo && this.props.selectedPlanInfo.error &&
      <div class="alert alert-danger" role="alert">{this.props.selectedPlanInfo.error}</div>}
      
    {getPlan.call(this, plans)}
    </React.Fragment>
  )

}


export default PlansTmpl;
