import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import TermsPageTmpl from './TermsPageTmpl';
import {routes} from '../../Shared/Routes';


class TermsPage extends Component {
    constructor(props) {
        super(props);              
    }

    render () {          
      return TermsPageTmpl.call(this);
    }
}

export default TermsPage




