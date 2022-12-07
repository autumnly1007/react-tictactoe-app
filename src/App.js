import React from 'react';
import './App.css';
import Board from './components/Board';

export default class App extends React.Component {
  render() {
    return (
      <div className='game'>
        game
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          game-info
          <div className='status'></div>
          <ol className='todo'></ol>
        </div>
      </div>
    );
  }
}
