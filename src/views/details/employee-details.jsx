import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";


export default class EmployeeDetails extends React.Component {


    
  constructor(props) {
    super(props);

    this.state = {
        selectedRow: {},
    };
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
                    <button class="btn btn-primary action-btn">Edit</button>
                    <button class="btn action-btn">Close</button>
                </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
