import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import PrivacyPageTmpl from './PrivacyPageTmpl';
import {routes} from '../../Shared/Routes';


class PrivacyPage extends Component {
    constructor(props) {
        super(props);              
    }

    render () {          
      return PrivacyPageTmpl.call(this);
    }
}

export default PrivacyPage




