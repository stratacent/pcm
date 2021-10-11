import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';

export default class CustomerForm extends React.Component {


    constructor(props) {
        super(props);

        

    }

    
    componentDidMount() {

    }

    

    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="customerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerAddress">
                    <Form.Label>Customer Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer address" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerCity">
                    <Form.Label>Customer City</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer city" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerCountry">
                    <Form.Label>Customer Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer Country" />
                    
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}