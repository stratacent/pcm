import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';

export default class CustomerForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            CustomerName: '',
            CustomerAddress: '',
            CustomerCity: '',
            CustomerCountry: '',
            CustomerCity: 'Delhi'
        }

        this.onChange = this.onChange.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewCustomer() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        const response = await fetch('https://stratacent-pcm-api.herokuapp.com/customer', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
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

                <Form.Group className="mb-3" controlId="customerCountry">
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