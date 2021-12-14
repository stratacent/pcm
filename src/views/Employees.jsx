import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import EmployeeForm from './forms/employee-form';
import EmployeeDetails from './details/employee-details';
import NavHeader from './components/nav-header';
import { getAPIURL } from '../service';

export default class Employees extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Employee Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'EmployeeID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllEmployees = this.getAllEmployees.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'EmployeeName',
                text: 'Employee Name',
                formatter: (cellContent, row) => (
                    <div>
                        <a href="#" onClick={() => this.showDrawer(row)}>{cellContent}</a>
                    </div>
                )
            },
            {
                dataField: 'EmailAddress',
                text: 'Email Address'
            },
            {
                dataField: 'LoadedCost',
                text: 'Loaded Cost'
            },
            {
                dataField: 'VacationDays',
                text: 'Vacation Days'
            }

        ]




    }
    componentDidMount() {

        this.getAllEmployees()

    }

    getAllEmployees() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/employee';
        const apiUrl = getAPIURL('employee')
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

    addNewEmployee() {
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
 
                    <NavHeader title='Employees' addNew={this.addNewEmployee}></NavHeader>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>

                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}
                closeModal={this.closeModal}
                getAllEmployees={this.getAllEmployees}
                closeDrawer={this.closeDrawer}>
                    {this.state.selectedRow && <EmployeeDetails selectedRow={this.state.selectedRow}
                    closeDrawer={this.closeDrawer}
                    closeModal={this.closeModal}
                    getAllEmployees={this.getAllEmployees}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<EmployeeForm getAllEmployees={this.getAllEmployees}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New Employee"

                    /> : null}

            </React.Fragment>
        )
    }
}