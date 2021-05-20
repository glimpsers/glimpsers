//package
import React, { Component } from 'react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class ProfilePage extends Component {
  render() {
    return (
      <>

        <MeatDecorator
          title={'glimpsers | Profile Page'}
          description={'glimpsers description Profile Page'}
        />

        <Title>Profile Page</Title>
      </>
    );
  }
}

export default ProfilePage;
