import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import TimeCodeForm from './forms/timeCode-form';
import TimeCodeDetails from './details/timeCode-details';
import NavHeader from './components/nav-header';
import { getAPIURL } from '../service';

export default class TimeCodes extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'TimeCode Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'TimeCodeID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewTimeCode = this.addNewTimeCode.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllTimeCodes = this.getAllTimeCodes.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }


    getColumns() {

        return [

            {
                dataField: 'TimeCodeCD',
                text: 'TimeCode CD',
                formatter: (cellContent, row) => (
                    <div>
                        <a href="#" onClick={() => this.showDrawer(row)}>{cellContent}</a>
                    </div>
                )
            }
        ]




    }
    componentDidMount() {

        this.getAllTimeCodes()

    }

    getAllTimeCodes() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/timeCode';
        const apiUrl = getAPIURL('timeCode')
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

    addNewTimeCode() {
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

                    <NavHeader title='TimeCodes' addNew={this.addNewTimeCode}></NavHeader>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>

                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}
                closeDrawer={this.closeDrawer}>
                    {this.state.selectedRow && <TimeCodeDetails selectedRow={this.state.selectedRow}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<TimeCodeForm getAllTimeCodes={this.getAllTimeCodes}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New TimeCode"

                    /> : null}

            </React.Fragment>
        )
    }
}