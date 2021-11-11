/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import Main from "../layout/Main";
import { Sidebar } from "../layout/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/main.css";
import Finance from "../views/Finance";
import ProjectResources from "../views/ProjectResources";
import Timesheet from "../views/Timesheet";
import Projects from "../views/Projects";
import Employees from "../views/Employees";
import Customers from "../views/Customers";
import Dashoard from "../views/Dashboard";
import Offices from "../views/Offices";
import TimeCodes from "../views/TimeCodes";
import ExpenseCodes from "../views/ExpenseCodes";
import { menus } from "../utils/app.const";
import { useLocation } from 'react-router-dom';

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    const location = window.location.pathname;
    const locattionArr = location.split('/');
    let headerLink = 'dashboard'
    if(locattionArr[1]) {
        headerLink = locattionArr[1];
    }
    
    const [headerItem, setHeaderLink] = useState(headerLink);

   

    const handleLinkChanged = (link) => {
        headerLink = link;
        setHeaderLink(link);
    } 

    return (
       
        <BrowserRouter>
            {/* <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Stratacent PCM</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar> */}
            <div style={{display: 'flex'}}>
                <Sidebar linkChangedCallback={handleLinkChanged}/>
                <div className="main-container">
                    {/* <Navbar variant="dark" style={{backgroundColor: '#07204a'}}>
                        <a className="navbar-brand" href="/">{menus[headerItem]}</a>
                        
                    </Navbar> */}
                    <div className="content">
                        <Switch>
                            <Route exact from="/" render={props => <Dashoard {...props} />} />
                            <Route exact path="/customers" render={props => <Customers {...props} />} />
                            <Route exact path="/employees" render={props => <Employees {...props} />} />
                            <Route exact path="/projects" render={props => <Projects {...props} />} />
                            <Route exact path="/timesheet" render={props => <Timesheet {...props} />} />
                            <Route exact path="/projectResources" render={props => <ProjectResources {...props} />} />
                            <Route exact path="/finance" render={props => <Finance {...props} />} />
                            <Route exact path="/offices" render={props => <Offices {...props} />} />
                            <Route exact path="/timeCodes" render={props => <TimeCodes {...props} />} />
                            <Route exact path="/expenseCodes" render={props => <ExpenseCodes {...props} />} />
                        </Switch>
                    </div>
                </div>
            </div>
            {/* <Main /> */}
            {/* <h5><center>Welcome to the PCM Dashboard</center></h5>
            <br />
            <br />
            {props.children} */}
        </BrowserRouter>
    );
};
