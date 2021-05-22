import React, { Component } from 'react';

import NavItem from './NavItem';

import CaretIcon from '../../assets/icons/caret.svg';
import Login from '../../assets/icons/login.svg';

import LogoPng from '../../assets/img/glimpsers.png';

export class Navbar extends Component {


  render() {
    return (
      <>
        <nav className="navbar">
          <a
            className="logoLink"
            href="/">
            <img
              className="logo"
              src={LogoPng}
              alt="glimpsers logo"
              title="glimpsers" />
          </a>

          <ul className="navbar-nav">
            <NavItem
              icon={Login}
              link={'#'}
              text='login'
            />
            <NavItem
              icon={CaretIcon}
              drop={true}
            />
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
