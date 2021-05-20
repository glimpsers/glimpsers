//package
import React, { Component } from 'react';

//style
import { NavContainer, Logo, Navigation } from '../../assets/style/Style';

import LogoPng from '../../assets/img/logo.png';

export class NavbarDemo extends Component {
  render() {
    return (
      <>
        <NavContainer>
          <Logo>
            <a href="/">
              <img src={LogoPng} alt="logo" title="logo" />
            </a>
          </Logo>
          <Navigation>
            <li><a href="/home">Home</a></li>
            <li><a href="/interest">interest</a></li>
            <li><a href="/profile">profile</a></li>
          </Navigation>
        </NavContainer>
      </>
    );
  }
}

export default NavbarDemo;
