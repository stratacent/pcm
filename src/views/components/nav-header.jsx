import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../../styles/table.css';

export default class NavHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.addNew = this.addNew.bind(this);
    }

    addNew() {
        this.props.addNew();
    }


    render() {
        return (
            <Navbar bg="#07204a" variant="dark" className="nav-class">
                <h4 class="header-title">{this.props.title}</h4>
                <div>
                    <button class="btn" onClick={() => this.addNew()}><i class="fa fa-plus-circle icon-bg"></i></button>
                </div>
                
            </Navbar>
        )
    }
}