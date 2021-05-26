//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

//utilities

//components

//style

//view

export class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.comment.posts[this.props.postIndex].commentsArray,
    };
  }
  deleteComment = async (e, index) => {
    const { user } = this.props.auth0;

    const query = {
      commentFlag: '1',
      email: user.email,
      commentNum: index

    };
    const postIndexNum = this.props.postIndex;

    const deleteComment = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/deletepost/${postIndexNum}`, { params: query });

    this.props.reRenderAfterNewPost(e, deleteComment.data);

    this.setState({
      data: deleteComment.data.posts[this.props.postIndex].commentsArray,
    });
    this.props.change();
  }
  render() {
    return (
      <>
        {
          this.props.fromDelete ?
            (
              <>
                {
                  this.state.data.map((data, index) => {
                    return (
                      <>
                        <div className="commentContainer" key={index}>
                          <div className="NewPostProfile">
                            <img
                              src={data.commenterImage}
                              alt={data.nameOfCommenter}
                              title={data.nameOfCommenter} />
                            <p>{data.nameOfCommenter}</p>
                          </div>
                          {data.comment}
                        </div>
                        <div className="deleteCommentBox">
                          <button className="deleteCommentBtn" onClick={(e) => {
                            this.deleteComment(e, index);
                          }}>
                            <div className="deleteCommentIcon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </button>
                        </div>

                      </>
                    );
                  })
                }
              </>
            ) : (
              <>
                {
                  this.props.comment.posts[this.props.postIndex].commentsArray.map((data, index) => {
                    return (
                      <>
                        <div className="commentContainer" key={index}>
                          <div className="NewPostProfile">
                            <img
                              src={data.commenterImage}
                              alt={data.nameOfCommenter}
                              title={data.nameOfCommenter} />
                            <p>{data.nameOfCommenter}</p>
                          </div>
                          {data.comment}
                        </div>
                        <div className="deleteCommentBox">
                          <button className="deleteCommentBtn" onClick={(e) => {
                            this.deleteComment(e, index);
                          }}>
                            <div className="deleteCommentIcon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </>
                    );
                  })
                }
              </>
            )
        }
      </>


    );
  }
}

export default withAuth0(Comments);

