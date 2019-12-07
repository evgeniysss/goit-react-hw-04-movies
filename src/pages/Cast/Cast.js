/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Cast extends Component {
  state = {
    casts: '',
  };

  componentDidMount() {
    this.findCast();
  }

  findCast = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getCast(movieId).then(resData =>
      this.setState({ casts: resData.data.cast }),
    );
  };

  render() {
    const { casts } = this.state;
    return (
      <div>
        {casts && (
          <>
            <ul
              style={{
                width: '500px',
                listStyle: 'none',
              }}
            >
              {casts.map(el => (
                <li key={el.id}>
                  <img
                    style={{ width: '210px', height: '300px' }}
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    alt={el.original_title}
                  />
                  <p>{el.name}</p>
                  <p>{el.character}</p>
                </li>
              ))}
              )
            </ul>
          </>
        )}
      </div>
    );
  }
}
