import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from '../../utilities/LogoutButton/LogoutButton';

export class DropdownItem extends Component {
  render() {
    return (
      <>
        {this.props.text === 'Log out' ?
          (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                className="menu-item"
                to={this.props.link}>
                {this.props.leftIcon &&
                  <>
                    <span className="icon-button">
                      <img
                        className={this.props.link === '/profile' ? ('profilePic') : ('')}
                        src={this.props.leftIcon}
                        alt="..." />
                    </span>
                  </>
                }

                {this.props.text}
              </Link>
            </>
          )}
      </>
    );
  }
}

export default DropdownItem;
