//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components

//style

//view

export class EditPost extends Component {

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <ReactModal
          isOpen={this.props.showModalEditPost}
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
              <textarea onChange={(e) => this.updatepostDescription(e)} placeholder="Write new glimpse..."></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModalEditPost}
                >Close</button>
                <button
                  className="NewPostBtnGPost" onClick={(e) => this.addNewPost(e)}
                >Edit</button>
              </div>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default withAuth0(EditPost);
