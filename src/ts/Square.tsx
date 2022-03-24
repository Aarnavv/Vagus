import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";
import '../css/square.css';


type coords = {
  x: number,
  y: number
}

export default class Square extends React.Component<coords> {
  styles = {
    square: {
      left: this.props.x + "px",
      top: this.props.y + "px",
    } as React.CSSProperties
  }
  render() {
    return (
      <div className="square" id="square" style={this.styles.square}>
      </div>
    );
  }
}