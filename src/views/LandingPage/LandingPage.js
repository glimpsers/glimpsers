//package
import React, { Component } from 'react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class LandingPage extends Component {
  render() {
    return (
      <>

        <MeatDecorator
          title={'glimpsers | Landing Page'}
          description={'glimpsers description Landing Page'}
        />

        <Title>Landing Page</Title>
      </>
    );
  }
}

export default LandingPage;
