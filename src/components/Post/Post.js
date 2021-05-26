//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Comment from '../Comment/Comment';
import axios from 'axios';
import EditPost from '../EditPost/EditPost';

//style
// import Movies from '../../assets/img/movies.jpg';

//view

export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModalEditPost: false,
      postIndex: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleOpenModalEditPost = this.handleOpenModalEditPost.bind(this);
    this.handleCloseModalEditPost = this.handleCloseModalEditPost.bind(this);

    this.saveIndex = this.saveIndex.bind(this);
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  handleOpenModalEditPost = () => this.setState({ showModalEditPost: true });
  handleCloseModalEditPost = () => this.setState({ showModalEditPost: false });

  saveIndex = (e, index) => {
    this.setState({ postIndex: index });
    this.handleOpenModal();
  }
  saveIndexEditPost = (e, index) => {
    this.setState({ postIndex: index });
    this.handleOpenModalEditPost();
  }


  deletePost = async (e, index) => {
    this.setState({ postIndex: index });
    const { user } = this.props.auth0;

    const query = {
      postFlag: '1',
      email: user.email
    };


    const deletePost = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/deletepost/${index}`, { params: query });


    this.props.reRenderAfterNewPost(e, deletePost.data);
  }
  render() {
    return (
      <>  {
        Object.keys(this.props.userData.posts).length === 0 ?
          (<><h1>You have no posts yet</h1></>) :
          (<>
            {this.props.userData.posts.map((i, index) => {
              return (
                <>
                  <div className="cardPost" key={index}>
                    <div className="dropdownOptions">
                      <button className="optionsBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div className="dropdownOptionsContent">
                        <button
                          onClick={(e) => this.saveIndexEditPost(e, index)}
                          className="OptionContentBtnEdit"
                        >
                          <div className="OptionContentBtnText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                              <line x1="3" y1="22" x2="21" y2="22"></line>
                            </svg>
                            Edit
                          </div>
                        </button>
                        <button
                          className="OptionContentBtnDelete"
                          onClick={(e) => this.deletePost(e, index)}
                        >
                          <div className="OptionContentBtnText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </div>
                        </button>
                      </div>
                    </div>
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
                        <button className="PostBtnGLike">
                          <div className="PostBtnGText">
                            <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="m0 1v8c0 .552246.447693 1 1 1h3v-10h-3c-.552307 0-1 .447693-1 1z" transform="translate(0 5)" />
                              <path d="m9.15332 5.02979h-2.9541c-.258301 0-.387695-.172363-.431152-.246582-.043457-.0737305-.131348-.270508-.0063477-.496094l1.0415-1.87549c.228516-.410645.251953-.893555.0649414-1.32471-.187012-.43164-.556152-.744629-1.0127-.858398l-.734375-.183594c-.178711-.0449219-.368164.0122071-.492676.150391l-3.9873 4.42969c-.413574.460449-.641113 1.0542-.641113 1.67236v5.23242c0 1.37842 1.12158 2.5 2.5 2.5l4.97412-.0004883c1.12305 0 2.11475-.756348 2.41113-1.83887l1.06738-4.89844c.03125-.13623.0473633-.275879.0473633-.415527 0-1.01807-.828613-1.84668-1.84668-1.84668z" transform="translate(5 .97)" />
                            </svg>
                            Like
                          </div>
                        </button>
                        <button
                          onClick={(e) => this.saveIndex(e, index)}
                          className="PostBtnGComment"
                        >
                          <div className="PostBtnGText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Comment
                          </div>
                        </button>
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
                  <EditPost
                    showModalEditPost={this.state.showModalEditPost}
                    handleCloseModalEditPost={this.handleCloseModalEditPost}
                    description={this.props.userData.posts[Number(this.state.postIndex)].description}
                    postIndex={this.state.postIndex}
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
