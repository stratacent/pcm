import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import EmployeeForm from './forms/employee-form';

export default class Employees extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Employee Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'EmployeeID',
            showAddForm: false
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllEmployees = this.getAllEmployees.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'EmployeeName',
                text: 'Employee Name',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn" type="submit" onClick={() => this.showDrawer(row)}>
                            {cellContent}
                        </button>
                    </div>
                )
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
        const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/employee';
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
        this.setState({ showDrawer: true });

    }

    addNewEmployee() {
        this.setState({ showAddForm: true })
    }

    closeModal() {
        this.setState({ showAddForm: false })
    }

    render() {

        return (
            <React.Fragment>
                <div class="table-container">
                    <nav class="navbar navbar-light bg-light toolbar-nav">
                        <button class="btn" onClick={() => this.addNewEmployee()}><i class="fa fa-plus-circle"></i></button>
                    </nav>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField} />
                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title}>
                    <h1>Employee Details</h1>
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