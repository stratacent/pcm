import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";


export default class ExpenseCodeDetails extends React.Component {


    
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
                    <label class="label-details">ExpenseCode CD: </label>
                    <label class="label-details-value">{this.state.selectedRow.ExpenseCodeCD}</label>
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

