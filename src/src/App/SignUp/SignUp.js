import React, { Component } from 'react';
import { connect } from 'react-redux'

import {routes} from '../../Shared/Routes';
import SignUpRdcr from './SignUpRdcr';
import SignUpTmpl from './SignUpTmpl';
import Common from '../Common';

const mapStateToProps = state => {    
    return  ({        
        signUpState: state.SignUpRdcr,
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({ 
        resetSignUpState : () => {
            dispatch({
                type : 'SIGNUP_RESET',
                payload : {}
            });
        }
    })
}


class SignUp extends Component {
    constructor(props) {
        super(props);           
    }    

    componentWillMount() {
        //this.props.resetSignUpState();
    }

    render () {        
       return SignUpTmpl.call(this);
    }
}


const SignUpCnct = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default Common(SignUpCnct)