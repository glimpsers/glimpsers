//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components
import Comments from '../Comments/Comments';

//style
import Movies from '../../assets/img/movies.jpg';

//view

export class Comment extends Component {
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
              src={Movies}
              alt={'...'}
              title={'...'} />
            <p>{'...'}</p>
          </div>
          <div className="postContainer">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
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

export default Comment;
