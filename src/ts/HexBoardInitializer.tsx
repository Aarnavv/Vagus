import * as React from "react";
import currentState from "./GlobalState";
import Hex from "./Hex";
import '../css/hex.css';
import { setInitialNodes } from './HexBoardUpdate'

/**
 * Renders the hex board in a cyclic fashion.
 * @return void
 */
export default class HexBoardInitializer extends React.Component {
  static rows: number;
  static cols: number;
  static idVar: number;
  static renderHex() {
    const HEX_WIDTH: number = 26;
    const HEX_HEIGHT: number = 30;

    let content: JSX.Element[] = [];
    // let xVar = -2.5;
    let xVar = -14.5;

    let yVar;
    HexBoardInitializer.idVar = 0;

    let width = 0.73 * (window.innerWidth);
    let height = window.innerHeight;
    // let cols = Math.round(width / 22);
    // let rows = Math.round(height / 24.5)-3;

    HexBoardInitializer.cols = Math.ceil(width / HEX_WIDTH);
    HexBoardInitializer.rows = Math.ceil(height / HEX_HEIGHT);

    // let cols = 39;
    // let rows = 25;

    for (let i = 0; i < HexBoardInitializer.cols; i++) {
      if (i % 2 === 0) {
        yVar = -17;
        // yVar = -12;
        for (let i = 0; i < HexBoardInitializer.rows; i++) {
          // content.push(<Hex />)
          content.push(<Hex x={xVar} y={yVar} id={HexBoardInitializer.idVar.toString()} key={HexBoardInitializer.idVar.toString()} />)
          yVar += HEX_HEIGHT;
          // yVar += 23.5;
          currentState.graph().addNode(HexBoardInitializer.idVar);
          currentState.graph().setNodeCoords(HexBoardInitializer.idVar, { x: xVar, y: yVar });
          currentState.initGraph().addNode(HexBoardInitializer.idVar);
          currentState.initGraph().setNodeCoords(HexBoardInitializer.idVar, { x: xVar, y: yVar });
          HexBoardInitializer.idVar++;
        }
      }
      else {
        // yVar = 0.2;
        yVar = -2.5;
        for (let i = 0; i < HexBoardInitializer.rows; i++) {
          content.push(<Hex x={xVar} y={yVar} id={HexBoardInitializer.idVar.toString()} key={HexBoardInitializer.idVar.toString()} />)
          yVar += HEX_HEIGHT;
          // yVar += 23.5;
          currentState.graph().addNode(HexBoardInitializer.idVar);
          currentState.graph().setNodeCoords(HexBoardInitializer.idVar, { x: xVar, y: yVar });
          currentState.initGraph().addNode(HexBoardInitializer.idVar);
          currentState.initGraph().setNodeCoords(HexBoardInitializer.idVar, { x: xVar, y: yVar });
          HexBoardInitializer.idVar++;
        }
      }
      // xVar += 21;
      xVar += HEX_WIDTH;
    }
    let columnID = 0;
    let columnIDCenter = 0;

    for (let i = 0; i < HexBoardInitializer.idVar; i++) {
      // first row conditions
      if (i % HexBoardInitializer.rows === 0) {
        columnID = i / HexBoardInitializer.rows;
        // console.log(columnID)
        if (columnID === 0) { // adj 2
          currentState.graph().addEdge(i, i + 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
        }
        else if (columnID === HexBoardInitializer.cols - 1) {
          if (HexBoardInitializer.cols % 2 === 0) { // adj 3
            currentState.graph().addEdge(i, i + 1, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
            currentState.initGraph().addEdge(i, i + 1, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
          }
          else { // adj 2
            currentState.graph().addEdge(i, i + 1, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.initGraph().addEdge(i, i + 1, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          }
        }
        else if (columnID % 2 === 0) { // 3 adj
          currentState.graph().addEdge(i, i + 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
        }
        else { // 5 adj
          currentState.graph().addEdge(i, i + 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows + 1, 1);
          currentState.initGraph().addEdge(i, i + 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows + 1, 1);
        }
      }
      // last row conditions
      else if ((i + 1) % HexBoardInitializer.rows === 0) {
        columnID = (i + 1) / HexBoardInitializer.rows;
        if (columnID === 1) { // adj 3
          currentState.graph().addEdge(i, i - 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
          currentState.initGraph().addEdge(i, i - 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
        }
        else if (columnID === HexBoardInitializer.cols) {
          if (HexBoardInitializer.cols % 2 === 0) { // adj 2
            currentState.graph().addEdge(i, i - 1, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.initGraph().addEdge(i, i - 1, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          }
          else { // adj 3
            currentState.graph().addEdge(i, i - 1, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.graph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
            currentState.initGraph().addEdge(i, i - 1, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
            currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
          }
        }
        else if (columnID % 2 === 0) { // 3 adj
          currentState.graph().addEdge(i, i - 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i - 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
        }
        else { // 5 adj
          currentState.graph().addEdge(i, i - 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
          currentState.initGraph().addEdge(i, i - 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
        }
      }
      // first column conditions
      else if (i <= HexBoardInitializer.rows) { // adj 4
        currentState.graph().addEdge(i, i - 1, 1);
        currentState.graph().addEdge(i, i + 1, 1);
        currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
        currentState.graph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
        currentState.initGraph().addEdge(i, i - 1, 1);
        currentState.initGraph().addEdge(i, i + 1, 1);
        currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
        currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
      }
      //last column conditions
      else if (i > (HexBoardInitializer.rows * (HexBoardInitializer.cols - 1))) { // adj 4
        currentState.graph().addEdge(i, i - 1, 1);
        currentState.graph().addEdge(i, i + 1, 1);
        currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
        currentState.graph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
        currentState.initGraph().addEdge(i, i - 1, 1);
        currentState.initGraph().addEdge(i, i + 1, 1);
        currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
        currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
      }
      else { // adj 6
        columnIDCenter = Math.floor(i / HexBoardInitializer.rows);
        if (columnIDCenter % 2 != 0) {
          currentState.graph().addEdge(i, i - 1, 1);
          currentState.graph().addEdge(i, i + 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows + 1, 1);
          currentState.initGraph().addEdge(i, i - 1, 1);
          currentState.initGraph().addEdge(i, i + 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows + 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows + 1, 1);
        }
        else if (columnIDCenter % 2 === 0) {
          currentState.graph().addEdge(i, i - 1, 1);
          currentState.graph().addEdge(i, i + 1, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.graph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
          currentState.initGraph().addEdge(i, i - 1, 1);
          currentState.initGraph().addEdge(i, i + 1, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i - HexBoardInitializer.rows - 1, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows, 1);
          currentState.initGraph().addEdge(i, i + HexBoardInitializer.rows - 1, 1);
        }
      }
    }
    setInitialNodes();
    currentState.initGraph().freeze();
    return content;
  }
}
