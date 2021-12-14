import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";
import ModalForm from '../forms/add-form';
import EmployeeEditForm from '../forms/employee-edit-form';


export default class EmployeeDetails extends React.Component {


    
  constructor(props) {
    super(props);

    this.state = {
        selectedRow: {},
        showEditForm: false
    }

    this.editEmployee = this.editEmployee.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getAllEmployees = this.getAllEmployees.bind(this)
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

  editEmployee() {
    this.setState({ showEditForm: true })
  }

  closeModal() {
    this.setState({ showEditForm: false })
  }

  getAllEmployees() {
    const apiUrl = getAPIURL('employee')
    // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/employee';
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
                    <label class="label-details">Employee Name: </label>
                    <label class="label-details-value">{this.state.selectedRow.EmployeeName}</label>
                </div>
                <div class="row">
                    <label class="label-details">Loaded Cost: </label>
                    <label class="label-details-value">{this.state.selectedRow.LoadedCost}</label>
                </div>
                <div class="row">
                    <label class="label-details">Vacation Days: </label>
                    <label class="label-details-value">{this.state.selectedRow.VacationDays}</label>
                </div>
                <div class="action-btn-group">
                    <button class="btn btn-primary action-btn" onClick={() => this.editEmployee()}>Edit</button>
                    <button class="btn action-btn">Close</button>
                </div>

          </div>
        </div>

        {this.state.showEditForm ?
          <ModalForm formComponent={<EmployeeEditForm getAllEmployees={this.getAllEmployees} selectedRow={this.state.selectedRow}/>}
            closeModal={this.closeModal}
            isOpen={this.state.showEditForm}
            title="Edit Employee"

            /> : null}
      </React.Fragment>
    );
  }
}
