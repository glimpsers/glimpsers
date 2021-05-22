import React, { Component } from 'react';
import LogoutButton from '../../utilities/LogoutButton/LogoutButton';

export class DropdownItem extends Component {
  render() {
    return (
      <>
        {this.props.text === 'Log out' ?
          (<>
            <LogoutButton />
          </>
          ) : (
            <>
              <a
                className="menu-item"
                href={this.props.link}>
                {this.props.leftIcon &&
                  <>
                    <span className="icon-button">
                      <img
                        src={this.props.leftIcon}
                        alt="..." />
                    </span>
                  </>
                }

                {this.props.text}
              </a>
            </>)}

      </>
    );
  }
}

export default DropdownItem;
