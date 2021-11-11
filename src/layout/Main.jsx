import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Sidebar } from './Sidebar';
import Dashoard from '../views/Dashboard';
import "../styles/main.css";
import Employees from '../views/Employees';
import Customers from '../views/Customers';
import Projects from '../views/Projects';
import Timesheet from '../views/Timesheet';
import ProjectResources from '../views/ProjectResources';
import Finance from '../views/Finance';
import Offices from "../views/Offices";
import TimeCodes from "../views/TimeCodes";
import ExpenseCodes from "../views/ExpenseCodes";
import { Navbar } from 'react-bootstrap';

export default class Main extends React.Component {

    render() {
        return (
            <Router>

                <div className="main-container">
                    <Navbar variant="dark" style={{backgroundColor: '#333'}}>
                        <a className="navbar-brand" href="/"></a>
                        
                    </Navbar>
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
            </Router>

        )
    }
}