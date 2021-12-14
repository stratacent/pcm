import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";
import ModalForm from '../forms/add-form';
import ProjectEditForm from '../forms/project-edit-form';


export default class ProjectDetails extends React.Component {


    
  constructor(props) {
    super(props);

    this.state = {
        selectedRow: {},
        showEditForm: false
    }

    this.editProject = this.editProject.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getAllProjects = this.getAllProjects.bind(this)
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedRow !== this.props.selectedRow) {
      this.setState({ selectedRow: nextProps.selectedRow });
      // this.showDetails(nextProps.row);
    }
  }

  componentDidMount() {

    console.log(this.props)
    this.setState({ selectedRow: this.props.selectedRow });
  }

  editProject() {
    this.setState({ showEditForm: true })
  }

  closeModal() {
    this.setState({ showEditForm: false })
  }

  getAllProjects() {
    const apiUrl = getAPIURL('project')
    // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/project';
    fetch(apiUrl)
        .then((response) => {
            response.json()
                .then((data) => {
                    this.setState({ rows: data.recordset })
                }).catch((err) => {
                    console.log(err)
                })
        }).catch((err) => {
            console.log(err)
        })
  }
  // showDetails() {

  // }

  render() {
      console.log(this.state)
    return (
        
      <React.Fragment>
        <div class="table-container">
          <div>
                <div class="row">
                    <label class="label-details">Project Name: </label>
                    <label class="label-details-value">{this.state.selectedRow.ProjectName}</label>
                </div>
                <div class="row">
                    <label class="label-details">Start Date: </label>
                    <label class="label-details-value">{this.state.selectedRow.StartDt}</label>
                </div>
                <div class="row">
                    <label class="label-details">End Date: </label>
                    <label class="label-details-value">{this.state.selectedRow.EndDt}</label>
                </div>
                <div class="row">
                    <label class="label-details">Total Amount: </label>
                    <label class="label-details-value">{this.state.selectedRow.TotalAmt}</label>
                </div>
                <div class="row">
                    <label class="label-details">Project Description: </label>
                    <label class="label-details-value">{this.state.selectedRow.ProjectDesc}</label>
                </div>

                <div class="action-btn-group">
                    <button class="btn btn-primary action-btn" onClick={() => this.editProject()}>Edit</button>
                    <button class="btn action-btn">Close</button>
                </div>

          </div>
        </div>

        {this.state.showEditForm ?
          <ModalForm formComponent={<ProjectEditForm getAllProjects={this.getAllProjects} selectedRow={this.state.selectedRow}/>}
            closeModal={this.closeModal}
            isOpen={this.state.showEditForm}
            title="Edit Project"

            /> : null}
      </React.Fragment>
    );
  }
}
