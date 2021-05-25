//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components

//style

export class ServicesModal extends Component {
  render() {
    return (
      <>
        <ReactModal
          isOpen={this.props.showModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="btnGExit">
            <h2>{this.props.serviceName}</h2>
            <button onClick={this.props.handleCloseModal} className="btnExitInfo">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="servicesModalInfo">
            <div className="whiteSpace"></div>
            <img src={this.props.serviceImage} alt={this.props.serviceName} />
            <div className="whiteSpace"></div>
            <p>{this.props.serviceDescription}</p>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default ServicesModal;
