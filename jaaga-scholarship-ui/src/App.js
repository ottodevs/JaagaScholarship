import React, { Component } from 'react';
import './App.css';

import {Header} from './js/Header';
import {ListScholars} from './js/ListScholars';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      {this.props.children}
      </div>
    );
  }
}

export default App;
