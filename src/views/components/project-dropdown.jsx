import React, { Component } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { getAPIURL } from "../../service";
import '../../styles/table.css';




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
            optionSelected: null,
            projects: []
        };
    }

    componentDidMount() {
        this.getAllProjects()
    }

    getAllProjects() {
        // const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/project';
        const apiUrl = getAPIURL('project')
        fetch(apiUrl)
            .then((response) => {
                response.json()
                    .then((data) => {
                        this.setState({ projects: data.recordset })
                    }).catch((err) => {
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
    }

    handleChange = (selected) => {

        this.state.projects.forEach(item => {
            const found = selected.find(sel => sel.ProjectID === item.ProjectID);
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
                    options={this.state.projects}
                    isMulti
                    getOptionLabel={(option) => `${option.ProjectName}`}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    
                    onChange={this.handleChange}
                    allowSelectAll={true}
                    getOptionValue={(option) => `${option['ProjectName']}`}
                    
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
  

