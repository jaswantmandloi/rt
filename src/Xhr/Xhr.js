import React, { Component } from 'react';
import { connect } from 'react-redux';

import XhrTmpl from './XhrTmpl';
import XhrRdcr from './XhrRdcr';
import XhrActions from './XhrActions';




const mapStateToProps = state => {
    return  ({
        books : state.XhrRdcr
    });
  }
  
const mapDispatchToProps = dispatch => {
     return ({
         fetchBooks : () => {
            dispatch(XhrActions.fetchBooks())
         }
     })
}

const initComponent = (props) => {
    if(initComponent.isInit) {
        return;
    }
    initComponent.isInit = true;
    props.fetchBooks();
}

const XhrComponent = (props) =>  {  
    
    initComponent(props);
    
    return XhrTmpl(props);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(XhrComponent);