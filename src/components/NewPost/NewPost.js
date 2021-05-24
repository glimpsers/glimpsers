//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components

//style

//view

export class NewPost extends Component {

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <ReactModal
          isOpen={this.props.showModal}
          className="modalNewPost"
          overlayClassName="overlayNewPost"
        >
          <div className="NewPostProfile">
            <img
              src={user.picture}
              alt={user.name}
              title={user.name} />
            <p>{user.name}</p>
          </div>
          <div>
            <form className="weitePost">
              <textarea placeholder="Write new glimpse..."></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close</button>
                <button
                  className="NewPostBtnGPost"
                >Post</button>
              </div>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default withAuth0(NewPost);
