//package
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

//utilities

//components
import NavItem from './NavItem';

//style
import CaretIcon from '../../assets/icons/caret.svg';
import LogoPng from '../../assets/img/glimpsers.png';

export class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
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
            {isAuthenticated ?
              (
                <>
                  <NavItem
                    icon={CaretIcon}
                    drop={true}
                  />
                </>
              ) : (
                <>
                  <NavItem text={'log in'} />
                </>
              )
            }
          </ul>
        </nav>
      </>
    );
  }
}

export default withAuth0(Navbar);
