//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ReactModal from 'react-modal';

//utilities

//components

//style
import { Title } from '../../assets/style/Style';

export class SetupAccount extends Component {

  constructor(props) {
    super(props);
    const { user } = this.props.auth0;
    this.state = {
      showModal: true,
      //user data
      userPicture: user.picture,
      userName: user.name,
      userEmail: user.email,
      movie: false,
      news: false,
      books: false,
      art: false,
    };

    this.setupAccount = this.setupAccount.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.updateNews = this.updateNews.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
    this.updateArt = this.updateArt.bind(this);
  }

  setupAccount = async (e) => {
    e.preventDefault();

    const body = {
      email: this.state.userEmail,
      name: this.state.userName,
      imageUrl: this.state.userPicture,
      movie: this.state.movie,
      news: this.state.news,
      books: this.state.books,
      art: this.state.art,
    };

    await axios.post(`${process.env.REACT_APP_SERVER_URL}/addnewuser`, body);
    this.setState({ showModal: false });
    this.props.checkUser();
    this.props.updateSetupAccount();
  }

  updateMovie = (e) => this.setState({ movie: e.target.checked });

  updateNews = (e) => this.setState({ news: e.target.checked });

  updateBooks = (e) => this.setState({ books: e.target.checked });

  updateArt = (e) => this.setState({ art: e.target.checked });

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modalForm">
            <Title>Hi <span role="img" aria-label="waving hand">👋</span> glimpsers! <br /> Setup Your Account</Title>
            <img
              className="newUesrAccimg"
              src={user.picture}
              alt={user.name}
              title={`Hi glimpsers! ${user.name}`} />
            <form>
              <label>Name: {user.name}</label>
              <label>Email: {user.email} </label>
              <label>Please Select Your Interest?</label>
              <div>
                <input type="checkbox" id="News" name="News" value="News" onClick={(e) => this.updateNews(e)} />
                <label htmlFor="News">News</label>
                <input type="checkbox" id="Movie" name="Movie" value="Movie" onClick={(e) => this.updateMovie(e)} />
                <label htmlFor="Movie">Movie</label>
                <input type="checkbox" id="Books" name="Books" value="Books" onClick={(e) => this.updateBooks(e)} />
                <label htmlFor="Books">Books</label>
                <input type="checkbox" id="Art" name="Art" value="Art" onClick={(e) => this.updateArt(e)} />
                <label htmlFor="Art">Art</label>
              </div>
              <button
                className="btn btnNewAcc"
                onClick={(e) => {
                  this.setupAccount(e);
                  // this.props.checkUser();  //  these two were commented because they re-render the set-up pop up
                  // this.props.updateSetupAccount();
                }} >
                Setup Your Account</button>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default withAuth0(SetupAccount);
