import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import routes from '../routes';
import Navigation from './Navigation/Navigation';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
          <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
export default App;
