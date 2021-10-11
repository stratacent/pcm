import React from 'react';
import { productsGenerator } from './components/data-generator';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';

export default class Customers extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Customer Details',
            columns: this.getColumns(),
            rows: []
        }

        this.showDrawer = this.showDrawer.bind(this);
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
                dataField: 'CustomerName',
                text: 'Customer Name'
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

    render() {

        return (
            <React.Fragment>
                <div class="table-container">
                    <nav class="navbar navbar-light bg-light toolbar-nav">
                        <button class="btn"><i class="fa fa-plus-circle"></i></button>
                    </nav>

                    <TableView columns={this.state.columns} rows={this.state.rows} />
                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title}>
                    <h1>Customers Details</h1>
                </DetailDrawer>
            </React.Fragment>
        )
    }
}