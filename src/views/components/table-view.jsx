import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import '../../styles/table.css';

export default class TableView extends React.Component {

    selectRow = {
        mode: 'checkbox',
        clickToSelect: true
    };

    constructor(props) {
        super(props);

        this.state = {
            columns: props.columns,
            rows: props.rows
        }

    }

    componentDidMount() {
    }

    setStartDate(date) {
    }

    render() {


        return (
            <div className="table-container">
                <BootstrapTable
                    keyField='id'
                    data={this.state.rows}
                    columns={this.state.columns}
                    selectRow={this.selectRow}
                />
            </div>
        );
    }
}