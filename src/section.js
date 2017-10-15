import React, { Component } from 'react';
import styled from 'styled-components';
export default function(props) {
  const timer = props.timer
  let minutes = parseInt(timer / 60, 10)
  let seconds = parseInt(timer % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return(
    <Section>
      <Circle>
        <Session>{props.timerType}</Session>
        <Time>{minutes}:{seconds}</Time>
        <Fill 
          height={props.fill}
          color = {props.color}
          />
      </Circle>
    </Section>
  )
}
const Circle = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 300px;
  font-size: 4em;
  border: 2px solid #99CC00;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  font-family:'Open Sans';
  position:relative;
  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    z-index: 2;
    border: 4px solid #333333;
  }
`
const Session = styled.p`
  text-align: center;
  font-size: .8em;
  color:white;
`
const Time = styled.p`
  margin: 0;
  font-family: Open Sans, Arial;
  color:white;
`
const Fill = styled.span`
  content: '';
  position: absolute;
  background: ${props => props.color};
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  height: ${props => props.height}%;
`
const Section = styled.section`
  margin-top:5%;
`