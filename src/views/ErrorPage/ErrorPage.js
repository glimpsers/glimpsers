//package
import React, { Component } from 'react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class ErrorPage extends Component {
  render() {
    return (
      <>
        <MeatDecorator
          title={'glimpsers | Error Page'}
          description={'glimpsers description Error Page'}
        />

        <Title>Error Page</Title>
      </>
    );
  }
}

export default ErrorPage;
