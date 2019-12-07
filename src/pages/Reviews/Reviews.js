/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Reviews extends Component {
  state = {
    review: {
      results: [],
    },
  };

  componentDidMount() {
    this.findReview();
  }

  findReview = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getReview(movieId).then(res => this.setState({ review: res.data }));
  };

  render() {
    const { review } = this.state;
    return (
      <div>
        {review.results && review.results.length > 0 && (
          <>
            <ul
              style={{
                width: '500px',
                listStyle: 'none',
              }}
            >
              {review.results.map(el => (
                <li key={el.id}>
                  <h4>{el.author}</h4>
                  <p>{el.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        {review.results.length === 0 && (
          <div>
            <h4>Ничего не найдено по Вашему запросу</h4>
          </div>
        )}
      </div>
    );
  }
}
