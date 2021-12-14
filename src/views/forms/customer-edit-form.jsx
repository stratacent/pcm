import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CustomerEditForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            selectedRow: {} 
        }

        this.onChange = this.onChange.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
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

    async editCustomer() {

        const row = this.state.selectedRow;
        
        const article = {
                "CustomerName": this.state["CustomerName"] || row.CustomerName,
                "CustomerAddress": this.state["CustomerAddress"] || row.CustomerAddress,
                "CustomerCity": this.state["CustomerCity"] || row.CustomerCity,
                "CustomerState": this.state["CustomerState"] || row.CustomerState,
                "CustomerCountry": this.state["CustomerCountry"] || row.CustomerCountry,
                "CustomerID": row.CustomerID
        }
        const apiUrl = getAPIURL('customer/update')
        const response = await axios.put(apiUrl, article);
        alert('Customer Edited Successfully');
        this.props.closeModal();
        this.props.getAllCustomers();
    }

    onChange(event, control) {
        console.table(control,event.target.value)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="CustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" 
                        onChange={(event) => this.onChange(event, 'CustomerName')}
                        defaultValue={this.state.selectedRow.CustomerName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerAddress">
                    <Form.Label>Customer Address</Form.Label>
                    <Form.Control type="text" 
                        onChange={(event) => this.onChange(event, 'CustomerAddress')}
                        defaultValue={this.state.selectedRow.CustomerAddress} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerCity">
                    <Form.Label>Customer City</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'CustomerCity')}
                        defaultValue={this.state.selectedRow.CustomerCity} />

                </Form.Group>


                <Form.Group className="mb-3" controlId="CustomerState">
                    <Form.Label>Customer State</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'CustomerState')}
                        defaultValue={this.state.selectedRow.CustomerState} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerCountry">
                    <Form.Label>Customer Country</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'CustomerCountry')}
                        defaultValue={this.state.selectedRow.CustomerCountry} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="CustomerTypeLkpKey">
                    <Form.Label>Customer Type</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'CustomerTypeLkpKey')}
                        defaultValue={this.state.selectedRow.CustomerTypeLkpKey}>
                            <option value = "12">Direct</option>
                            <option value = "13">Partner</option>
                    </Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.editCustomer()}>
                    Submit
                </Button>
            </Form>
        )
    }
}