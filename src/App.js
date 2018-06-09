import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewResult from './components/ViewResults';


class App extends Component {

  state = {
    descId: undefined
  }

  render() {
    // console.log('Component App: ', this);
    return (
      <div className="app">
        <Header />
        <ViewResult getDescFooter={this.getDescFooter} />
        <Footer descId={this.state.descId} />
      </div>
    );
  }

  getDescFooter = (id) => {
    // console.log('APP getDescFooter id:', id);
    this.setState({descId: id});
  }

}

export default App;
