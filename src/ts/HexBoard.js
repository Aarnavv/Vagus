import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';
import currentState from "./GlobalState";
import { SetInitialNodes } from './HexBoardUpdate';
export default class HexBoard extends React.Component {
    static rows;
    static cols;
    static idVar;
    render() {
        return (React.createElement("div", { className: "hex-board" }, HexBoard.renderHex()));
    }
    static renderHex() {
        const HEX_WIDTH = 26;
        const HEX_HEIGHT = 30;
        let content = [];
        // let xVar = -2.5;
        let xVar = -14.5;
        let yVar;
        HexBoard.idVar = 0;
        let width = 0.73 * (window.innerWidth);
        let height = window.innerHeight;
        // let cols = Math.round(width / 22);
        // let rows = Math.round(height / 24.5)-3;
        HexBoard.cols = Math.ceil(width / HEX_WIDTH);
        HexBoard.rows = Math.ceil(height / HEX_HEIGHT);
        // let cols = 39;
        // let rows = 25;
        for (let i = 0; i < HexBoard.cols; i++) {
            if (i % 2 === 0) {
                yVar = -17;
                // yVar = -12;
                for (let i = 0; i < HexBoard.rows; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar, id: HexBoard.idVar.toString(), key: HexBoard.idVar.toString() }));
                    yVar += HEX_HEIGHT;
                    // yVar += 23.5;
                    currentState.graph().addNode(HexBoard.idVar);
                    HexBoard.idVar++;
                }
            }
            else {
                // yVar = 0.2;
                yVar = -2.5;
                for (let i = 0; i < HexBoard.rows; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar, id: HexBoard.idVar.toString(), key: HexBoard.idVar.toString() }));
                    yVar += HEX_HEIGHT;
                    // yVar += 23.5;
                    currentState.graph().addNode(HexBoard.idVar);
                    HexBoard.idVar++;
                }
            }
            // xVar += 21;
            xVar += HEX_WIDTH;
        }
        let columnID = 0;
        for (let i = 0; i < HexBoard.idVar; i++) {
            // first row conditions
            if (i % HexBoard.rows === 0) {
                columnID = i / HexBoard.rows;
                if (columnID === 0) { // adj 2
                    currentState.graph().addEdge(i, i + 1, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                }
                else if (columnID === HexBoard.cols - 1) {
                    if (HexBoard.cols % 2 === 0) { // adj 3
                        currentState.graph().addEdge(i, i + 1, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows + 1, 1);
                    }
                    else { // adj 2
                        currentState.graph().addEdge(i, i + 1, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    }
                }
                else if (columnID % 2 === 0) { // 3 adj
                    currentState.graph().addEdge(i, i + 1, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                }
                else { // 5 adj
                    currentState.graph().addEdge(i, i + 1, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows + 1, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows + 1, 1);
                }
            }
            // last row conditions
            else if ((i + 1) % HexBoard.rows === 0) {
                columnID = (i + 1) / HexBoard.rows;
                if (columnID === 1) { // adj 3
                    currentState.graph().addEdge(i, i - 1, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows - 1, 1);
                }
                else if (columnID === HexBoard.cols) {
                    if (HexBoard.cols % 2 === 0) { // adj 2
                        currentState.graph().addEdge(i, i - 1, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    }
                    else { // adj 3
                        currentState.graph().addEdge(i, i - 1, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                        currentState.graph().addEdge(i, i - HexBoard.rows - 1, 1);
                    }
                }
                else if (columnID % 2 === 0) { // 3 adj
                    currentState.graph().addEdge(i, i - 1, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                }
                else { // 5 adj
                    currentState.graph().addEdge(i, i - 1, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                    currentState.graph().addEdge(i, i - HexBoard.rows - 1, 1);
                    currentState.graph().addEdge(i, i + HexBoard.rows - 1, 1);
                }
            }
            // first column conditions
            else if (i <= HexBoard.rows) { // adj 4
                currentState.graph().addEdge(i, i - 1, 1);
                currentState.graph().addEdge(i, i + 1, 1);
                currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                currentState.graph().addEdge(i, i + HexBoard.rows - 1, 1);
            }
            //last column conditions
            else if (i > (HexBoard.rows * (HexBoard.cols - 1))) { // adj 4
                currentState.graph().addEdge(i, i - 1, 1);
                currentState.graph().addEdge(i, i + 1, 1);
                currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                currentState.graph().addEdge(i, i - HexBoard.rows - 1, 1);
            }
            else { // adj 6
                currentState.graph().addEdge(i, i - 1, 1);
                currentState.graph().addEdge(i, i + 1, 1);
                currentState.graph().addEdge(i, i - HexBoard.rows, 1);
                currentState.graph().addEdge(i, i - HexBoard.rows + 1, 1);
                currentState.graph().addEdge(i, i + HexBoard.rows, 1);
                currentState.graph().addEdge(i, i + HexBoard.rows + 1, 1);
            }
        }
        SetInitialNodes();
        return content;
    }
}
