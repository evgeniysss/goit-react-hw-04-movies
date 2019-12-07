/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import T from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import routes from '../../routes';
import * as API from '../../services/api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: T.shape({
      goBack: T.func.isRequired,
    }).isRequired,
    location: T.shape({}).isRequired,
    match: T.shape({
      url: T.string.isRequired,
      // params: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    item: {
      genres: [],
    },
  };

  componentDidMount() {
    this.findMovieDetailsPage();
  }

  findMovieDetailsPage = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getMovieDetailsPage(movieId).then(res =>
      this.setState({ item: res.data }),
    );
  };

  returnToPrevLocation = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { match } = this.props;
    const { item } = this.state;
    const { url } = match;
    const genres = item.genres.reduce((acc, el) => `${acc} ${el.name}`, '');

    return (
      <div>
        <button type="button" onClick={this.returnToPrevLocation}>
          Go back
        </button>
        {item && (
          <>
            <ul className={s.navDescriptionList}>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.original_title}
                />
              </li>
              <li>
                <h3>{item.original_title}</h3>
                <p>User score {item.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{item.overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
              </li>
            </ul>
          </>
        )}
        <h2>Additional information</h2>
        <ul className={s.navDetailsList}>
          <li>
            <NavLink activeClassName={s.activeLink} to={`${url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={s.activeLink} to={`${url}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.MOVIES_CAST} component={Cast} />
          <Route path={routes.MOVIE_REVIEWS} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
