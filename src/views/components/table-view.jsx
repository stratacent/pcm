import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "../../styles/table.css";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";

export default class TableView extends React.Component {
  selectRow = {
    mode: "checkbox",
    clickToSelect: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      columns: props.columns,
      rows: props.rows,
      idField: props.idField,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.rows !== this.props.rows) {
      this.setState({ rows: this.props.rows });
    }
  }

  rowClasses(row, rowIndex) {
    let classes = 'odd-row';
  
    if (rowIndex % 2 === 0) {
      classes = 'even-row';
    }
  
    return classes;
  };

  rowStyle = (row, rowIndex) => {
    const style = {};
    style.fontSize = 14;
    return style;
  };

  setStartDate(date) {}



  render() {
    console.log(this.state.rows);
    return (
      <PaginationProvider
        pagination={paginationFactory({
          custom: true,
          totalSize: this.state.rows.length,
        })}
      >
        {({ paginationProps, paginationTableProps }) => (
          <div>
            <PaginationListStandalone {...paginationProps} />
            <BootstrapTable headerClasses="table-header"
            rowClasses={ this.rowClasses }
            pageListRenderer={this.pageListRenderer}
            rowStyle={this.rowStyle}
              keyField={this.state.idField}
              data={this.state.rows}
              columns={this.state.columns}
              selectRow={this.selectRow}
              {...paginationTableProps}
            />
          </div>
        )}
      </PaginationProvider>
    );
  }
}
