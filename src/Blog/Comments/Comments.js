import React, { Component } from 'react';
import CommentsTmpl from './CommentsTmpl';

class Comments extends Component {
    constructor(props) {    
        super(props);
    }
    render () {
        return CommentsTmpl.call(this);
    }
}

export default Comments