//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';
// import { user } from '../../../../glimpsers-backend/model/allDataSchema';
import axios from 'axios';

//utilities

//components

//style

//view

export class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feildData: '',
    };
  }

  // add post data
  postContact = (e) => {

    console.log(e.target.value);
    this.setState({
      feildData: e.target.value
    });
  }

  createNewPost = async (e) => {
    e.preventDefault();
    const body = {
      post: true,
      description: this.state.feildData,
      email: this.props.auth0.user.email
    };
    const newPost = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addnewpost`, body);
    console.log(newPost);
    this.props.handleCloseModal();
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
              <textarea placeholder="Write new glimpse..." onChange={(e) => this.postContact(e)}></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close</button>
                <button
                  className="NewPostBtnGPost" onClick={this.createNewPost}
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
