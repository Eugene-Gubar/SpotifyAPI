
import React, { Component } from 'react';
import './index.css';
import SearchBar from '../SearchBar';


class Header extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <header className="header">
        <SearchBar />
      </header>
    );
  }
};

export default Header;
