import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";


export default class CustomerDetails extends React.Component {


    
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
                    <label class="label-details">Customer Name: </label>
                    <label class="label-details-value">{this.state.selectedRow.CustomerName}</label>
                </div>
                <div class="row">
                    <label class="label-details">Customer Address: </label>
                    <label class="label-details-value">{this.state.selectedRow.CustomerAddress}</label>
                </div>
                <div class="row">
                    <label class="label-details">Customer City: </label>
                    <label class="label-details-value">{this.state.selectedRow.CustomerCity}</label>
                </div>
                <div class="row">
                    <label class="label-details">Customer State: </label>
                    <label class="label-details-value">{this.state.selectedRow.CustomerState}</label>
                </div>
                <div class="row">
                    <label class="label-details">Customer Country: </label>
                    <label class="label-details-value">{this.state.selectedRow.CustomerCountry}</label>
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
