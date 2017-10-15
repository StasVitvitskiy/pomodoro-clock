import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Pomodoro from './pomodoroClock';

class App extends Component {

  render() {
    return (
      <Pomodoro/>
    );
  }
}

render(<App />, document.getElementById('root'));
