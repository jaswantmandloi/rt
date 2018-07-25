import React, { Component } from 'react';
import { connect } from 'react-redux'

import SignInTmpl from './SignInTmpl';
import SignInRdcr from './SignInRdcr';
import {routes} from '../../Shared/Routes';
import Common from '../Common';


const mapStateToProps = state => {    
    return  ({          
        signInState: state.SignInRdcr.signInState,      
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({ 
        resetSignInState : () => {
            dispatch({
                type : 'CHANGE_SIGNIN_STATE',
                payload : {}
            });
        }
    })
}


class SignIn extends Component {
    constructor(props) {
        super(props);                  
    }     
    
    componentWillMount() {
        this.props.resetSignInState();
    }
            
    render () {                        
       return SignInTmpl.call(this);
    }
}


const SignInCnct = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

export default Common(SignInCnct)