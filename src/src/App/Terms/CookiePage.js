import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import CookiePageTmpl from './CookiePageTmpl';
import {routes} from '../../Shared/Routes';


class CookiePage extends Component {
    constructor(props) {
        super(props);              
    }

    render () {          
      return CookiePageTmpl.call(this);
    }
}

export default CookiePage




