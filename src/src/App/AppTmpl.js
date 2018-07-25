import React from 'react';
import {    
    Switch,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import { store, history} from '../Shared/Store';
import  Loader from './Loader/Loader';
import {RoutesTemplate, RoutesTemplateComp} from '../Shared/Routes';

function AppTmpl () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history} > 
            <React.Fragment>
            <Loader />
            <Switch>            
                {RoutesTemplateComp({isLink : 0})}
            </Switch>
            </React.Fragment>
            </ConnectedRouter>
        </Provider>
    )
}


export default AppTmpl;
