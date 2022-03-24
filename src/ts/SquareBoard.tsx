import * as React from "react";
import Square from "./Square";
import '../css/square.css';

export default class SquareBoard extends React.Component {
  render() {
    return (
      <div className="square-board">
        {this.renderSquare()}
      </div>
    );
  }

  renderSquare() {
    let content = [];
    let xVar = 5;
    let yVar = 0;
    for (let i = 0; i < 47; i++) {
      yVar = 5;
      for (let i = 0; i < 31; i++) {
        content.push(<Square x={xVar} y={yVar} />)
        yVar += 22.5;
      }
      xVar += 23;
    }
    return content;
  }
}
