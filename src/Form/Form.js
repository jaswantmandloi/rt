import React, { Component } from 'react';
import FormTmpl from './FormTmpl';
import { connect } from 'react-redux'




const mapStateToProps = state => {
    return  ({
    });
  }
  
  const mapDispatchToProps = dispatch => {
     return ({
  })
  }







class Form extends Component {
    constructor(props) {    
        super(props);

        let test = props;
    }
    render () {
        return FormTmpl.call(this);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);