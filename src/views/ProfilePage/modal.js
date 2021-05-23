
import React from 'react';
import ReactModal from 'react-modal';


class IntrestModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="loginbtn" id="intrestbtn">Interests</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal} className="loginbtn">Close Interests</button>
          <h1>interest</h1>
        </ReactModal>
      </div>
    );
  }
}




export default IntrestModal;
