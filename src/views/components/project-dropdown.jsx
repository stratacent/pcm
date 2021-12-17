import React, { Component } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import '../../styles/table.css';


const projects = [
    {
      id: 1,
      label:
        "Moodys",
      // you can name this new prop has you want
      chipLabel: "Moodys",
      value: "1",
    
    },
    {
        id: 2,
      label:
        "Barclays",
      chipLabel: "Barclays",
      value: "2"
    },
    {
        id: 3,
      label:
        "Holiday",
      chipLabel: "Holiday",
      value: "3"
    }
  ];

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

export default class ProjectDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: null
        };
    }

    handleChange = (selected) => {

        projects.forEach(item => {
            const found = selected.find(sel => sel.id === item.id);
            item.selected = false;
            if(found) {
                item.selected = true;
            }
            
        })
        this.setState({
            optionSelected: selected
        });
        this.props.projectChangeCallback(selected);
    };

    render() {
        return (
            <div
                data-toggle="popover"
                data-trigger="focus"
                data-content="Please selecet project(s)"
                className="d-inline-block year-month"
            >
                <ReactSelect
                    options={projects}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    displayValue=""
                    components={{
                        Option
                    }}
                    onChange={this.handleChange}
                    allowSelectAll={true}
                    value={this.state.optionSelected}
                    components={{MultiValue}}
                    placeholder="Select Project(s)"
                />
            </div>
        );
    }
    
}

const MultiValue = props => (
    <components.MultiValue {...props}>
      {props.data.chipLabel}
    </components.MultiValue>
  );
  

