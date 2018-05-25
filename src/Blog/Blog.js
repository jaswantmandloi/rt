import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogTmpl from './BlogTmpl';

class Blog extends Component {
    constructor(props) {    
        super(props);

        let test = props;
    }
    render () {
        return BlogTmpl.call(this);
    }
}

export default Blog