import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../Shared/Routes';

class LeftPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let dashboardLinkCls = (this.props.history.location.pathname == routes.dashboard.path) ? 
        "list-group-item list-group-item-action active" : "list-group-item list-group-item-action ";
        let myAccLinkCls = (this.props.history.location.pathname == routes.myaccount.path) ? 
        "list-group-item list-group-item-action active" : "list-group-item list-group-item-action ";

        return (<div class="col-sm-4">
            <div class="list-group nav-sidebar">
                <NavLink 
                to={routes.dashboard.path} 
                className={dashboardLinkCls}>
                    My Purchases
                </NavLink>

                <NavLink 
                to={routes.myaccount.path} 
                className={myAccLinkCls} >
                    My Account
                </NavLink>

            </div>
        </div>)
    }
}

export default LeftPanel



