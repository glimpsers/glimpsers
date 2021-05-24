//package
import React, { Component } from 'react';

//utilities

//components

//style
import Movies from '../../assets/img/movies.jpg';

//view

export class Comments extends Component {
  render() {
    return (
      <>
        <div className="commentContainer">
          <div className="NewPostProfile">
            <img
              src={Movies}
              alt={'...'}
              title={'...'} />
            <p>{'...'}</p>
          </div>
          hamooooda Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </div>
      </>
    );
  }
}

export default Comments;

