import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments';
import CommentsRdcr from './CommentsRdcr';

const mapStateToProps = state => {
    
    return  ({
        commentList: state.CommentsRdcr
    });    
  }
  
  const mapDispatchToProps = dispatch => {      
     return ({
        addComment: () => {
            
            dispatch({
                type : 'ADD_COMMENT',
                text : new Date().getTime().toString()
            });
        }
    })
  
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments)
