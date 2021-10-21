import Modal from 'react-bootstrap/Modal'
import React from 'react';

export default class ModalForm extends React.Component {

  state={ name: null }

  handleChange = (e) => this.setState({name: e.target.value})

  render(){
    return(
      <Modal  style={{opacity:1}}
        show={this.props.isOpen} 
        onHide={this.props.closeModal}
      >
      <Modal.Header closeButton>
        <Modal.Title>{this.props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {this.props.formComponent}
      </Modal.Body>
    </Modal>
    )
  }
}