//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components

//style

//view

export class IntrestModal extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    return (
      <>
        <button onClick={this.handleOpenModal} className="loginbtn intrestbtn">Interests</button>
        <ReactModal
          isOpen={this.state.showModal}
        >
          <button onClick={this.handleCloseModal} className="loginbtn">Close Interests</button>
          <h1>interest</h1>
        </ReactModal>
      </>
    );
  }
}

export default IntrestModal;
