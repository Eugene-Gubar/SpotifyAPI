
// This component used [ Header ]
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SearchBar extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" name="search" id="search" placeholder="Search ..." title="Please enter your favorite song" autoComplete="off" />
        <span className="btn-search"></span>
      </div>
    );
  }
};

export default SearchBar;