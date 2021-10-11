import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import CustomerForm from './forms/customer-form';

export default class Customers extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Customer Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'CustomerID',
            showAddForm: false
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    getColumns() {

        return [

            {
                dataField: 'CustomerName',
                text: 'Customer Name',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn" type="submit" onClick={() => this.showDrawer(row)}>
                            {cellContent}
                        </button>
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
                dataField: 'CustomerCountry',
                text: 'Customer Country'
            }
        ]




    }
    componentDidMount() {
        const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/customer';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ rows: data.recordset })
            });

    }

    showDrawer(row) {
        console.log(row);
        this.setState({ showDrawer: true });

    }

    addNewCustomer() {
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
                        <button class="btn" onClick={() => this.addNewCustomer()}><i class="fa fa-plus-circle"></i></button>
                    </nav>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField} />
                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title}>
                    <h1>Customers Details</h1>
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<CustomerForm />} 
                    closeModal={this.closeModal}
                    isOpen={this.state.showAddForm} 
                    title="Add New Customer"
                    
                  /> : null}
                
            </React.Fragment>
        )
    }
}