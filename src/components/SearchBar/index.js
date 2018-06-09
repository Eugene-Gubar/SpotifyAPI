
// This component used [ Header ]
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import actionSearchTracks from '../../redux/actions/tracks';
import { initToken, hasTokenSpotify, setTokenAccess } from '../../configs/apiSpotify';
import loaderAnimationWedges from './img/loader/Wedges.svg';
import loaderAnimationGear from './img/loader/Gear.svg';

if (!hasTokenSpotify()) initToken();
setTokenAccess();

class SearchBar extends Component {
  static propTypes = {
    actionSearchTracks: PropTypes.func,
    loader: PropTypes.bool
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
    // console.log('Component SearchBar: ', this);
    const { notify } = this.state;
    const { loader } = this.props;
    // console.log('----------------------LOADERBOOL: ', loader);
    
    return (
      <div className="search-bar">
        <input onChange={this.hGetValueSearch} onKeyPress={this.hKeyPressEnter} type="text" name="search" id="search" placeholder="Search ..." title="Please enter your favorite song" autoComplete="off" />
        <span onClick={this.hSearchTracks} className="btn-search"></span>
        {(notify) ? this.notifyMoreSymbols() : ''}
        {(loader) ? this.showLoader() : ''}
      </div>
    );

  }

  hKeyPressEnter = (e) => {
    
    if(e.key === 'Enter') 
      this.hSearchTracks();
  }

  hSearchTracks = () => {
    const search = this.search;
    const { actionSearchTracks } = this.props;
    if (search.length > 3) {
      this.setState({notify: false});
      actionSearchTracks(search);
      document.getElementsByClassName('footer')[0].firstElementChild.className = 'blur select-song';
    } else {
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

  showLoader = () => { 
    return (
      <div className="animation-loader">
        <img src={(Math.random() < 0.5) ? loaderAnimationWedges : loaderAnimationGear} alt=""/>
      </div>
    );
  }

  hGetValueSearch = (e) => {
    const { value } = e.target;
    this.search = value;
  }

};


export default connect((state) => ({
  loader: state.tracks.loader
}), { actionSearchTracks })(SearchBar);