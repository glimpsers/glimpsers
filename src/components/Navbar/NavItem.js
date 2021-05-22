import React, { Component } from 'react';

import DropdownMenu from './DropdownMenu';

export class NavItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setOpen = (open) => this.setState({ open: open, });

  render() {
    return (
      <>
        <li className="nav-item">
          <a

            className={this.props.text ? ('loginbtn') : ('icon-button')}
            href={this.props.link}
            onClick={() => this.setOpen(!this.state.open)}
          >
            {this.props.text ?
              (<>
                <img
                  class="button__icon"
                  src={this.props.icon}
                  alt="..." />
                {this.props.text}
              </>
              ) : (
                <>
                  <img src={this.props.icon} alt="..." />
                </>
              )
            }

          </a>
          {this.props.drop &&
            <>
              {this.state.open &&
                <>
                  <DropdownMenu />
                </>
              }
            </>
          }
        </li>
      </>
    );
  }
}

export default NavItem;

