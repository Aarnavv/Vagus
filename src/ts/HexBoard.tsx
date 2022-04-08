import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';

export default class HexBoard extends React.Component {
  render() {
    return (
      <div className="hex-board">
        {this.renderHex()}
      </div>
    );
  }

  renderHex() {
    let content = [];
    let xVar = -2.5;
    let yVar;
    let idVar = 0;

    let width = 0.79*(window.screen.availWidth);
    let height = window.screen.availHeight-100;
    let cols = Math.round(width/22);
    let rows = Math.round(height/24.5);

    for (let i = 0; i < cols; i++) {
      if (i % 2 == 0) {
        yVar = -12;
        for (let i = 0; i < rows; i++) {
          idVar++;
          content.push(<Hex x={xVar} y={yVar} id={idVar.toString()} key={idVar.toString()}/>)
          yVar += 24.5;
        }
      }
      else {
        yVar = 0.2;
        for (let i = 0; i < rows; i++) {
          idVar++;
          content.push(<Hex x={xVar} y={yVar} id={idVar.toString()} key={idVar.toString()}/>)
          yVar += 24.5;
        }
      }
      xVar += 22;
    }
    return content;
  }
}