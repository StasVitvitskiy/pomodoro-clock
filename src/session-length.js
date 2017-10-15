import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './button';

export default function(props) {
  return (
    <div>
        <Label>SESSION LENGTH</Label>
        <Break>
          <Button 
            onClick={() => props
              .setSessionLength(props.sessionLength - 1)}
            >
            -
            </Button>
            <Value>
              {props.sessionLength}
            </Value>
          <Button
            onClick={() => props
              .setSessionLength(props.sessionLength + 1)}
          >
          +
          </Button>   
      </Break>
    </div>
  )
}
const Break = styled.div`
  display:flex;
  color:white;
  font-size:1.5em;
  height:30px;
  font-family:'Open Sans';
`
const Label = styled.span`
  font-size:0.7em;
  color:white;
  font-family:'Open Sans';
  padding-left:2px;
`
const Value = styled.div`
  text-align:center;
  width:40px;
`