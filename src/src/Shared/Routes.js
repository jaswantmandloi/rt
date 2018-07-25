import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import NotFoundOnLoad from '../App/NotFound/NotFoundOnLoad';
import SignUpOnLoad from '../App/SignUp/SignUpOnLoad';
import SignInOnLoad from '../App/SignIn/SignInOnLoad';
import UserDashOnLoad from '../App/UserDash/UserDashOnLoad';
import ForgotPassOnLoad from '../App/ForgotPass/ForgotPassOnLoad';
import StripePageOnLoad from '../App/Stripe/StripePageOnLoad';
import PlansOnLoad from '../App/Plans/PlansOnLoad';
import MyAccountOnLoad from '../App/MyAccount/MyAccountOnLoad';

import TermsPageOnLoad from '../App/Terms/TermsPageOnLoad';
import PrivacyPageOnLoad from '../App/Terms/PrivacyPageOnLoad';
import EulaPageOnLoad from '../App/Terms/EulaPageOnLoad';
import CookiePageOnLoad from '../App/Terms/CookiePageOnLoad';


const isProduction = true;
let baseUrl = 'http://192.168.0.32';
let prefixUrl = '/js/textend/build';
let stripeChargeUrl = 'http://192.168.0.32/stripe/charge_payment.php';

if(isProduction) {
    baseUrl = 'https://textend.co.uk';
    prefixUrl = '';
    stripeChargeUrl = 'https://textend.co.uk/stripe/charge_payment.php';
} else {
    baseUrl = 'http://localhost:3000';
    prefixUrl = '';    
    stripeChargeUrl = 'http://192.168.0.32/stripe/charge_payment.php';
}


const routes = {
    stripe : { path: prefixUrl + '/stripe', component: StripePageOnLoad, linkName: '' },
    plans : { path: prefixUrl + '/plans', component: PlansOnLoad, linkName: '' },
    myaccount : { path: prefixUrl + '/myaccount', component: MyAccountOnLoad, linkName: '' },
    terms : { path: prefixUrl + '/terms', component: TermsPageOnLoad, linkName: '' },
    eula : { path: prefixUrl + '/eula', component: EulaPageOnLoad, linkName: '' },
    privacy : { path: prefixUrl + '/privacy', component: PrivacyPageOnLoad, linkName: '' },
    cookie : { path: prefixUrl + '/cookie', component: CookiePageOnLoad, linkName: '' },
    rootPath: { path: prefixUrl + '/', component: SignInOnLoad, linkName: 'Home', onUserLoggedIn: false },
    signin: { path: prefixUrl + '/signin', component: SignInOnLoad, linkName: 'Sign In', onUserLoggedIn: false },
    signup: { path: prefixUrl + '/signup', component: SignUpOnLoad, linkName: 'Sign Up', onUserLoggedIn: false },
    forgotPass: { path: prefixUrl + '/forgot-password', component: ForgotPassOnLoad, linkName: 'Forgot Password', onUserLoggedIn: false },
    dashboard: { path: prefixUrl + '/dashboard', component: UserDashOnLoad, linkName: 'Dashboard', onUserLoggedIn: true },
    
    all: { path: '**', component: NotFoundOnLoad, linkName: '' },    
};


const mapStateToProps = state => {
    return ({
        loggedInUser: state.firebase.loggedInUser,
    });
}

const mapDispatchToProps = dispatch => {
    return ({})
}


const RoutesTemplateComp = (props) => {

    let isLink = props.isLink;

    return Object.keys(routes).map((routeKey) => {
        let route = routes[routeKey];
        if (isLink) {
            if (!route.linkName) {
                return null;
            }

            if (props.loggedInUser && !route.onUserLoggedIn) {
                return null;
            }

            if (!props.loggedInUser && route.onUserLoggedIn) {
                return null;
            }

            return (<Link to={route.path} key={routeKey}>
                <span className="navbar-item">{route.linkName}</span>
            </Link>);
        }

        if (route.path) {
            return <Route exact path={route.path} component={route.component} key={routeKey} />;
        }

        return <Route component={route.component} key={routeKey} />;
    });
}

const RoutesTemplate = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutesTemplateComp)


export { RoutesTemplate, routes, RoutesTemplateComp, baseUrl, prefixUrl, stripeChargeUrl };