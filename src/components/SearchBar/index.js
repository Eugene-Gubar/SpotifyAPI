
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
    this.limit = 6;
    this.offset = 0;
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
      <div className="search-bar noselect">
        <span onClick={this.hPrevSearch} id="offset-left">{'<'}</span>
        <input onChange={this.hGetValueSearch} onKeyPress={this.hKeyPressEnter} type="text" name="search" id="search" placeholder="Search ..." title="Please enter your favorite song" autoComplete="off" />
        <span onClick={this.hSearchTracks} className="btn-search"></span>
        <span onClick={this.hChangeLimit} className="btn-view-limit">{this.limit}</span>
        <span onClick={this.hNextSearch} id="offset-right">{'>'}</span>
        {(notify) ? this.notifyMoreSymbols() : ''}
        {(loader) ? this.showLoader() : ''}
      </div>
    );

  }

  hKeyPressEnter = (e) => {
    
    if(e.key === 'Enter') 
      this.hSearchTracks(e);
  }

  hSearchTracks = (e) => {
    const search = this.search, limit = this.limit;
    const { actionSearchTracks } = this.props;
    // console.log('OFFSET1: ', this.offset);
    if (search.length > 3) {
      if (e && e.constructor.name === 'Class') this.offset = 0;
      // console.log('OFFSET2: ', this.offset);
      this.setState({notify: false});
      actionSearchTracks(search, limit, this.offset);
      document.getElementsByClassName('footer')[0].firstElementChild.className = 'blur select-song';
    } else {
      this.setState({notify: true});
    }
  }

  hNextSearch = () => {
    this.offset += this.limit;
    this.hSearchTracks();
  }

  hPrevSearch = () => {
    this.offset -= this.limit;
    if (this.offset < 0) this.offset = 0;
    this.hSearchTracks();
  }

  hChangeLimit = (e) => {
    (this.limit === 3) ? (this.limit = 6) : (this.limit = 3);
    e.target.innerHTML = this.limit;
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