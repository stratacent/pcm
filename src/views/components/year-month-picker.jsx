import React from 'react';
import ReactDatePicker from 'react-datepicker';
import '../../styles/table.css';
import { getEndDate } from '../../utils/date-utils';

export default class YearMonthPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            maxDate: getEndDate(new Date())
        }

        this.setStartDate = this.setStartDate.bind(this);
    }

    componentDidMount() {
        this.props.dateChangeCallback(this.state.startDate);
    }

    setStartDate(date) {
        this.setState({ startDate: date });
        this.props.dateChangeCallback(date);
    }

    render() {


        return (
            <div className="date-container">
                <label className="date-label">Date: </label>
                <ReactDatePicker
                    className="container"
                    selected={this.state.startDate}
                    onChange={(date) => this.setStartDate(date)}
                    dateFormat="MMM - yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    showFourColumnMonthYearPicker
                    maxDate={this.state.maxDate}
                />
            </div>
        );
    }
}