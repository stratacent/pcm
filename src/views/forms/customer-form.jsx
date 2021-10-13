import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CustomerForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            CustomerName: '',
            CustomerAddress: '',
            CustomerCity: '',
            CustomerCountry: '',
            CustomerState: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewCustomer() {

        const article = this.state
        const response = await axios.post('https://stratacent-pcm-api.herokuapp.com/customer/add', article);
        alert('Customer Added Successfully');
        
        this.props.getAllCustomers();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="CustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer name" controlId="CustomerName"
                        onChange={(event) => this.onChange(event, 'CustomerName')}
                        value={this.state.customerName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerAddress">
                    <Form.Label>Customer Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer address" controlId="CustomerAddress"
                        onChange={(event) => this.onChange(event, 'CustomerAddress')}
                        value={this.state.CustomerAddress} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerCity">
                    <Form.Label>Customer City</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer city"
                        onChange={(event) => this.onChange(event, 'CustomerCity')}
                        controlId="CustomerCity" value={this.state.customerCity} />

                </Form.Group>


                <Form.Group className="mb-3" controlId="CustomerState">
                    <Form.Label>Customer State</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer State" controlId="customerState"
                        onChange={(event) => this.onChange(event, 'CustomerState')}
                        value={this.state.CustomerState} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerCountry">
                    <Form.Label>Customer Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer Country" controlId="CustomerCountry"
                        onChange={(event) => this.onChange(event, 'CustomerCountry')}
                        value={this.state.CustomerCountry} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewCustomer()}>
                    Submit
                </Button>
            </Form>
        )
    }
}