//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components

//style

//view

export class EditPost extends Component {

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
        <ReactModal
          isOpen={this.props.showModal}
          className="modalNewPost"
          overlayClassName="overlayNewPost"
        >
          <div className="NewPostProfile">
            <img
              src={'user.picture'}
              alt={'user.name'}
              title={'user.name'} />
            <p>{'user.name'}</p>
          </div>
          <div>
            <form className="weitePost">
              <textarea placeholder="Write new glimpse..."></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close 123132132</button>
                <button
                  className="NewPostBtnGPost" onClick={this.props.handleOpenModal}
                >Post 111111</button>
              </div>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default EditPost;
