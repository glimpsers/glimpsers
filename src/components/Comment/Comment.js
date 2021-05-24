//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Comments from '../Comments/Comments';

//style
import Movies from '../../assets/img/movies.jpg';

//view

export class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CommentData: '',
    };
  }

  // add comment
  addComment = (e) => {

    console.log(e.target.value);
    this.setState({
      CommentData: e.target.value
    });

  }

  createNewComment = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0; // chang postindex in the map to the numper of the endex in the map
    const body = {
      email: user.email,
      commit: true,
      comment: this.state.CommentData,
      commenterImage: user.picture,
      nameOfCommenter: user.name,
      postindex: 1,

    };
    const newComment = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addnewComment`, body);
    console.log(newComment);
    this.props.handleCloseModal();
  }

  render() {
    return (
      <>
        <ReactModal
          isOpen={this.props.showModal}
          className="modalNewComment"
          overlayClassName="overlayNewComment"
        >
          <div className="NewCommentProfile">
            <img
              src={Movies}
              alt={'...'}
              title={'...'} />
            <p>{'...'}</p>
          </div>
          <div className="CommentContainer">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
          <div>
            <form className="weiteComment">
              <textarea onChange={this.addComment} placeholder="Write new glimpse..."></textarea>
              <div className="NewCommentBtnG">
                <button
                  className="NewCommentBtnGExit"
                  onClick={this.props.handleCloseModal}
                >Close</button>
                <button
                  className="NewCommentBtnGComment"
                  onClick={(e) => this.createNewComment(e)}
                >Comment</button>
              </div>
            </form>
          </div>
          <Comments />
          <Comments />
          <Comments />
        </ReactModal>
      </>
    );
  }
}

export default withAuth0(Comment);
