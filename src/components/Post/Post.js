//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Comment from '../Comment/Comment';
// import EditPost from '../EditPost/EditPost';

//style
// import Movies from '../../assets/img/movies.jpg';

//view

export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      postIndex: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.saveIndex = this.saveIndex.bind(this);
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  saveIndex = (e, index) => {
    // console.log(typeof index);
    this.setState({ postIndex: index });
    // console.log(typeof this.state.postIndex);
    this.handleOpenModal();
  }
  render() {
    return (
      this.props.userData.posts.map((i, index) => {
        console.log(this.props.userData.posts[index].description);
        return (
          <>
            <div className="cardPost" key={index}>
              <div className="data">
                <div className="NewPostProfile">
                  <img
                    src={this.props.userData.imageUrl}
                    alt={this.props.userData.name}
                    title={this.props.userData.name} />
                  <p>{this.props.userData.name}</p>
                </div>
                <div className="postDescription">
                  {i.description}
                </div>
                <div className="PostBtnG">
                  <button
                    className="PostBtnGLike"
                  >Like</button>
                  <button
                    onClick={(e) => this.saveIndex(e, index)}
                    className="PostBtnGComment"
                  >Comment</button>
                  {/* <button
                    onClick={this.handleOpenModal}
                    className="PostBtnGComment"
                  >edit</button>
                  <EditPost handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} /> */}
                </div>
              </div>
            </div>
            <Comment
              allData={this.props.userData}
              name={this.props.userData.name}
              imageUrl={this.props.userData.imageUrl}
              description={this.props.userData.posts[Number(this.state.postIndex)].description}
              showModal={this.state.showModal}
              postIndex={this.state.postIndex}
              handleCloseModal={this.handleCloseModal}
            />
          </>
        );
      })
    );
  }
}

export default withAuth0(Post);
