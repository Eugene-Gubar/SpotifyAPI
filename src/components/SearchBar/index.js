
// This component used [ Header ]
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import actionSearchTracks from '../../redux/actions/tracks';
import spotifyApi, { initToken, hasTokenSpotify, clearBadTokenInStorage, setTokenAccess } from '../../configs/apiSpotify';

if (!hasTokenSpotify()) initToken();
setTokenAccess();

class SearchBar extends Component {
  static propTypes = {
    actionSearchTracks: PropTypes.func
  }

  constructor() {
    super();
    this.search = '';
  }

  state = {
    notify: false
  }

  UNSAFE_componentWillMount() {}

  

  render() {
    console.log('Component SearchBar: ', this);
    const { notify } = this.state;

    return (
      <div className="search-bar">
        <input onChange={this.hGetValueSearch} onKeyPress={this.hKeyPressEnter} type="text" name="search" id="search" placeholder="Search ..." title="Please enter your favorite song" autoComplete="off" />
        <span onClick={this.hSearchTracks} className="btn-search"></span>
        {(notify) ? this.notifyMoreSymbols() : ''}
      </div>
    );

  }

  hKeyPressEnter = (e) => {
    
    if(e.key == 'Enter') 
      this.hSearchTracks();
  }

  hSearchTracks = () => {
    const search = this.search;
    const { actionSearchTracks } = this.props;
    if (search.length > 3) {
      console.log('search > 3 symbols');
      this.setState({notify: false});
      actionSearchTracks(search);
      document.getElementsByClassName('footer')[0].firstElementChild.className = 'blur select-song';
    } else {
      console.log('please enter more 3 symbols');
      this.setState({notify: true});
    }
  }

  notifyMoreSymbols = () => {
    return (
      <div className="msg-notify">
        <h2>Please enter more 3 symbols in search field!</h2>
      </div>
    );
  }

  hGetValueSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    this.search = value;
  }

};


export default connect(null, { actionSearchTracks })(SearchBar);