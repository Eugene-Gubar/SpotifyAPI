import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewResult from './components/ViewResults';


class App extends Component {
  render() {
    console.log('Component App: ', this);
    return (
      <div className="app">
        <Header />
        <ViewResult />
        <Footer />
      </div>
    );
  }
}

export default App;
