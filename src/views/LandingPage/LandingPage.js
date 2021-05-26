//package
import React, { Component } from 'react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';
import LoginButton from '../../utilities/LoginButton/LoginButton';

//components
import Footer from '../../components/Footer/Footer';

//style
import Logo from '../../assets/img/logo.png';

export class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <MeatDecorator
            title={'glimpsers | Landing Page'}
            description={'glimpsers description Landing Page'}
          />
          <div className="container">
            <div className="grid">
              <div>
                <img src={Logo} alt="..." />
                <p>Connect with friends and the world around you on glimpsers.</p>
              </div>
              <div>
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
