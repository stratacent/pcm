import React from 'react';
import DetailDrawer from './components/details-drawer';
import TableView from './components/table-view';
import '../styles/table.css';
import ModalForm from './forms/add-form';
import ProjectForm from './forms/project-form';
import ProjectDetails from './details/project-details';

export default class Projects extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false,
            title: 'Projects Details',
            columns: this.getColumns(),
            rows: [],
            idField: 'ProjectID',
            showAddForm: false,
            selectedRow: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getAllProjects = this.getAllProjects.bind(this)
    }
    

    getColumns() {
        
        return [
            
            {
                dataField: 'ProjectName',
                text: 'Project Name',
                formatter: (cellContent, row) => (
                    <div>
                        <button class="btn" type="submit" onClick={() => this.showDrawer(row)}>
                           {cellContent}
                        </button>
                    </div>
                )
            },
            {
                dataField: 'ProjectDesc',
                text: 'Project Description'
            },
            {
                dataField: 'StartDt',
                text: 'Start Date'
            },
            {
                dataField: 'EndDt',
                text: 'End Date'
            },
            {
                dataField: 'TotalAmt',
                text: 'Total Amount'
            }
        ]




    }
    componentDidMount() {
        
        this.getAllProjects()
        
    }

    getAllProjects() {
        const apiUrl = 'https://stratacent-pcm-api.herokuapp.com/project';
        fetch(apiUrl)
            .then((response) => {
                response.json()
                    .then((data) => {
                        this.setState({ rows: data.recordset })
                    }).catch((err) => {
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
    }

    showDrawer(row) {
        console.log(row);
        this.setState({showDrawer: true, selectedRow: row});

    }

    addNewProject() {
        this.setState({ showAddForm: true })
    }

    closeModal() {
        this.setState({ showAddForm: false })
    }

    render() {

        return (
            <React.Fragment>
                <div class="table-container">
                    <nav class="navbar navbar-light bg-light toolbar-nav">
                    <button class="btn" onClick={() => this.addNewProject()}><i class="fa fa-plus-circle"></i></button>
                    </nav>

                    <TableView columns={this.state.columns} rows={this.state.rows} idField={this.state.idField}/>
                </div>

                <DetailDrawer showDrawer={this.state.showDrawer} title={this.state.title} row={this.state.selectedRow}>
                    {this.state.selectedRow && <ProjectDetails selectedRow={this.state.selectedRow}/>}
                </DetailDrawer>

                {this.state.showAddForm ?
                    <ModalForm formComponent={<ProjectForm getAllProjects={this.getAllProjects}/>}
                        closeModal={this.closeModal}
                        isOpen={this.state.showAddForm}
                        title="Add New Project"

                    /> : null}

            </React.Fragment>
        )
    }
}