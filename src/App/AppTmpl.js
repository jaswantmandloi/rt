import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import OnDemand from '../Shared/OnDemand';

import NotFound from '../NotFound/NotFound'
import './App.css';
import { store, history} from '../Shared/Store';


function AppTmpl () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                    <div>
                        <header className="header">
                            <nav className="navbar container">
                                <div className="navbar-brand">
                                    <Link to="/">
                                        <span className="navbar-item">
                                            Lazy Loading Routes123
                                        </span>
                                    </Link>
                                </div>

                                <div className="navbar-end">
                                    <Link to="/maps">
                                        <span className="navbar-item">Maps</span>
                                    </Link>
                                    <Link to="/blog">
                                        <span className="navbar-item">Blog</span>
                                    </Link>
                                    <Link to="/formtest">
                                        <span className="navbar-item">Form</span>
                                    </Link>
                                    <Link to="/xhrtest">
                                        <span className="navbar-item">Xhr</span>
                                    </Link>
                                </div>
                            </nav>
                        </header>

                        <section className="content">
                            <Switch>
                                <Route exact path="/" component={OnDemand.Home} />
                                <Route path="/maps" component={OnDemand.Maps} />                                                                
                                <Route path="/blog" component={OnDemand.Blog} />
                                <Route path="/formtest" component={OnDemand.Form} />
                                <Route path="/xhrtest" component={OnDemand.Xhr} />                                                                                                    
                                
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </section>
                    </div>
            </ConnectedRouter>
        </Provider>
    )
}


export default AppTmpl;
