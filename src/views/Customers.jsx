import React from 'react';
import { productsGenerator } from './components/data-generator';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';

export default class Customers extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer : false,
            title: 'Customer Details',
            columns: [{
                dataField: 'id',
                text: 'Customer ID',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn btn-primary" type="submit" onClick={() =>this.showDrawer(row)}>{row.id}</button>
                    </div>
                )
            }, {
                dataField: 'name',
                text: 'Customer Name'
            }, {
                dataField: 'projects',
                text: 'Customer Projects'
            }],
            rows: productsGenerator()
        }

        this.showDrawer = this.showDrawer.bind(this);
    }

    showDrawer(row) {
        console.log(row);
        this.setState({showDrawer: true});

    }

    render() {

        return (
            <React.Fragment>
                <TableView columns={this.state.columns} rows={this.state.rows} />
                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title}>
                    <h1>Customers Details</h1>
                </DetailDrawer>
            </React.Fragment>
        )
    }
}