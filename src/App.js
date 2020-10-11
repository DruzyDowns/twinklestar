import React, { Component } from 'react';
import tachyons from 'tachyons';
import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends Component {
  render() {
    return (
      <main>
        <PlayerCard />
      </main>
    );
  }
}

export default App;
