import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";
import ModalForm from '../forms/add-form';
import CustomerEditForm from '../forms/customer-edit-form';


export default class CustomerDetails extends React.Component {


    
  constructor(props) {
    super(props);

    this.state = {
        selectedRow: {},
        showEditForm: false
    }

    this.editCustomer = this.editCustomer.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getAllCustomers = this.getAllCustomers.bind(this)
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

  editCustomer() {
    this.setState({ showEditForm: true })
  }

  closeModal() {
    this.props.closeDrawer()
    this.setState({ showEditForm: false })
  }

  getAllCustomers() {
    const apiUrl = getAPIURL('customer')
    // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/customer';
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
                    <button class="btn btn-primary action-btn" onClick={() => this.editCustomer()}>Edit</button>
                    <button class="btn action-btn">Close</button>
                </div>
          </div>
        </div>

        {this.state.showEditForm ?
          <ModalForm formComponent={<CustomerEditForm getAllCustomers={this.props.getAllCustomers} 
            selectedRow={this.state.selectedRow}
            closeModal={this.closeModal}/>}
            closeModal={this.closeModal}
            isOpen={this.state.showEditForm}
            title="Edit Customer"

            /> : null}
      </React.Fragment>
    );
  }
}
