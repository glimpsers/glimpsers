//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components
import Page404 from '../Page404/Page404';

//style
import { Title } from '../../assets/style/Style';

//view
import SetupAccount from '../SetupAccount/SetupAccount';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      setupAccount: false,
    };
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
    }
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
                    description={'glimpsers description Home Page'}
                  />

                  <Title>Home Page</Title>
                  {this.state.setupAccount ? (
                    <>
                      <SetupAccount />
                    </>
                  ) : (
                    <>

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

export default withAuth0(HomePage);
