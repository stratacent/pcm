import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/table.css";
import ModalForm from '../forms/add-form';
import ExpenseCodeEditForm from '../forms/expenseCode-edit-form';


export default class ExpenseCodeDetails extends React.Component {


    
  constructor(props) {
    super(props);

    this.state = {
        selectedRow: {},
        showEditForm: false
    }

    this.editExpenseCode = this.editExpenseCode.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getAllExpenseCodes = this.getAllExpenseCodes.bind(this)
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

  editExpenseCode() {
    this.setState({ showEditForm: true })
  }

  closeModal() {
    this.setState({ showEditForm: false })
  }

  getAllExpenseCodes() {
    const apiUrl = getAPIURL('expense-code')
    // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/expense-code';
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
                    <label class="label-details">ExpenseCode CD: </label>
                    <label class="label-details-value">{this.state.selectedRow.ExpenseCodeCD}</label>
                </div>

                <div class="action-btn-group">
                    <button class="btn btn-pri  mary action-btn" onClick={() => this.editExpenseCode()}>Edit</button>
                    <button class="btn action-btn">Close</button>
                </div>

          </div>
        </div>

        {this.state.showEditForm ?
          <ModalForm formComponent={<ExpenseCodeEditForm getAllExpenseCodes={this.getAllExpenseCodes} selectedRow={this.state.selectedRow}/>}
            closeModal={this.closeModal}
            isOpen={this.state.showEditForm}
            title="Edit ExpenseCode"

            /> : null}
      </React.Fragment>
    );
  }
}

