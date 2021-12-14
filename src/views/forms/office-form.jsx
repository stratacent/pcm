import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class OfficeForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            OfficeName: '',
            Address: '',
            City: '',
            State:'',
            Country:''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewOffice = this.addNewOffice.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewOffice() {

        const article = this.state;
        const apiUrl = getAPIURL('office/add')
        const response = await axios.post(getAPIURL, article);
        alert('Office Added Successfully');
        
        this.props.getAllOffices();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="OfficeName">
                    <Form.Label>Office Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter office name"
                        onChange={(event) => this.onChange(event, 'OfficeName')}
                        value={this.state.OfficeName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="Adddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address"
                        onChange={(event) => this.onChange(event, 'Address')}
                        value={this.state.Address} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city"
                        onChange={(event) => this.onChange(event, 'City')}
                        value={this.state.City} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="State">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter state"
                        onChange={(event) => this.onChange(event, 'State')}
                        value={this.state.State} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter country"
                        onChange={(event) => this.onChange(event, 'Country')}
                        value={this.state.Country} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewOffice()}>
                    Submit
                </Button>
            </Form>
        )
    }
}