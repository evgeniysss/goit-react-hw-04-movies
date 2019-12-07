import React, { Component } from 'react';
import T from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input value={value} type="text" onChange={this.onChange} />
          <button type="submit">Search Movie</button>
        </form>
      </>
    );
  }
}
