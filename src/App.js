//package
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//utilities
import MeatDecorator from './utilities/MeatDecorator/MeatDecorator';

//components
import NavbarDemo from './components/Navbar/NavbarDemo';

//views
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import InterestPage from './views/InterestPage/InterestPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ErrorPage from './views/ErrorPage/ErrorPage';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <MeatDecorator
            title={'glimpsers'}
            description={'glimpsers description'}
          />

          <NavbarDemo />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/interest" component={InterestPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
