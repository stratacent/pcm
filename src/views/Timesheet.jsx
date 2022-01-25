import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/table.css';
import { getDateValues } from '../utils/date-utils';
import ProjectDropdown from './components/project-dropdown';
import WeekStepper from './components/stepper';
import TimesheetTable from './components/timesheet-table';
import YearMonthPicker from './components/year-month-picker';
import { getAPIURL } from '../service';
export default class Timesheet extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            datesArray: null,
            activeStep: 0,
            projects: []
        }
        this.handleDateChangeCallback = this.handleDateChangeCallback.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    componentDidMount() {

        

    }

    

    handleStepChange(step) {
        this.setState({activeStep: step});
    }
    
    handleDateChangeCallback(date) {
        const datesArray = getDateValues(date);
        this.setState({datesArray : datesArray});
    }

    handleProjectChange(projects) {
        console.log(projects);
        this.setState({projects: projects.slice()});
    }

    render() {

        const {activeStep, datesArray, projects} = this.state;

        return (
            <div className="timesheet">
                <div className="toolbar">
                    <YearMonthPicker dateChangeCallback = {this.handleDateChangeCallback}/>
                    <ProjectDropdown projectChangeCallback = { this.handleProjectChange }/>
                </div>
                <WeekStepper datesArray={datesArray} stepChangeCallback = {this.handleStepChange}/>
                <TimesheetTable activeStep={activeStep} datesArray={datesArray}
                    projects={projects}/>
            </div>

        )
    }
}