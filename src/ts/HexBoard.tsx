import * as React from "react";
import * as ReactDOM from "react-dom";
import Hex from "./Hex";
import '../css/hex.css';
import { render } from "@testing-library/react";
import { Component } from "react";

export default class HexBoard extends Component {
  render() {
    return (
      <div className="hex-board">
        {/* <Hex x={323} y={23} /> */}
        {/* {this.renderHex(323, 23, 30)}
        {this.renderHex(343, 12, 31)}
        {this.renderHex(363, 23, 30)}
        {this.renderHex(383, 12, 31)}
        {this.renderHex(403, 23, 30)}
        {this.renderHex(423, 12, 31)}
        {this.renderHex(443, 23, 30)}
        {this.renderHex(463, 12, 31)}
        {this.renderHex(483, 23, 30)}
        {this.renderHex(503, 12, 31)}

        {this.renderHex(523, 23, 30)}
        {this.renderHex(543, 12, 31)}
        {this.renderHex(563, 23, 30)}
        {this.renderHex(583, 12, 31)}
        {this.renderHex(603, 23, 30)}
        {this.renderHex(623, 12, 31)}
        {this.renderHex(643, 23, 30)}
        {this.renderHex(663, 12, 31)}
        {this.renderHex(683, 23, 30)}
        {this.renderHex(703, 12, 31)}

        {this.renderHex(723, 23, 30)}
        {this.renderHex(743, 12, 31)}
        {this.renderHex(763, 23, 30)}
        {this.renderHex(783, 12, 31)}
        {this.renderHex(803, 23, 30)}
        {this.renderHex(823, 12, 31)}
        {this.renderHex(843, 23, 30)}
        {this.renderHex(863, 12, 31)}
        {this.renderHex(883, 23, 30)}
        {this.renderHex(903, 12, 31)} */}
        {this.renderHex()}
        {/* {this.anim()} */}
      </div>
    );
  }

  renderHex() {
    let content = [];
    // let xVar = 5;
    // let width = screen.width;
    // console.log(width);
    let xVar = -7.5;
    let yVar;
    for (let i = 0; i < 55; i++) {
      if (i % 2 == 0) {
        yVar = -12;
        for (let i = 0; i < 32; i++) {
          content.push(<Hex x={xVar} y={yVar} />)
          yVar += 24.5;
        }
      }
      else {
        yVar = 0.2;
        for (let i = 0; i < 32; i++) {
          content.push(<Hex x={xVar} y={yVar} />)
          yVar += 24.5;
        }
      }
      xVar += 22;
    }
    return content;
  }

}


