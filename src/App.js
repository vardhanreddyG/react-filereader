import React, { Component } from 'react';

import './App.css';

import File from './components/file'



class App extends Component {
  
 
  
  render() {
    return (
      <div className="App">
        <h1> File Reader </h1>
        <File  />
      </div>
    );
  }
}

export default App;
