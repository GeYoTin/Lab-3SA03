import React, { Component } from 'react';
import WordCard from './WordCard'
import './App.css';

const word = "react"
class App extends Component{
  render() {
    return (
      <div className="App">
        <WordCard value={word}/>
      </div>
    );
  }
}
export default App;