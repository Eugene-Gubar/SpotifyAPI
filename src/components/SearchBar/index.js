
// This component used [ Header ]
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import actionSearchTracks from '../../redux/actions/tracks';

import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();


function clearBadTokenInStorage() {
  window.localStorage.removeItem('token');
};

function hasTokenSpotify() {
  if (window.localStorage.getItem('token')) return true;
  return false;
};


function initToken() {

  const accessToken = window.location.hash.slice(1, 13);
  if (!hasTokenSpotify() && accessToken !== 'access_token') {
    window.location.replace('https://accounts.spotify.com/authorize?client_id=ba0ecd105e7e43c2917462c8400d04a7&redirect_uri=http:%2F%2Flocalhost%3A%33%30%30%30&response_type=token&state=123');
  } else if (!hasTokenSpotify() && accessToken === 'access_token') {
    const url = window.location.href;
    window.localStorage.setItem('token', url.match(/#(?:access_token)=([\S\s]*?)&/)[1]);
    const token = window.localStorage.getItem('token');
    spotifyApi.setAccessToken(token);
  }

}



// console.log('accessToken:', accessToken);

if (!hasTokenSpotify()) initToken();

spotifyApi.searchTracks('Linkin Park', { limit: 3 })
  .then(function(data) {
    console.log('Search by "LINKIN PARK"', data);
  }, function(err) {
    if (err.status === 401) {
      console.error(`ERROR STATUS ${err.status}, ERROR MESSAGE: ${err.message}`);
      clearBadTokenInStorage();
    }
    else throw err;
  }).catch((err) => {
    console.error('Something Wrong: ', err);
  });

class SearchBar extends Component {
  static propTypes = {
    
  }

  constructor() {
    super();
    this.search = '';
  }

  UNSAFE_componentWillMount() {}

  render() {
    console.log('Component SearchBar: ', this);
    const { actionSearchTracks } = this.props;
    return (
      <div className="search-bar">
        <input onChange={this.hGetValueSearch} type="text" name="search" id="search" placeholder="Search ..." title="Please enter your favorite song" autoComplete="off" />
        <span onClick={this.hSearchTracks} className="btn-search"></span>
      </div>
    );
  }

  hSearchTracks = () => {
    const search = this.search;
    if (search.length > 3) {
      console.log('search > 3 symbols');
      // actionSearchTracks(search);
    } else {
      console.log('view more symbols animation loader');
      // notifyMoreSymbols();
    }
  }

  hGetValueSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    this.search = value;
  }

};

const props = (state) => {
  let { artists } = state;
  return {
    fakeResults: artists
  };
};


export default connect(props, { actionSearchTracks })(SearchBar);