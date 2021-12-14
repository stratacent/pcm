import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class TimeCodeForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            TimeCodeCD: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewTimeCode = this.addNewTimeCode.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewTimeCode() {

        const article = this.state;
        const apiUrl = getAPIURL('timeCode/add')
        const response = await axios.post(apiUrl, article);
        alert('TimeCode Added Successfully');
        
        this.props.getAllTimeCodes();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="TimeCodeCD">
                    <Form.Label>TimeCode CD</Form.Label>
                    <Form.Control type="text" placeholder="Enter timeCode CD"
                        onChange={(event) => this.onChange(event, 'TimeCodeCD')}
                        value={this.state.TimeCodeCD} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewTimeCode()}>
                    Submit
                </Button>
            </Form>
        )
    }
}