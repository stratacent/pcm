import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
//import ModalForm from './forms/add-form';
//import CustomerForm from './forms/customer-form';

export default class Offices extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Office Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'OfficeID',
            showAddForm: false
        }

        this.showDrawer = this.showDrawer.bind(this);
        //this.addNewCustomer = this.addNewCustomer.bind(this);
        //this.closeModal = this.closeModal.bind(this);
        this.getAllOffices = this.getAllOffices.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'OfficeName',
                text: 'Office Name',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn" type="submit" onClick={() => this.showDrawer(row)}>
                            {cellContent}
                        </button>
                    </div>
                )
            },
            /*{
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
            }*/
        ]




    }
    componentDidMount() {

        this.getAllOffices()

    }

    getAllOffices() {
        const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/office';
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

    /*addNewCustomer() {
        this.setState({ showAddForm: true })
    }

    closeModal() {
        this.setState({ showAddForm: false })
    }*/

    render() {

        return (
            <React.Fragment>
                <div class="table-container">
                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField} />
                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title}>
                    <h1>Office Details</h1>
                </DetailDrawer>


            </React.Fragment>
        )
    }
}