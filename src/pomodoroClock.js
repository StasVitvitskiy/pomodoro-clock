import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './header';
import BreakLength from './break-length';
import SessionLength from './session-length';
import Section from './section';

const Session = 'Session';
const Break = 'Break!';
const timerMap = {
  [Session]: 'sessionLength',
  [Break]: 'breakLength'
}
const timerColorMap = {
  [Session]: '#99CC00',
  [Break]: 'rgb(255, 68, 68)'
}
const defaultBreak = 5;
const defaultSession = 25;
const min = 60;
export default class PomodoroClock extends Component {
  intervalId = null
  state = {
    breakLength: defaultBreak,
    sessionLength: defaultSession,
    timerType: Session,
    timer: defaultSession*min,
    fill:0
  }
  setBreakLength = (breakLength) => {
    if(!this.intervalId) {
        if(breakLength > 0) {
          this.setState({
            breakLength: breakLength,
            timer:breakLength*min
          })
        }
    }
  }
  setSessionLength = (sessionLength) => {
    if(!this.intervalId) {
      const timerType = this.state.timerType
      if(timerType == Session) {
        if(sessionLength > 0) {
          this.setState({
            sessionLength:sessionLength,
            timer:sessionLength*min
          })
        }
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  countDown = () => {
    const timer = this.state.timer;
    const timerType = this.state.timerType
    const newTimer = timer-1;
    if(newTimer < 0) {
      const newTimerType = [Session, Break]
        .find(el => el != this.state.timerType)
      this.setState({
        timerType:newTimerType,
        timer:this.state[timerMap[newTimerType]] * min,
        fill:0
      })
    } else {
      const wholeValue =
        this.state[timerMap[timerType]] * min;
      this.setState({
        timer:newTimer,
        fill: (wholeValue - newTimer) / wholeValue * 100
      })
    }
  }
  onClick = () => {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null
    } else {
      this.countDown();
      this.intervalId = setInterval(this.countDown, 1000)
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Centered>
        <BreakLength
          breakLength = {this.state.breakLength}
          setBreakLength = {this.setBreakLength}
        />
        <SessionLength 
          sessionLength = {this.state.sessionLength}
          setSessionLength = {this.setSessionLength}
        />
        </Centered>
        <div onClick = {this.onClick}>
        <Section 
          timer = {this.state.timer}
          timerType = {this.state.timerType}
          fill = {this.state.fill}
          color={timerColorMap[this.state.timerType]}
        />
        </div>
      </div>
    )
  }
}
const Centered = styled.div`
  margin:0 auto;
  padding-top:2.5%;
  width:320px;
  min-width:320px;
  display:flex;
  justify-content:space-between;
`