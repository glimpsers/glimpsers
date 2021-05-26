//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



//utilities

//components
import Comments from '../Comments/Comments';

//style

//view

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentDescription: '',
      // showComment: true,
      comment: this.props.allData,
      fromDelete: false,
    };
  }
  change = () => {
    this.setState({ fromDelete: true });
  }
  updateCommentDescription = (e) => {
    this.setState({ commentDescription: e.target.value });
  }
  createNewComment = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;

    const body = { // add date: String
      commit: true,
      comment: this.state.commentDescription,
      commenterImage: user.picture,
      nameOfCommenter: user.name,
      postindex: this.props.postIndex,
      email: user.email,
    };
    const newCommentData = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addnewpost`, body);
    this.setState({ comment: newCommentData.data, commentDescription: '', fromDelete: false, });
  }
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
              src={this.props.imageUrl}
              alt={this.props.name}
              title={this.props.name} />
            <p>{this.props.name}</p>
          </div>
          <div className="postContainer">
            {this.props.description}
          </div>
          <div>
            <form className="weitePost">
              <textarea onChange={(e) => this.updateCommentDescription(e)} placeholder="Write new glimpse..."></textarea>
              <div className="NewPostBtnG">
                <button
                  className="NewPostBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close</button>
                <button
                  className="NewPostBtnGPost" onClick={(e) => this.createNewComment(e)}
                >Comment</button>
              </div>
            </form>
          </div>
          <Comments comment={this.state.comment} fromDelete={this.state.fromDelete} change={this.change} reRenderAfterNewPost={this.props.reRenderAfterNewPost} postIndex={this.props.postIndex} />
        </ReactModal>
      </>
    );
  }
}

export default withAuth0(Comment);
