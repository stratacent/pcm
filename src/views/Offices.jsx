import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import OfficeForm from './forms/office-form';
import OfficeDetails from './details/office-details';
import NavHeader from './components/nav-header';
import { getAPIURL } from '../service';
export default class Offices extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Office Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'OfficeID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewOffice = this.addNewOffice.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllOffices = this.getAllOffices.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'OfficeName',
                text: 'Office Name',
                formatter: (cellContent, row) => (
                    <div>
                        <a href="#" onClick={() => this.showDrawer(row)}>{cellContent}</a>
                    </div>
                )
            },
            {
                dataField: 'Address',
                text: 'Address'
            },
            {
                dataField: 'City',
                text: 'City'
            },
            {
                dataField: 'State',
                text: 'State'
            },
            {
                dataField: 'Country',
                text: 'Country'
            }
        ]




    }
    componentDidMount() {

        this.getAllOffices()

    }

    getAllOffices() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/office';
        const apiUrl = getAPIURL('office')
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

    addNewOffice() {
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

                    <NavHeader title='Offices' addNew={this.addNewOffice}></NavHeader>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>

                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}
                closeDrawer={this.closeDrawer}>
                    {this.state.selectedRow && <OfficeDetails selectedRow={this.state.selectedRow}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<OfficeForm getAllOffices={this.getAllOffices}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New Office"

                    /> : null}

            </React.Fragment>
        )
    }
}