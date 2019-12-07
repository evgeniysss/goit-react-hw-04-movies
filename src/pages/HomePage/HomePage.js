import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import * as API from '../../services/api';

class HomePage extends Component {
  static propTypes = {
    history: T.shape({}).isRequired,
    location: T.shape({}).isRequired,
    match: T.shape({}).isRequired,
  };

  state = {
    trends: [],
  };

  componentDidMount() {
    this.findHomePage();
  }

  findHomePage = () => {
    API.getHomePage().then(resData =>
      this.setState({ trends: resData.data.results }),
    );
  };

  render() {
    const { trends } = this.state;

    return (
      <div>
        <ul>
          {trends.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomePage;
