import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class EmployeeForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            EmployeeName: '',
            LoadedCost: '',
            VacationDays: '',
            EmployemntTypeLkpKey: '',
            OfficeLocationKey: 1,
            ManagerKey: 2,
            ProfileLkpKey: '',
            EmailAddress: '',
        }

        this.onChange = this.onChange.bind(this);
        this.addNewEmployee = this.addNewEmployee.bind(this);

    }


    componentDidMount() {

    }

    

    async addNewEmployee() {

        const article = this.state;
        const apiUrl = getAPIURL('employee/add')
        const response = await axios.post(apiUrl, article);
        alert('Employee Added Successfully');
        
        this.props.getAllEmployees();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="EmployeeName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter employee name"
                        onChange={(event) => this.onChange(event, 'EmployeeName')}
                        value={this.state.EmployeeName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="EmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email address"
                        onChange={(event) => this.onChange(event, 'EmailAddress')}
                        value={this.state.EmailAddress} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="LoadedCost">
                    <Form.Label>Loaded Cost</Form.Label>
                    <Form.Control type="text" placeholder="Enter loaded cost"
                        onChange={(event) => this.onChange(event, 'LoadedCost')}
                        value={this.state.LoadedCost} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="VacationDays">
                    <Form.Label>Vacation Days</Form.Label>
                    <Form.Control type="text" placeholder="Enter vacation days"
                        onChange={(event) => this.onChange(event, 'VacationDays')}
                        value={this.state.VacationDays} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="EmployemntTypeLkpKey">
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'EmployemntTypeLkpKey')}
                        value={this.state.EmployemntTypeLkpKey}>
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
                        value={this.state.ProfileLkpKey}>
                            <option value = "23">Admin</option>
                            <option value = "24">Project Manager</option>
                            <option value = "25">Employee</option>
                            <option value = "26">Back Office</option>
                    </Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewEmployee()}>
                    Submit
                </Button>
            </Form>
        )
    }
}