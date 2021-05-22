import React, { Component } from 'react';

// import { MenuItem } from '../../assets/style/Style';

export class DropdownItem extends Component {
  render() {
    return (
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
      </>
    );
  }
}

export default DropdownItem;
