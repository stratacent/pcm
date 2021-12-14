import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class EmployeeEditForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            selectedRow: {}
        }

        this.onChange = this.onChange.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }


    componentDidMount() {
        console.log(this.props)
        this.setState({ selectedRow: this.props.selectedRow });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRow !== this.props.selectedRow) {
          this.setState({ selectedRow: nextProps.selectedRow });
          // this.showDetails(nextProps.row);
        }
    }

    async editEmployee() {

        const row = this.state.selectedRow;

        const article = {
                "EmployeeID": row.EmployeeID,
                "EmployeeName": this.state["EmployeeName"] || row.EmployeeName,
                "LoadedCost": this.state["LoadedCost"] || row.LoadedCost,
                "VacationDays": this.state["VacationDays"] || row.VacationDays,
                "EmployemntTypeLkpKey": this.state["EmployemntTypeLkpKey"] || row.EmployemntTypeLkpKey,
                "OfficeLocationKey": this.state["OfficeLocationKey"] || row.OfficeLocationKey,
                "ManagerKey": this.state["ManagerKey"] || row.ManagerKey
        }
        const apiUrl = getAPIURL('employee/update')
        const response = await axios.put(apiUrl, article);
        alert('Employee Edited Successfully');
        this.props.closeModal();
        this.props.getAllEmployees();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        let empName = this.state.selectedRow?.EmployeeName

        console.log(this.state.selectedRow?.EmployeeName)
        return (
            <Form>
                <Form.Group className="mb-3" controlId="EmployeeName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'EmployeeName')}
                        defaultValue={empName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="EmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'EmailAddress')}
                        defaultValue={this.state.selectedRow.EmailAddress} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="LoadedCost">
                    <Form.Label>Loaded Cost</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'LoadedCost')}
                        defaultValue={this.state.selectedRow.LoadedCost} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="VacationDays">
                    <Form.Label>Vacation Days</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'VacationDays')}
                        defaultValue={this.state.selectedRow.VacationDays} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="EmployemntTypeLkpKey">
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'EmployemntTypeLkpKey')}
                        defaultValue={this.state.selectedRow.EmployemntTypeLkpKey}>
                            <option value = "2">Salaried</option>
                            <option value = "3">Hourly</option>
                            <option value = "4">Intern</option>
                            <option value = "5">1099</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProfileLkpKey">
                    <Form.Label>Employee Profile</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'ProfileLkpKey')}
                        defaultValue={this.state.selectedRow.ProfileLkpKey}>
                            <option value = "23">Admin</option>
                            <option value = "24">Project Manager</option>
                            <option value = "25">Employee</option>
                            <option value = "26">Back Office</option>
                    </Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.EditEmployee()}>
                    Submit
                </Button>
            </Form>
        )
    }
}