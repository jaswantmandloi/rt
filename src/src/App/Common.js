import React, { Component } from 'react';
import { connect } from 'react-redux'

import {routes} from '../Shared/Routes';
import Loader from './Loader/Loader';



const mapStateToProps = state => {    
    return  ({
        loggedInUser: state.firebase.loggedInUser , 
        isAppReady : state.AppRdcr.isAppReady , 
    });    
  }
  
const mapDispatchToProps = dispatch => {      
    return ({      
        appBusyStateChange : (appBusyState) => {
            dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : appBusyState}
            });
        }  
    })
}


export default function appCommonFn(AppComponent, isAfterLoggedIn = false) {
    class AppCommonCompnt extends Component {    

        constructor(props) {
            super(props);                         
        }  
        
        componentDidMount() {
            if(!this.props.isAppReady) {
                return;
            }

            if(!isAfterLoggedIn && this.props.loggedInUser) {
                this.props.history.replace(routes.dashboard.path);           
            }  

            if(isAfterLoggedIn && ('loggedInUser' in this.props) && !this.props.loggedInUser) {
                this.props.history.replace(routes.signin.path);  
            }  
        }
    
        componentDidUpdate() {
            if(!this.props.isAppReady) {
                return;
            }
            
            if(!isAfterLoggedIn && this.props.loggedInUser) {
                this.props.history.replace(routes.dashboard.path);           
            }  

            if(isAfterLoggedIn && ('loggedInUser' in this.props) && !this.props.loggedInUser) {
                this.props.history.replace(routes.signin.path);  
            } 
        }
    
        render () { 
            if(!isAfterLoggedIn && !('loggedInUser' in this.props)) {      
                return <Loader isComponentBusy={true} />;
            }                   
            return <AppComponent {...this.props} />
        }
    }
    
    

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppCommonCompnt)
}










