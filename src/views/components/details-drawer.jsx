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
            title: this.props.title
        }
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ show: false })
    }

    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this.
        this.setState({ show: nextProps.showDrawer });
    }

    // static getDerivedStateFromProps(props, current_state) {
    //     if (current_state.show !== props.showDrawer) {
    //       return {
    //         value: props.showDrawer
    //       }
    //     }
    //     return null
    //   }

    // componentDidUpdate(prevProps, PrevState){
    //     if(prevProps.showDrawer !== PrevState.show) {
    //         this.setState({show : prevProps.showDrawer});
    //     }
    // }

    render() {

        return (
            <Drawer 
                placement={this.state.placement}
                show={this.state.show}
                onHide={this.close}>
                <Drawer.Header>
                    <Drawer.Title>{this.state.title}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div>{this.props.children}</div>
                    
                </Drawer.Body>
                {/* <Drawer.Footer>
                    <Button onClick={this.close} appearance="primary">
                        Confirm
                    </Button>
                    <Button onClick={this.close} appearance="subtle">
                        Cancel
                    </Button>
                </Drawer.Footer> */}
            </Drawer>
        )
    }
}