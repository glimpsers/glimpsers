//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class HomePage extends Component {
  render() {
    return (
      <>

        <MeatDecorator
          title={'glimpsers | Home Page'}
          description={'glimpsers description Home Page'}
        />

        <Title>Home Page</Title>
      </>
    );
  }
}

export default withAuth0(HomePage);
