import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import ExpenseCodeForm from './forms/expenseCode-form';
import ExpenseCodeDetails from './details/expenseCode-details';
import NavHeader from './components/nav-header';
import { getAPIURL } from '../service';

export default class ExpenseCodes extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'ExpenseCode Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'ExpenseCodeID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewExpenseCode = this.addNewExpenseCode.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllExpenseCodes = this.getAllExpenseCodes.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'ExpenseCodeCD',
                text: 'ExpenseCode CD',
                formatter: (cellContent, row) => (
                    <div>
                        <a href="#" onClick={() => this.showDrawer(row)}>{cellContent}</a>
                    </div>
                )
            }
        ]




    }
    componentDidMount() {

        this.getAllExpenseCodes()

    }

    getAllExpenseCodes() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/expense-code';
        const apiUrl = getAPIURL('expense-code')
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
    
    showDrawer(row) {
        console.log(row);
        this.setState({ showDrawer: true, selectedRow: row });

    }

    addNewExpenseCode() {
        this.setState({ showAddForm: true })
    }

    closeModal() {
        this.setState({ showAddForm: false })
    }

    closeDrawer() {
        this.setState({ showDrawer: false })
    }

    render() {

        return (
            <React.Fragment>
                <div class="table-container">

                    <NavHeader title='ExpenseCodes' addNew={this.addNewExpenseCode}></NavHeader>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>

                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}
                closeDrawer={this.closeDrawer}>
                    {this.state.selectedRow && <ExpenseCodeDetails selectedRow={this.state.selectedRow}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<ExpenseCodeForm getAllExpenseCodes={this.getAllExpenseCodes}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New ExpenseCode"

                    /> : null}

            </React.Fragment>
        )
    }
}