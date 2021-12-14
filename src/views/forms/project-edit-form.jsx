import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class ProjectEditForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            selectedRow: {}
        }

        this.onChange = this.onChange.bind(this);
        this.editProject = this.editProject.bind(this);
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

    async editProject() {

        const row = this.state.selectedRow;
        
        const article = {
                "ProjectID": row.EmployeeID,
                "ProjectName": this.state["ProjectName"] || row.ProjectName,
                "ProjectDesc": this.state["ProjectDesct"] || row.ProjectDesc,
                "StartDt": this.state["StartDt"] || row.StartDt,
                "EndDt": this.state["EndDt"] || row.EndDt,
                "TotalAmt": this.state["TotalAmt"] || row.TotalAmt
        }
        const apiUrl = getAPIURL('project/update')
        const response = await axios.put(apiUrl, article);
        alert('Project Edited Successfully');
        this.props.closeModal();
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
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'ProjectName')}
                        defaultValue={this.state.selectedRow.ProjectName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProjectDesc">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'ProjectDesc')}
                        defaultValue={this.state.selectedRow.ProjectDesc} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="StartDt">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="text"
                        onChange={(event) => this.onChange(event, 'StartDt')}
                        defaultValue={this.state.selectedRow.StartDt} />

                </Form.Group>


                <Form.Group className="mb-3" controlId="EndDt">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter end date" 
                        onChange={(event) => this.onChange(event, 'EndDt')}
                        defaultValue={this.state.selectedRow.EndDt} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="TotalAmt">
                    <Form.Label>Total Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter total amount" 
                        onChange={(event) => this.onChange(event, 'TotalAmt')}
                        defaultValue={this.state.selectedRow.TotalAmt} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProjectStatusLkpKey">
                    <Form.Label>Project Status</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'ProjectStatusLkpKey')}
                        defaultValue={this.state.selectedRow.ProjectStatusLkpKey}>
                            <option value = "30">Started</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="StageLkpKey">
                    <Form.Label>Project Stage</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'StageLkpKey')}
                        defaultValue={this.state.selectedRow.StageLkpKey}>
                            <option value = "9">Yet to start</option>
                            <option value = "10">In progress</option>
                            <option value = "11">Completed</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="ProjectTypeLkpKey">
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control as="select"
                        onChange={(event) => this.onChange(event, 'ProjectTypeLkpKey')}
                        defaultValue={this.state.selectedRow.ProjectTypeLkpKey}>
                            <option value = "6">T&M</option>
                            <option value = "7">Fixed</option>
                            <option value = "8">Milestone</option>
                    </Form.Control>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.EditProject()}>
                    Submit
                </Button>
            </Form>
        )
    }
}