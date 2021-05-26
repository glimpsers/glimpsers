//package
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import Loader from '../../components/Loader/Loader';

//style
class IsLoadingAndError extends React.Component {
  render() {
    return (
      this.props.auth0.isLoading ?
        <>
          <Loader />
        </>
        :
        this.props.auth0.error ?
          <div>Oops... {this.props.auth0.error.message}</div>
          :
          this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
