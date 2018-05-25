import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';


import SimpleForm from './SimpleForm/SimpleForm';
import FieldLevelValidation from './FieldLevelValidation/FieldLevelValidation';
import AsynchValidation from './AsynchValidation/AsynchValidation';
import './Form.css';


function FormTmpl() {
    
    return (
        <div className="container">            
            <div>            
                <Link to={`${this.props.match.path}/simpleform`}>
                    <span>Simple Form</span>
                </Link>  
                             
            </div>

            <div>            
                
                <Link to={`${this.props.match.path}/fieldlevelvalidation`}>
                    <span>fieldlevelvalidation</span>
                </Link>                
            </div>

            <div>            
                
                <Link to={`${this.props.match.path}/asynchvalidation`}>
                    <span>asynchvalidation</span>
                </Link>                
            </div>

            <div>
                Forms outlet
                <Route path={`${this.props.match.path}/simpleform`} render={() => {
                    return <SimpleForm/>
                }} />

                <Route path={`${this.props.match.path}/fieldlevelvalidation`} render={() => {
                    return <FieldLevelValidation/>
                }} />

                <Route path={`${this.props.match.path}/asynchvalidation`} render={() => {
                    return <AsynchValidation/>
                }} />
            </div>            

        </div>
    )

}
export default FormTmpl