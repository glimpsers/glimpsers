//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components
import Page404 from '../Page404/Page404';
import IntrestModal from './modal';

//style
import { Title } from '../../assets/style/Style';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
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

                  <Title>{user.name}</Title>
                  <div className="profileDiv">
                    <img src={user.picture} alt={user.name} className="profileImg" />
                    <h2>Email: {user.email}</h2>
                  </div>
                  <div className="profileDiv">
                    < IntrestModal />
                  </div>
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
