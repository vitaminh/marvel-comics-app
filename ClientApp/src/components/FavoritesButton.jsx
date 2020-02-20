import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

class FavoritesButton extends Component {
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateFavoritesData();
  }

  async populateFavoritesData() {
    const token = await authService.getAccessToken();
    const response = await fetch(`/api/UserFavorites/me/${this.props.userName}`, {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    console.log(data);
    this.setState({ forecasts: data, loading: false });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" disabled>Add to Favorites</button>
      </div>
    );
  }
}

export default FavoritesButton;