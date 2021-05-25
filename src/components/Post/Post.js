//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Comment from '../Comment/Comment';
import axios from 'axios';
// import EditPost from '../EditPost/EditPost';

//style
// import Movies from '../../assets/img/movies.jpg';

//view

export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      postIndex: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.saveIndex = this.saveIndex.bind(this);
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  saveIndex = (e, index) => {

    this.setState({ postIndex: index });
    this.handleOpenModal();
  }


  deletePost = async (e, index) => {
    this.setState({ postIndex: index });
    const { user } = this.props.auth0;

    const query = {
      postFlag: '1',
      email: user.email
    };


    const deletePost = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/deletepost/${index}`, { params: query });

    console.log(deletePost.data);

    this.props.reRenderAfterNewPost(e, deletePost.data);
  }


  render() {
    return (
      <>  {
        this.props.userData.posts === undefined ?
          (<><h1>You have no posts yet</h1></>) :
          (<>
            {this.props.userData.posts.map((i, index) => {
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
                        <button
                          onClick={(e) => this.deletePost(e, index)}
                          className="PostBtnGComment"
                        >Delete Post</button>
                        {/* <EditPost handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} /> */}
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
                    reRenderAfterNewPost={this.props.reRenderAfterNewPost}
                  />
                </>
              );
            })}
          </>)
      }
      </>
    );
  }
}

export default withAuth0(Post);
