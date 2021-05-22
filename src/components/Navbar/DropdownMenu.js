import React, { Component } from 'react';

import DropdownItem from './DropdownItem';

import Feeds from '../../assets/icons/feeds.svg';
import Interests from '../../assets/icons/interests.svg';



export class DropdownMenu extends Component {

  render() {
    return (
      <>
        <div className="dropdown">

          <DropdownItem
            text={'My Profile'}
            leftIcon={Feeds}
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

export default DropdownMenu;
