import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './NotFound.css'
import { routes } from '../../Shared/Routes';

class NotFound extends Component {
    render() {
        return (
            <div class="inner-container">
                <div class="form-signin">
                    <div class="form-label-group header-logo">
                        <img src="images/logo.jpg" class="logo logo-login" alt="" />
                        <h1 class="login-marb text-center">404</h1>
                    </div>
                    <div class="form-body body-404">
                        <div class="text-center">
                            <h1 class="heading-lead">OOPS! NOT FOUND</h1>
                            <p class="p-lead">Apologies, but we were unable to find what you were looking for.</p>

                            <p class="txt18 hidden-xs">Click here to go to &nbsp;
                        <Link to={routes.rootPath.path} class="font-bold" >{routes.rootPath.linkName}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound