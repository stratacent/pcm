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
            VacationDays: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewEmployee = this.addNewEmployee.bind(this);

    }


    componentDidMount() {

    }

    

    async addNewEmployee() {

        const article = this.state;
        const response = await axios.post('https://stratacent-pcm-api.herokuapp.com/employee/add', article);
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
                    <Form.Control type="text" placeholder="Enter employee name" controlId="EmployeeName"
                        onChange={(event) => this.onChange(event, 'EmployeeName')}
                        value={this.state.EmployeeName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="LoadedCost">
                    <Form.Label>Loaded Cost</Form.Label>
                    <Form.Control type="text" placeholder="Enter loaded cost" controlId="LoadedCost"
                        onChange={(event) => this.onChange(event, 'LoadedCost')}
                        value={this.state.LoadedCost} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="VacationDays">
                    <Form.Label>Vacation Days</Form.Label>
                    <Form.Control type="text" placeholder="Enter vacation days"
                        onChange={(event) => this.onChange(event, 'VacationDays')}
                        controlId="VacationDays" value={this.state.VacationDays} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewEmployee()}>
                    Submit
                </Button>
            </Form>
        )
    }
}