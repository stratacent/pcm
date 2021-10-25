import React from "react";
import "../../styles/table.css";


export default class ProjectDetails extends React.Component {


    
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

          </div>
        </div>
      </React.Fragment>
    );
  }
}
