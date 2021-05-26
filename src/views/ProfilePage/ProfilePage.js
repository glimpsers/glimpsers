//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-scroll';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components
import Page404 from '../Page404/Page404';
import IntrestModal from '../../components/IntrestModal/IntrestModal';
import NewPost from '../../components/NewPost/NewPost';


//style
import { Title } from '../../assets/style/Style';

//view
import SetupAccount from '../SetupAccount/SetupAccount';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      interest: [],
      loading: true,
      setupAccount: false,
      showModal: false,
      intrestModal: false,
      movie: '',
      news: '',
      books: '',
      art: '',
      cats: '',
      food: '',
    };

    this.checkUser = this.checkUser.bind(this);
    this.updateSetupAccount = this.updateSetupAccount.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleOpenIntrestModal = this.handleOpenIntrestModal.bind(this);
    this.handleCloseIntrestModal = this.handleCloseIntrestModal.bind(this);
  }
  reRenderAfterNewPost = (e, NewData) => {
    this.setState({ userData: NewData });
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });

    this.checkUser();
  }

  checkUser = async () => {
    const { user } = this.props.auth0;
    const newUser = await axios.get(`${process.env.REACT_APP_SERVER_URL}/data?email=${user.email}`);
    if (newUser.data === 'not found') {
      this.setState({ setupAccount: true, });
    } else {
      this.setState({
        setupAccount: false,
        interest: newUser.data[0].interest,
        movie: newUser.data[0].interest.movie,
        news: newUser.data[0].interest.news,
        books: newUser.data[0].interest.books,
        art: newUser.data[0].interest.art,
        cats: newUser.data[0].interest.cats,
        food: newUser.data[0].interest.food,
      });
    }
  }

  updateSetupAccount = () => this.setState({ setupAccount: false });
  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  handleOpenIntrestModal = () => this.setState({ intrestModal: true });
  handleCloseIntrestModal = () => this.setState({ intrestModal: false });

  updateMovie = (e) => this.setState({ movie: e.target.checked });

  updateNews = (e) => this.setState({ news: e.target.checked });

  updateBooks = (e) => this.setState({ books: e.target.checked });

  updateArt = (e) => this.setState({ art: e.target.checked });

  updateCats = (e) => this.setState({ cats: e.target.checked });

  updateFood = (e) => this.setState({ food: e.target.checked });

  updateIntrest = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const body = {
      email: user.email,
      name: user.name,
      imageUrl: user.picture,
      movie: this.state.movie,
      news: this.state.news,
      books: this.state.books,
      art: this.state.art,
      cats: this.state.cats,
      food: this.state.food,
    };
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/updateinterest`, body);
    this.handleCloseIntrestModal();
    this.checkUser();

  }
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
                    description={'glimpsers description Profile Page'}
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
                        <Link className="floating__btn" to="top">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6" />
                          </svg>
                        </Link>
                      </div>
                      <NewPost
                        reRenderAfterNewPost={this.reRenderAfterNewPost}
                        showModal={this.state.showModal}
                        handleCloseModal={this.handleCloseModal}
                      />
                      <div className="profileDiv">
                        <img src={user.picture} alt={user.name} className="profileImg" />
                        <Title className="profileName">{user.name}</Title>
                        <button
                          onClick={this.handleOpenIntrestModal}
                          className="settingBtn"
                        >
                          <div className="settingBtnText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f9f9f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                          Settings
                          </div>
                        </button>
                        <IntrestModal
                          intrestModal={this.state.intrestModal}
                          handleCloseIntrestModal={this.handleCloseIntrestModal}
                          reRenderAfterNewPost={this.reRenderAfterNewPost}
                          updateMovie={this.updateMovie}
                          updateNews={this.updateNews}
                          updateBooks={this.updateBooks}
                          updateArt={this.updateArt}
                          updateCats={this.updateCats}
                          updateFood={this.updateFood}
                          parentState={this.state}
                          updateIntrest={this.updateIntrest}
                        />
                      </div>
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

export default withAuth0(ProfilePage);
