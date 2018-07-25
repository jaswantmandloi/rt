import React, { Component } from 'react';
import { connect } from 'react-redux'

import HeaderTmpl from './HeaderTmpl';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';


const mapStateToProps = state => {    
    return  ({
        loggedInUser: state.firebase.loggedInUser ,
        userData: state.firebase.userData,      
    });    
  }
  
const mapDispatchToProps = dispatch => {      
    return ({
        logout : () => {
            FirebaseActions.logout();            
        }
    })
}


class Header extends Component {    

    constructor(props) {
        super(props);                         
    }    

    render () {
       return HeaderTmpl.call(this);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)



