//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

//utilities

//components

//style

//view

export class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostDescription: '',
    };
  }
  editPostDescription = (e) => {
    console.log(e.target.value);
    this.setState({ newPostDescription: e.target.value });
  };
  newPostEditing = async (e, index) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    console.log(index);
    const body = {
      updatePost: true,
      email: user.email,
      description: this.state.newPostDescription
    };
    const newDataAfterEdit = await axios.put(`${process.env.REACT_APP_SERVER_URL}/updatepost/${this.props.postIndex}`, body);
    console.log(newDataAfterEdit);
    this.props.reRenderAfterNewPost(e, newDataAfterEdit.data);
    this.props.handleCloseModalEditPost();
  }
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
              <textarea onChange={(e) => this.editPostDescription(e)} placeholder="Write new glimpse...">{this.props.description}</textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModalEditPost}
                >Close</button>
                <button
                  className="NewPostBtnGPost" onClick={(e) => this.newPostEditing(e, this.props.postIndex)}
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
