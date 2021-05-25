//package
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//utilities

//components

//style

export default class MeatDecorator extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* this for body */}
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
          {/* this for titles */}
          <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />
        </Helmet>
      </>
    );
  }
}
