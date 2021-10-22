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
            rows: props.rows,
            idField: props.idField
        }

    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rows !== this.props.rows) {
            this.setState({rows: this.props.rows})
            
        }
    }

    setStartDate(date) {
    }

    render() {

        console.log(this.state.rows)
        return (
            <div className="table-container">
                <BootstrapTable
                    keyField={this.state.idField}
                    data={this.state.rows}
                    columns={this.state.columns}
                    selectRow={this.selectRow}
                    pagination={ paginationFactory({custom: false, sizePerPage: 10, showTotal: true,
                    sizePerPageList: [{text: '10', value: 10}]}) }
                />
            </div>
        );
    }
}