//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components
import Page404 from '../Page404/Page404';

//style
import { Title } from '../../assets/style/Style';

export class InterestPage extends Component {
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
                    description={'glimpsers description Interest Page'}
                  />

                  <Title>Interest Page</Title>
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
