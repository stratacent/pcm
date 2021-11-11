import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class OfficeForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            OfficeName: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewOffice = this.addNewOffice.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewOffice() {

        const article = this.state;
        const response = await axios.post('https://stratacent-pcm-api.herokuapp.com/office/add', article);
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

                <Button variant="primary" type="submit" onClick={() => this.addNewOffice()}>
                    Submit
                </Button>
            </Form>
        )
    }
}