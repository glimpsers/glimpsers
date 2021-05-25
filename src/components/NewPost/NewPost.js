//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

//utilities

//components

//style

//view

export class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDescription: '',
    };
  }
  updatepostDescription = (e) => {
    console.log(e.target.value);
    this.setState({ postDescription: e.target.value });
  }
  addNewPost = async (e) => {
    e.preventDefault(); // add date
    const { user } = this.props.auth0;
    const body = {
      post: true,
      description: this.state.postDescription,
      email: user.email,
      imageUrl: user.picture,
    };
    const newPost = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addnewpost`, body);
    console.log(newPost.data);
    this.props.handleCloseModal();
    this.props.reRenderAfterNewPost(e, newPost.data);
  }
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
              <textarea onChange={(e) => this.updatepostDescription(e)} placeholder="Write new glimpse..."></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close</button>
                <button
                  className="NewPostBtnGPost" onClick={(e) => this.addNewPost(e)}
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
