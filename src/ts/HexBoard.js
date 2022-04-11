import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';
import { GRAPH } from "./GlobalState";
export default class HexBoard extends React.Component {
  render() {
    return (React.createElement("div", { className: "hex-board" }, this.renderHex()));
  }
  renderHex() {
    const HEX_WIDTH = 26;
    const HEX_HEIGHT = 30;
    let content = [];
    // let xVar = -2.5;
    let xVar = -14.5;
    let yVar;
    let idVar = 0;
    let width = 0.73 * (window.innerWidth);
    let height = window.innerHeight;
    // let cols = Math.round(width / 22);
    // let rows = Math.round(height / 24.5)-3;
    let cols = Math.ceil(width / HEX_WIDTH);
    let rows = Math.ceil(height / HEX_HEIGHT);
    // let cols = 39;
    // let rows = 25;
    for (let i = 0; i < cols; i++) {
      if (i % 2 === 0) {
        yVar = -17;
        // yVar = -12;
        for (let i = 0; i < rows; i++) {
          content.push(React.createElement(Hex, { x: xVar, y: yVar, id: idVar.toString(), key: idVar.toString() }));
          idVar++;
          yVar += HEX_HEIGHT;
          // yVar += 23.5;
          GRAPH.addNode(idVar);
        }
      }
      else {
        // yVar = 0.2;
        yVar = -2.5;
        for (let i = 0; i < rows; i++) {
          content.push(React.createElement(Hex, { x: xVar, y: yVar, id: idVar.toString(), key: idVar.toString() }));
          idVar++;
          yVar += HEX_HEIGHT;
          // yVar += 23.5;
          GRAPH.addNode(idVar);
        }
      }
      // xVar += 21;
      xVar += HEX_WIDTH;
    }
    var columnID = 0;
    // console.log(cols)
    // console.log(rows)
    for (let i = 0; i < idVar; i++) {
      // first row conditions
      if (i % rows === 0) {
        columnID = i / rows;
        if (columnID === 0) { // adj 2
          GRAPH.addEdge(0, i + 1, 1);
          GRAPH.addEdge(0, i + rows, 1);
        }
        else if (columnID === cols - 1) {
          if (cols % 2 == 0) { // adj 3
            GRAPH.addEdge(i, i + 1, 1);
            GRAPH.addEdge(i, i - rows, 1);
            GRAPH.addEdge(i, i - rows + 1, 1);
          }
          else { // adj 2
            GRAPH.addEdge(i, i + 1, 1);
            GRAPH.addEdge(i, i - rows, 1);
          }
        }
        else if (columnID % 2 === 0) { // 3 adj
          GRAPH.addEdge(i, i + 1, 1);
          GRAPH.addEdge(i, i - rows, 1);
          GRAPH.addEdge(i, i + rows, 1);
        }
        else { // 5 adj
          GRAPH.addEdge(i, i + 1, 1);
          GRAPH.addEdge(i, i - rows, 1);
          GRAPH.addEdge(i, i + rows, 1);
          GRAPH.addEdge(i, i - rows + 1, 1);
          GRAPH.addEdge(i, i + rows + 1, 1);
        }
      }
      // last row conditions
      else if ((i + 1) % rows === 0) {
        columnID = (i + 1) / rows;
        if (columnID === 1) { // adj 3
          // console.log(i)
          // console.log(i + 1)
          // console.log(i - rows)
          // console.log(i + rows)
          // console.log(i - rows + 1)
          // console.log(i + rows + 1)
        }
        else if (columnID === cols) {
          if (cols % 2 == 0) {
            // adj 2
          }
          else {
            // adj 3
          }
        }
        else if (columnID % 2 === 0) {
          // 3 adj
        }
        else {
          // 5 adj
        }
      }
      // first column conditions
      else if (i <= rows) {
        // adj 4
      }
      //last column conditions
      else if (i > (rows * (cols - 1))) {
        // adj 4
      }
      else {
        // adj 6
      }
    }
    return content;
  }
}
