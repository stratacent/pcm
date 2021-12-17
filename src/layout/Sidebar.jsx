import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Dashoard from '../views/Dashboard';

export class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: ''
        }
    }

    setActive(item) {
        this.setState({active: item});
        this.props.linkChangedCallback(item);
        //Test
    }

    render() {
        return (
            <div
                style={{ display: 'flex', height: '95vh', overflow: 'scroll initial', flexGrow: 1 }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a
                            href="/"
                            className="text-decoration-none"
                            style={{ color: 'inherit' }}
                        >
                            Stratacent PCM
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => this.setActive('dashboard')}>
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/customers" activeClassName="activeClicked" onClick={() => this.setActive('customers')}>
                                <CDBSidebarMenuItem icon="table">Customers</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/projects" activeClassName="activeClicked" onClick={() => this.setActive('projects')}>
                                <CDBSidebarMenuItem icon="user">Projects</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/employees" activeClassName="activeClicked" onClick={() => this.setActive('employees')}>
                                <CDBSidebarMenuItem icon="chart-line">
                                    Employees
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/projectResources" activeClassName="activeClicked" onClick={() => this.setActive('projectResources')}>
                                <CDBSidebarMenuItem icon="chart-line">
                                    Project Resources
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/timesheet" activeClassName="activeClicked" onClick={() => this.setActive('timesheet')}>
                                <CDBSidebarMenuItem icon="chart-line">
                                    Timesheet
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/finance" activeClassName="activeClicked" onClick={() => this.setActive('finance')}>
                                <CDBSidebarMenuItem icon="chart-line">
                                    Finance
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>


                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{
                                padding: '20px 5px'
                            }}
                        >
                            {/* Sidebar Footer */}
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        )
    }
}