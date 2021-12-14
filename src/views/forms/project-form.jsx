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
            TotalAmt: '',
            CustomerKey: '',
            ProjectStatusLkpKey:'',
            StageLkpKey:'',
            ProjectTypeLkpKey:'',
            ProjectManagerKey:''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
        
    }

    
    componentDidMount() {

    }



    async addNewProject() {

        const article = this.state
        const apiUrl = getAPIURL('project/add')
        const response = await axios.post(apiUrl, article);
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

                <Form.Group className="mb-3" controlId="ProjectStatusLkpKey">
                    <Form.Label>Project Status</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'ProjectStatusLkpKey')}
                        value={this.state.ProjectStatusLkpKey}>
                            <option value = "30">Started</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="StageLkpKey">
                    <Form.Label>Project Stage</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'StageLkpKey')}
                        value={this.state.StageLkpKey}>
                            <option value = "9">Yet to start</option>
                            <option value = "10">In progress</option>
                            <option value = "11">Completed</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProjectTypeLkpKey">
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'ProjectTypeLkpKey')}
                        value={this.state.ProjectTypeLkpKey}>
                            <option value = "6">T&M</option>
                            <option value = "7">Fixed</option>
                            <option value = "8">Milestone</option>
                    </Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewProject()}>
                    Submit
                </Button>
            </Form>
        )
    }
}