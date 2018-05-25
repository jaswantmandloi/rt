import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';


import SharedBlog from './SharedBlog';
import './Blog.css'
import CommentsCntnr from './Comments/CommentsCntnr';


function BlogTmpl() {

    let blogs = this.props;

    return (
        <div className="container">
            Testing blog Component
            <button  
            onClick={() => this.props.addBlog()}
            > Add New Blog </button>
            <SharedBlog />

            {this.props.blogList.map((blog, index)=>{
                return (
                    <div key={index}>
                        {blog.text}
                    </div>
                );
            })}

            <div>            
            <Link to={`${this.props.match.path}/comments`}>
                <span>Comments</span>
            </Link>                
            </div>

            <div>
                Comments outlet
                <Route path={`${this.props.match.path}/comments`} component={CommentsCntnr} />
            </div>


            

        </div>
    )

}
export default BlogTmpl