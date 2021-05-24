//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Comment from '../Comment/Comment';

//style
import Movies from '../../assets/img/movies.jpg';

//view

export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    return (
      <>
        <div className="cardPost">
          <div className="data">
            <div className="NewPostProfile">
              <img
                src={Movies}
                alt={'...'}
                title={'...'} />
              <p>{'...'}</p>
            </div>
            <div className="postDescription">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </div>
            <div className="PostBtnG">
              <button
                className="PostBtnGLike"
              >Like</button>
              <button
                onClick={this.handleOpenModal}
                className="PostBtnGComment"
              >Comment</button>
            </div>
          </div>
        </div>
        <Comment
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
      </>
    );
  }
}

export default withAuth0(Post);
