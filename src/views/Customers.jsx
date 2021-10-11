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
                        <button class="btn btn-primary" type="submit" onClick={() =>this.showDrawer(row)}>
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
                this.setState({rows: data.recordset})
            });
        
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