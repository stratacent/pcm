import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import CustomerForm from './forms/customer-form';
import CustomerDetails from './details/customer-details';
import NavHeader from './components/nav-header';
import { getAPIURL } from '../service';

export default class Customers extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Customer Details',
            columns: this.getColumns(),
            rows: this.getRows(),
            idField: 'CustomerID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllCustomers = this.getAllCustomers.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'CustomerName',
                text: 'Customer Name',
                formatter: (cellContent, row) => (
                    <div>
                        <a href="#" onClick={() => this.showDrawer(row)}>{cellContent}</a>
                    </div>
                )
            },
            {
                dataField: 'CustomerAddress',
                text: 'Customer Address'
            },
            {
                dataField: 'CustomerCity',
                text: 'Customer City'
            },
            {
                dataField: 'CustomerState',
                text: 'Customer State'
            },
            {
                dataField: 'CustomerCountry',
                text: 'Customer Country'
            },
            {
                dataField: 'CustomerTypeLkpKey',
                text: 'Customer Type'
            }

        ]




    }

    getRows() {
        return [{
            CustomerName: "ABC",
            CustomerAddress: "TEST"
        }]
    }
    componentDidMount() {

        this.getAllCustomers()

    }

    getAllCustomers() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/customer';
        const apiUrl = getAPIURL('customer')
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

    addNewCustomer() {
        this.setState({ showAddForm: true })
    }

    closeModal() {
        this.setState({ showAddForm: false })
    }

    closeDrawer() {
        this.setState({ showDrawer: false })
    }

    render() {

        console.log(this.state)
        return (
            <React.Fragment>
                <div class="table-container">

                    <NavHeader title='Customers' addNew={this.addNewCustomer}></NavHeader>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>

                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}
                closeModal={this.closeModal}
                getAllCustomers={this.getAllCustomers}
                closeDrawer={this.closeDrawer}>
                    {this.state.selectedRow && <CustomerDetails selectedRow={this.state.selectedRow} 
                    closeDrawer={this.closeDrawer}
                    closeModal={this.closeModal}
                    getAllCustomers={this.getAllCustomers}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<CustomerForm getAllCustomers={this.getAllCustomers}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New Customer"

                    /> : null}

            </React.Fragment>
        )
    }
}