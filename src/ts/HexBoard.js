import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';
import { Component } from "react";
export default class HexBoard extends Component {
    render() {
        return (React.createElement("div", { className: "hex-board" }, this.renderHex()));
    }
    renderHex() {
        let content = [];
        // let xVar = 323;
        let xVar = 5;
        let yVar;
        for (let i = 0; i < 30; i++) {
            if (i % 2 == 0) {
                yVar = -8;
                for (let i = 0; i < 30; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar }));
                    yVar += 22.5;
                }
            }
            else {
                yVar = 2.75;
                for (let i = 0; i < 30; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar }));
                    yVar += 22.5;
                }
            }
            xVar += 20;
        }
        return content;
    }
}
