import React, { Component } from 'react'

function CommentsTmpl() {


    return (
        <div className="container">
            Testing Comment Component
            <button  
            onClick={() => this.props.addComment()}
            > 
                Add New Comment 
            </button>            

            {this.props.commentList.map((comment, index)=>{
                return (
                    <div key={index}>
                        {comment.text}
                    </div>
                );
            })}

        </div>
    )

}
export default CommentsTmpl