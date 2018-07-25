import React from 'react';

import Header from '../Header/Header';
import LeftPanel from '../Header/LeftPanel';
import { routes } from '../../Shared/Routes';
import TopUpOnLoad from '../TopUp/TopUpOnLoad';
import FooterTmpl from '../Footer/FooterTmpl';

const noVal = 'N/A';

function userPlanValidity() {

  if (!this.props.userData.planPurchaseDate) {
    return noVal;
  }

  return (
    <React.Fragment>
      <span class="font-bold">
        {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(this.props.userData.planPurchaseDate))}
      </span>
      
      {this.props.userData.planExpireDate && 
      <React.Fragment>     
      <span>&nbsp; To &nbsp;</span>
      <span class="font-bold">
        {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(this.props.userData.planExpireDate))}
      </span>
      </React.Fragment>
      }
    </React.Fragment>
  )
}

function UserDashTmpl() {

  return (
    <form class="inner-container" noValidate>
      <div class="form-signin">
        <Header isUserDash="1" />
        <div class="container-body">
          <div class="row">
            <LeftPanel {...this.props} />           
            {this.props.toggleState && this.props.userData.planId && this.isUserPlanActive &&
              <TopUpOnLoad {...this.props} />
            }
            <div class="col-sm-8">
              <div class="dashboard">

              {this.props.userData.planName &&
                <div class="row justify-content-between">
                  <div class="col-sm-12">
                    <h1 class="">{this.props.userData.planName}
                      {this.isUserPlanActive &&
                        <span class="tags tags-active">Active</span>
                      }
                      {!this.isUserPlanActive &&
                        <span class="tags tags-deactive">InActive</span>
                      }                      
                    </h1>
                  </div>

                </div>
              }

                <div class="row">
                  <div class="col-xs-5">User Type: </div>
                  <div class="col-xs-7"><span class="font-bold">{this.props.userData.user_type}</span> </div>
                </div>


                {/** <div class="row">
                  <div class="col-xs-5">Subscription ID: </div>
                  <div class="col-xs-7"><span class="font-bold">098393</span> </div>
                </div>
               **/}

                <div class="row">
                  <div class="col-xs-5">Price:</div>
                  <div class="col-xs-7">
                    <span class="font-bold">
                      {this.props.userData.planPrice ? '£' + this.props.userData.planPrice : noVal}
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">Subscription Time: </div>
                  <div class="col-xs-7">
                  {userPlanValidity.call(this)}
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">Remaining SMS: </div>
                  <div class="col-xs-7">
                    <span class="font-bold"> {this.props.userData.remainingSMS ? this.props.userData.remainingSMS : noVal}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">Remaining MMS:</div>
                  <div class="col-xs-7">
                    <span class="font-bold">{this.props.userData.remainingMMS ? this.props.userData.remainingMMS : noVal}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">Subscribed SMS: </div>
                  <div class="col-xs-7">
                    <span class="font-bold">{this.props.userData.subsribedSMS ? this.props.userData.subsribedSMS : noVal}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">Subscribed MMS:</div>
                  <div class="col-xs-7">
                    <span class="font-bold"> {this.props.userData.subsribedMMS ? this.props.userData.subsribedMMS : noVal}</span>
                  </div>
                </div>
                <div class="form-footer2">
                  <button class="btn btn-primary btn2" type="button" onClick={() => {
                    this.props.history.replace(routes.myaccount.path);
                  }}>RENEW</button>

                  {this.props.userData.planId && this.isUserPlanActive &&
                  <button class="btn btn-secondary btn2" type="button" onClick={() => {
                    this.props.togglePopUp(true)
                  }} >TOP UP</button>}


                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterTmpl />
        </div>
       
    </form>





  )
}


export default UserDashTmpl;
