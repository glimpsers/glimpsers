import React, { Component } from 'react';

import DropdownMenu from './DropdownMenu';
import LoginButton from '../../utilities/LoginButton/LoginButton';

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
          {this.props.text ?
            (<>
              <LoginButton />
            </>
            ) : (
              <>
                <a
                  className='icon-button'
                  href={this.props.link}
                  onClick={() => this.setOpen(!this.state.open)}
                >
                  <img src={this.props.icon} alt="..." />
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
              </>
            )}

        </li>
      </>
    );
  }
}

export default NavItem;

