import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import DropdownItem from './DropdownItem';

import Feeds from '../../assets/icons/feeds.svg';
import Interests from '../../assets/icons/interests.svg';
// import { User } from '@auth0/auth0-spa-js';



export class DropdownMenu extends Component {

  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <div className="dropdown">

          <DropdownItem
            text={user.name}
            leftIcon={user.picture}
            link={'/profile'}
          />

          <DropdownItem
            text={'Feeds'}
            leftIcon={Feeds}
            link={'/'}
          />

          <DropdownItem
            text={'Interest'}
            leftIcon={Interests}
            link={'/interest'}
          />

          <DropdownItem
            text={'Log out'}
          />

        </div>
      </>
    );
  }
}

export default withAuth0(DropdownMenu);
