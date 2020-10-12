import React, { Component } from 'react';
import tachyons from 'tachyons';
import './App.css';
import './Crt.css';
import PlayerCard from './components/PlayerCard';


class App extends Component {
  render() {
    return (
      <main className="crt">
        <PlayerCard />
      </main>
    );
  }
}

export default App;
