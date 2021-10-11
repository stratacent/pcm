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
                dataField: 'CustomerID',
                text: 'Customer ID',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn" type="submit" onClick={() =>this.showDrawer(row)}>
                            <span class="badge badge-primary">{row.id}</span>
                        </button>
                    </div>
                )
            },
            {
                dataField: 'CustomerName',
                text: 'Customer Name'
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
                console.log(data.recordset)
            });
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rows !== this.props.rows) {
            this.setState({rows: this.props.rows})
            
        }
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