import React from 'react'
import { connect } from 'react-redux'
import App from './App';
import AppRdcr from './AppRdcr';

const mapStateToProps = state => {
    
    return  ({
        list: state.AppRdcr
    });
  
  
  }
  
  const mapDispatchToProps = dispatch => {
      
     return ({
        addBlog: () => {
            
            dispatch({
                type : 'ADD_BLOG',
                text : new Date().getTime().toString()
            });
        }
  })
  
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
