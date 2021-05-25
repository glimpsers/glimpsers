//package
import React, { Component } from 'react';

//utilities

//components

//style
// import Movies from '../../assets/img/movies.jpg';

//view

export class Comments extends Component {
  render() {
    // console.log(this.props.comment);
    // console.log(typeof this.props.postIndex);
    return (
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
          </>
        );
      })
    );
  }
}

export default Comments;

