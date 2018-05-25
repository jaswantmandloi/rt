import React, { Component } from 'react';
import AppTmpl from './AppTmpl';

class App extends Component {
    constructor(props) {
        super(props);        
    }
    render () {
       return AppTmpl.call(this);
    }
}

export default App