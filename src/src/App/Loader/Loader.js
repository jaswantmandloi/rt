import React, { Component } from 'react';
import { connect } from 'react-redux'

import loaderSvg from '../loader.svg';


const mapStateToProps = state => {
    return ({
        isAppBusy: state.AppRdcr.isAppBusy,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
    })
}


class Loader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if ( this.props.isAppBusy || this.props.isComponentBusy) {
            return (               
                <div className="loader">
                    <img src={loaderSvg} />
                </div>
            )
        }

        return null
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader)



