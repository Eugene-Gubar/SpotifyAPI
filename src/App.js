import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  render() {
    console.log(this);
    return (
      <div className="app">
        <Header />
          
        <Footer />
      </div>
    );
  }
}

export default App;
