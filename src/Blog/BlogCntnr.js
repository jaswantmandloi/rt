import React from 'react'
import { connect } from 'react-redux'

import { getBlog } from './BlogActions';
import Blog from './Blog';
import BlogRdcr from './BlogRdcr';

const mapStateToProps = state => {
    
    return  ({
        blogList: state.BlogRdcr
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
)(Blog)
