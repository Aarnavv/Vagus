import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";
import '../css/hex.css';

type coords = {
  x: number,
  y: number
}

export default class Hex extends React.Component<coords> {
  styles = {
    hexagon: {
      left: this.props.x + "px",
      top: this.props.y + "px",
    } as React.CSSProperties
  }
  render() {
    return (
      <div>
        <div className="hexagon" id="hexagon" style={this.styles.hexagon}>
          <div className="rect n-s"></div>
          <div className="rect nw-se"></div>
          <div className="rect sw-ne"></div>
          {/* {this.anim()} */}
        </div>
      </div>
    );
  }
  // anim() {
  //   let hex = document.getElementById("hexagon");
  //   hex.addEventListener("mouseover", function (event) {
  //     this.style.color = "black";
  //   }, false)
  // }
}