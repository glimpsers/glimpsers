import React, { Component } from 'react';

import Load from '../../assets/img/loading.gif';

export class Loader extends Component {
  render() {
    return (
      <>
        <div className="loader">
          <img src={Load} alt="" />
        </div>
      </>
    );
  }
}

export default Loader;
