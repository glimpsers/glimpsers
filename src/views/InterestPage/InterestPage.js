//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components
import Page404 from '../Page404/Page404';
import ArtCard from '../../components/ArtCard/ArtCard';
import BookCard from '../../components/BookCard/BookCard';
import MovieCard from '../../components/MovieCard/MovieCard';
import MewsCard from '../../components/NewsCard/NewsCard';
import NewPost from '../../components/NewPost/NewPost';

//style
import { Title } from '../../assets/style/Style';

//view
import SetupAccount from '../SetupAccount/SetupAccount';

export class InterestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      setupAccount: false,
      art: false,
      books: false,
      movie: false,
      news: false,
      cats: false,
      qosts: false,
      artData: [],
      booksData: [],
      movieData: [],
      newsData: [],
      catsData: [],
      qostsData: [],
      error: '',
      showModal: false,
    };

    this.getDate = this.getDate.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.updateSetupAccount = this.updateSetupAccount.bind(this);
    this.getRndInteger = this.getRndInteger.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });

    this.checkUser();
  }

  getDate = (num) => {
    let t = new Date();
    t.setDate(t.getDate() + num);
    return t.toISOString().split('T')[0];
  }

  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkUser = async () => {
    const { user } = this.props.auth0;
    const newUser = await axios.get(`${process.env.REACT_APP_SERVER_URL}/data?email=${user.email}`);

    // console.log(newUser.data);
    console.log();
    if (newUser.data[0].interest !== undefined) {
      this.setState({
        art: newUser.data[0].interest.art,
        books: newUser.data[0].interest.books,
        movie: newUser.data[0].interest.movie,
        news: newUser.data[0].interest.news,
      });
    } else {
      this.setState({ setupAccount: false });
    }

    if (newUser.data === 'not found') {
      this.setState({ setupAccount: true, });
      console.log('newUser');
    }

    if (this.state.news) {
      try {
        const qs = ['space', 'nasa', 'usa', 'bitcoin', 'covid-19', 'medicine', 'music', 'celebrities', 'poetry'];
        const url = `${process.env.REACT_APP_SERVER_URL}/news?q=${qs[this.getRndInteger(0, (qs.length - 1))]}&from=${this.getDate(0)}&sortBy=popularity`;
        const request = await axios.get(url);

        this.setState({
          newsData: request.data,
          loading: false,
          error: '',
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }

    if (this.state.movie) {
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/movie?page=${this.getRndInteger(1, 20)}`;
        const request = await axios.get(url);

        this.setState({
          movieData: request.data,
          loading: false,
          error: '',
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }

    if (this.state.art) {
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/art?fields=${this.getRndInteger(1, 10)},title,image_id&page=${this.getRndInteger(1, 100)}`;
        const request = await axios.get(url);

        this.setState({
          artData: request.data,
          loading: false,
          error: '',
        });

      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }

    if (this.state.books) {
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/books?price=${this.getRndInteger(1, 5)}`;
        const request = await axios.get(url);

        this.setState({
          booksData: request.data,
          loading: false,
          error: '',
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }

    if (this.state.cats) {
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/cats`;
        const request = await axios.get(url);

        this.setState({
          catsData: request.data,
          loading: false,
          error: '',
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }

    if (this.state.qosts) {
      try {
        const url = `${process.env.REACT_APP_SERVER_URL}/qosts`;
        const request = await axios.get(url);

        this.setState({
          qostsData: request.data,
          loading: false,
          error: '',
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    }
    // console.log(this.state.artData, this.state.booksData, this.state.movieData, this.state.newsData);

  }

  updateSetupAccount = () => this.setState({ setupAccount: false });

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        {this.state.loading ? (
          <>
            loading...
          </>
        ) : (
          <>
            {(user !== undefined) ?
              (
                <>
                  <MeatDecorator
                    title={`glimpsers | ${user.name}`}
                    description={'glimpsers description Interest Page'}
                  />
                  {this.state.setupAccount ? (
                    <>
                      <SetupAccount
                        updateSetupAccount={this.updateSetupAccount}
                        checkUser={this.checkUser}
                      />
                    </>
                  ) : (
                    <>
                      <div className="btnFloating">
                        <div className="floating__btn" onClick={this.handleOpenModal}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                          </svg>
                        </div>
                        <div className="floating__btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6" />
                          </svg>
                        </div>
                      </div>
                      <NewPost
                        showModal={this.state.showModal}
                        handleCloseModal={this.handleCloseModal}
                      />
                      <Title>Interest Page</Title>
                      {this.state.news &&
                        <>
                          <div className="boxCards">
                            <h2>News</h2>
                            <div className="cards">
                              <MewsCard
                                newsData={this.state.newsData}
                              />
                            </div>
                          </div>
                        </>
                      }
                      {this.state.movie &&
                        <>
                          <div className="boxCards">
                            <h2>Movie</h2>
                            <div className="cards">
                              <MovieCard
                                movieData={this.state.movieData}
                              />
                            </div>
                          </div>
                        </>
                      }
                      {this.state.art &&
                        <>
                          <div className="boxCards">
                            <h2>Art</h2>
                            <div className="cards">
                              <ArtCard
                                artData={this.state.artData}
                              />
                            </div>
                          </div>
                        </>
                      }
                      {this.state.books &&
                        <>
                          <div className="boxCards">
                            <h2>Books</h2>
                            <div className="cards">
                              <BookCard
                                booksData={this.state.booksData}
                              />
                            </div>
                          </div>
                        </>
                      }
                    </>
                  )}
                </>
              ) : (
                <>
                  <Page404 />
                </>
              )}
          </>
        )}
      </>
    );
  }
}

export default withAuth0(InterestPage);
