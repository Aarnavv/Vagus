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
        // let xVar = 5;
        // let width = screen.width;
        // console.log(width);
        let xVar = -7.5;
        let yVar;
        for (let i = 0; i < 55; i++) {
            if (i % 2 == 0) {
                yVar = -12;
                for (let i = 0; i < 32; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar }));
                    yVar += 24.5;
                }
            }
            else {
                yVar = 0.2;
                for (let i = 0; i < 32; i++) {
                    content.push(React.createElement(Hex, { x: xVar, y: yVar }));
                    yVar += 24.5;
                }
            }
            xVar += 22;
        }
        return content;
    }
}
