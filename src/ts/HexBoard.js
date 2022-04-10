import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';
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
                    idVar++;
                    content.push(React.createElement(Hex, { x: xVar, y: yVar, id: idVar.toString(), key: idVar.toString() }));
                    // yVar += 23.5;
                    yVar += HEX_HEIGHT;
                }
            }
            else {
                // yVar = 0.2;
                yVar = -2.5;
                for (let i = 0; i < rows; i++) {
                    idVar++;
                    content.push(React.createElement(Hex, { x: xVar, y: yVar, id: idVar.toString(), key: idVar.toString() }));
                    yVar += HEX_HEIGHT;
                    // yVar += 23.5;
                }
            }
            // xVar += 21;
            xVar += HEX_WIDTH;
        }
        return content;
    }
}
