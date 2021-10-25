import React from 'react';
import { Button, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import '../../styles/table.css';

export default class DetailDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            placement: 'right',
            title: this.props.title,
            row: null
        }
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ show: false })
        this.props.closeDrawer()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showDrawer !== this.state.show) {
            this.setState({ show: nextProps.showDrawer });
        }

        if(nextProps.row !== this.state.row) {
            this.setState({ row: nextProps.row });
            // this.showDetails(nextProps.row);
        }
    }

    showDetails(row) {

    }

    render() {
        
        return (
            <React.Fragment>
            {this.state.show && 
                <Drawer 
                    placement={this.state.placement}
                    show={this.state.show}
                    onHide={this.close}>
                    <Drawer.Header>
                        <Drawer.Title>{this.state.title}</Drawer.Title>
                            

                        
                    </Drawer.Header>
                    <Drawer.Body>
                        {/* <div>{this.props.children, {selectedRow: this.state.row}}</div> */}
                        {this.state.row && React.cloneElement(this.props.children, { selectedRow: this.state.row })}
                        
                    </Drawer.Body> 
                    
                </Drawer>}
            </React.Fragment>

        )
    }
}