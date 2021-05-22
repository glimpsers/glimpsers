//package
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

//utilities
import MeatDecorator from './utilities/MeatDecorator/MeatDecorator';

//components
// import NavbarDemo from './components/Navbar/NavbarDemo';
import Navbar from './components/Navbar/Navbar';

//views
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import InterestPage from './views/InterestPage/InterestPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ErrorPage from './views/ErrorPage/ErrorPage';

export class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <MeatDecorator
            title={'glimpsers'}
            description={'glimpsers description'}
          />
          <Navbar />
          <Switch>
            <Route exact path="/" component={isAuthenticated ? HomePage : LandingPage} />
            <Route exact path="/interest" component={InterestPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
