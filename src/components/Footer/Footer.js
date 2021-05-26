import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="linkfooter">
            <p>All Rights Reserved</p>
            <Link to="/aboutus">About us</Link>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

