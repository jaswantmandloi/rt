import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';


function HeaderTmpl() {

  if (this.props.isSignUpHeader) {
    return (
      <div class="form-label-group header-logo">
        <img src="images/logo.jpg" class="logo logo-login" alt="" />
        <h1 class="login-marb text-center">
          <Link to={routes.signin.path} >{routes.signin.linkName}</Link>
        </h1>
      </div>
    )
  }

  if (this.props.isUserDash) {

    let mailtoLink = '';
    if (this.props.loggedInUser && this.props.loggedInUser.email) {
      mailtoLink = 'mailto:' + this.props.loggedInUser.email;
    }

    return (

      <div class="form-label-group header-logo d-flex"> <img src="images/logo.jpg" class="logo logo-mart" alt="" />
        <div class="ml-auto header-right"><div class="top-links">
          
          {/**<a href="javascript:;">Contact Us</a> | **/}
          
          <a href="javascript:void()" onClick={() => {
            this.props.logout();
          }}> Logout </a>

        </div>
          <div class="media nav-media">
            {/* <div class="media-left">
              <div class="media-img"><img src="images/default-pic.jpg" alt="" />
              </div>
            </div> */}
            <div class="media-body">
              {this.props.loggedInUser && this.props.loggedInUser.email && this.props.userData &&
                <React.Fragment>
                  <h5 class="mt-0">{this.props.userData.firstName} {this.props.userData.lastName} </h5>
                  <p><a href={mailtoLink}>{this.props.loggedInUser.email}</a></p>
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>

    )
  }

  return null;

}


export default HeaderTmpl;
