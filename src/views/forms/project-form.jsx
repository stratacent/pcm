import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class ProjectForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            ProjectName: '',
            ProjectDesc: '',
            StartDt: '',
            EndDt: '',
            TotalAmt: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
        
    }

    
    componentDidMount() {

    }



    async addNewProject() {

        const article = this.state
        const response = await axios.post('https://stratacent-pcm-api.herokuapp.com/project/add', article);
        alert('Project Added Successfully');
        
        this.props.getAllProjects();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }


    
    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="ProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter project name" 
                        onChange={(event) => this.onChange(event, 'ProjectName')}
                        value={this.state.ProjectName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProjectDesc">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter project description" 
                        onChange={(event) => this.onChange(event, 'ProjectDesc')}
                        value={this.state.ProjectDesc} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="StartDt">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter start date"
                        onChange={(event) => this.onChange(event, 'StartDt')}
                         value={this.state.StartDt} />

                </Form.Group>


                <Form.Group className="mb-3" controlId="EndDt">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter end date" 
                        onChange={(event) => this.onChange(event, 'EndDt')}
                        value={this.state.EndDt} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="TotalAmt">
                    <Form.Label>Total Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter total amount" 
                        onChange={(event) => this.onChange(event, 'TotalAmt')}
                        value={this.state.TotalAmt} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewProject()}>
                    Submit
                </Button>
            </Form>
        )
    }
}