import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, SubmissionError, formValueSelector, change } from 'redux-form';

import UserInfoTmpl from './UserInfoTmpl';
import { routes } from '../../Shared/Routes';
import Loader from '../Loader/Loader';
import FirebaseActions from '../../Shared/Firebase/FirebaseActions';


const validate = values => {
    const errors = {}
    
    if (values.password != values.verifypassword) {
        errors.verifypassword = 'Password and verify password should be same.'
    }

    if (!values.firstName) {
        errors.firstName = 'First name is required.'
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required.'
    }
    
    if (values.user_type == 'Business' && !values.company_name) {
        errors.company_name = 'Company name is required.'
    }

    if (values.user_type == 'Business' && !values.company_registration) {
        errors.company_registration = 'Company registration id is required.'
    }

    return errors
}

const warn = values => {
    const warnings = {};
    return warnings
}

let onSubmitFail = (errors, dispatch) => {
    //dispatch(change('SignUpForm', 'agree_terms', 0));
}

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentWillMount() {
        this.props.userInfoChange({});   
    }
    
    submit(values) {         
        let userDataToUpdate = {
            firstName : values.firstName,
            lastName : values.lastName,
            user_type : values.user_type,            
        };

        if(values.user_type == 'Business') {
            userDataToUpdate.company_registration = values.company_registration;
            userDataToUpdate.company_name = values.company_name;
        }        

        FirebaseActions.updateUserData(userDataToUpdate);

        // If password is exists then wait to be updated
        if(values.password) {
            this.props.appBusyStateChange(true);
            FirebaseActions.updatePassword(values.password).then((data) => {
                this.props.appBusyStateChange(false);  
                // On success redirect to dashboard
                this.props.history.replace(routes.dashboard.path);
            }, (error) => {   
                this.props.appBusyStateChange(false);             
                // An error happened.
                this.props.userInfoChange(error);                                
            });
        } else {
            this.props.history.replace(routes.dashboard.path);
        }
                
        return values;
    }


    render() {

        if (!this.props.loggedInUser || !this.props.userData) {
            return <Loader isComponentBusy={true} />;
        }

        return UserInfoTmpl.call(this);
    }
}

const UserAccountFormRdxFrm = reduxForm({
    form: 'UserAccountForm',
    validate,
    onSubmitFail,
    warn
})(UserInfo);





/********************************* Connect with redux ************************************/

const selector = formValueSelector('UserAccountForm');
const mapStateToProps = state => {

    // let selectedPlanInfo = (Object.keys(state.AppRdcr.selectedPlanInfo).length) ? 
    // state.AppRdcr.selectedPlanInfo : state.firebase.userData; 
    
    let selectedPlanInfo = state.AppRdcr.selectedPlanInfo ;    


    return ({
        loggedInUser: state.firebase.loggedInUser,
        userData: state.firebase.userData,
        initialValues : state.firebase.userData,
        history : state.HistoryReducer.history,
        userInfo : state.AppRdcr.userInfo,
        selectedPlanInfo : selectedPlanInfo,
        
        userType: selector(state, 'user_type'),        
        synchErrors: (state.form.UserAccountForm) ? state.form.UserAccountForm.syncErrors : {},
        formValues: (state.form.UserAccountForm) ? state.form.UserAccountForm.values : {}        
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        appBusyStateChange : (isAppBusy) => {
            dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : isAppBusy}
            });
        },
        userInfoChange : (error) => {
            dispatch({
                type : 'APP_USER_INFO_CHANGE',
                payload : error
            });
        }
    })

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAccountFormRdxFrm)