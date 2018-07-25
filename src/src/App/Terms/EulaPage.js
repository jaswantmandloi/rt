import React, { Component } from 'react';

import EulaPageTmpl from './EulaPageTmpl';
import {routes} from '../../Shared/Routes';


class EulaPage extends Component {
    constructor(props) {
        super(props);              
    }

    render () {          
      return EulaPageTmpl.call(this);
    }
}

export default EulaPage




