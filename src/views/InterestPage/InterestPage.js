//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class InterestPage extends Component {
  render() {
    return (
      <>

        <MeatDecorator
          title={'glimpsers | Interest Page'}
          description={'glimpsers description Interest Page'}
        />

        <Title>Interest Page</Title>
      </>
    );
  }
}

export default withAuth0(InterestPage);
