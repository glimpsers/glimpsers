//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components

//style

export class SetupAccount extends Component {

  constructor(props) {
    super(props);
    const { user } = this.props.auth0;
    this.state = {
      userPicture: user.picture,
      userName: user.name,
      userEmail: user.email,
      movie: false,
      news: false,
    };

  }

  setupAccount = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  updateMovie = (e) => this.setState({ movie: e.target.checked });

  updateNews = (e) => this.setState({ news: e.target.checked });

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <img src={user.picture} alt={user.name} />
        <form>
          <legend>Setup Your Account</legend>
          <input type='text' value={user.picture} hidden readOnly />
          <label>Name</label>
          <input type='text' value={user.name} readOnly />
          <label>Email</label>
          <input type='email' value={user.email} readOnly />
          <br />
          <input type="checkbox" name="News" value="News" onClick={(e) => this.updateNews(e)} />
          <label for="News">News</label><br />
          <input type="checkbox" name="Movie" value="Movie" onClick={(e) => this.updateMovie(e)} />
          <label for="Movie">Movie</label><br />
          <button onClick={(e) => this.setupAccount(e)} >Setup Your Account</button>
        </form>
      </>
    );
  }
}

export default withAuth0(SetupAccount);
