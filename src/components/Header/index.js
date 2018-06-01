
import React, { Component } from 'react';
import NavBar from '../NavBar';
import './index.css';


class Header extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <header className="header">
        <strong>HEADER</strong>
        <NavBar />
      </header>
    );
  }
};

export default Header;
