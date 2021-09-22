import React from 'react';
import { Table } from 'react-bootstrap';
import '../../styles/table.css';

export default class TimesheetTable extends React.Component {

    columns = [
        { id: 'name', label: '#', disabled: true },
        { id: 'monday', label: 'Mon', disabled: true },
        { id: 'tuesday', label: 'Tue', disabled: true },
        { id: 'wedneday', label: 'Wed', disabled: true },
        { id: 'thursday', label: 'Thu', disabled: true },
        { id: 'friday', label: 'Fri', disabled: true },
        { id: 'saturday', label: 'Sat', disabled: true },
        { id: 'sunday', label: 'Sun', disabled: true },

    ];

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            setPage: 0,
            rowsPerPage: 5,
            rows: [],
            columns: this.columns,
            step: 0,
            datesArray: [],
            projects: null,
            data: {}
        }

        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(value, index, row, column) {
        console.log('here')
    }

    componentDidUpdate(prevState, prevProps) {

        const { step, datesArray } = this.props;

        if (prevState.datesArray !== this.state.datesArray) {
            this.setState({ datesArray: datesArray, step: 0 })
            this.createColumnsForActiveWeek(datesArray, 0);
        }

        if (prevState.step !== this.state.step) {
            this.setState({ step: step })
            this.createColumnsForActiveWeek(this.state.datesArray, step);
        }
    }


    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.datesArray !== this.state.datesArray) {

            this.setState({ datesArray: nextProps.datesArray, step: 0 });
            this.createColumnsForActiveWeek(this.state.datesArray, 0);
        }

        if (nextProps.activeStep !== this.state.step) {
            this.setState({ step: nextProps.activeStep });
            this.createColumnsForActiveWeek(this.state.datesArray, nextProps.activeStep);
        }

        if (nextProps.projects !== this.state.projects) {
            this.setState({ projects: nextProps.projects });
            this.createRows(nextProps.projects);
        }


    }

    createRows(projects) {
        const newRows = []
        projects.forEach(item => {
            const rowObj = {};
            rowObj.name = item.label;
            rowObj['monday'] = '';
            rowObj['tuesday'] = '';
            rowObj['wednesday'] = '';
            rowObj['thursday'] = '';
            rowObj['friday'] = '';
            rowObj['saturday'] = '';
            rowObj['sunday'] = '';
            newRows.push(rowObj);
        })
        this.setState({ rows: newRows });
    }

    createColumnsForActiveWeek(datesArray, step) {
        if (datesArray && datesArray.length > 0) {


            const activeWeekArray = datesArray[step];
            if (activeWeekArray) {

                activeWeekArray.map((item, index) => {
                    if (item === 0) {
                        this.columns[index + 1].disabled = true;
                        this.columns[index + 1].subText = "";
                        this.columns[index + 1].visible = true;
                    } else {
                        this.columns[index + 1].disabled = false;
                        this.columns[index + 1].subText = item;
                        this.columns[index + 1].visible = true;
                    }
                })
            }
        }

        this.setState({ columns: this.columns });
    }

    render() {

        const { columns, rows } = this.state;

        return (
            <Table responsive>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>
                                <div className="header">
                                    <span>{column.label}</span>
                                    {column.subText ? <span className="header-subtext">{column.subText}</span> : null}
                                </div>

                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ind) => (
                        <tr key={ind}>

                            {columns.map((column, index) => {

                                if (index === 0) {
                                    return (
                                        <td key={index} className="column">
                                             <span className="column">{row.name}</span>
                                        </td>
                                    )
                                } else if (index > 0 && column.disabled === true) {
                                    return (
                                        <td key={index} className="column">
                                            <span>-</span>
                                        </td>
                                    )
                                }
                                else if (index > 0 && column.disabled === false) {
                                    return (
                                        <td key={index} className="column">
                                            <input min="0" max="8" type="number" className="column" 
                                                onChange={(value) => this.onInputChange(value, index, row, column)}/>
                                        </td>
                                    )
                                }

                            }
                            )}


                        </tr>
                    ))}

                </tbody>
            </Table>
        )
    }
}




