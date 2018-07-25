import React, { Component } from 'react';
import { connect } from 'react-redux'

import MyAccountTmpl from './MyAccountTmpl';
import {routes} from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import Common from '../Common';


const mapStateToProps = state => {   
      
    return  ({        
        userData: state.firebase.userData,
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({        
    })

}


class MyAccount extends Component {
    constructor(props) {
        super(props);  
    }    
    
    render () {
        if(!this.props.userData) {            
            return <Loader isComponentBusy={true} />;
        }  
                
       return MyAccountTmpl.call(this);
    }
}


const myAcctCnct = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount)

export default Common(myAcctCnct, true)