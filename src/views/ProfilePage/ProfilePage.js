//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

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
      loading: true,
      setupAccount: false,
      showModal: false,
    };

    this.checkUser = this.checkUser.bind(this);
    this.updateSetupAccount = this.updateSetupAccount.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
    console.log(newUser.data);
    if (newUser.data === 'not found') {
      this.setState({ setupAccount: true, });
      console.log('newUser');
    } else {
      this.setState({ setupAccount: false });
    }
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
                      <div className="profileDiv">
                        <img src={user.picture} alt={user.name} className="profileImg" />
                        <Title className="profileName">{user.name}</Title>
                        <IntrestModal />
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
