import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class MeatDecorator extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Helmet>
      </>
    );
  }
}
