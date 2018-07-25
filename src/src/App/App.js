import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppRdcr from './AppRdcr';
import AppTmpl from './AppTmpl';

import FirebaseActions from '../Shared/Firebase/FirebaseActions';


const mapStateToProps = state => {    
    return  ({
        loggedInUser: state.firebase.loggedInUser,
        isAppBusy: state.AppRdcr.isAppBusy,
    });    
  }
  
const mapDispatchToProps = dispatch => {      
    return ({
        logout : () => {
            FirebaseActions.logout();            
        }
    })
}


class App extends Component {
    constructor(props) {
        super(props);        
    }
    render () {
       return AppTmpl.call(this);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)