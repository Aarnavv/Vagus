import * as React from "react";
import Hex from "./Hex";
import '../css/hex.css';
function HexBoard() {
    // const hex1 = new Hex("0", "0");
    // render(){
    // const propertiesForX = {
    //   x: 12,
    //   y: 21,
    // }
    // }
    const propertiesForHex = {
        x: "12px",
        y: "21px",
    };
    return (React.createElement("div", { className: "hex-board" },
        React.createElement(Hex, { ...this.propertiesForHex })));
}
export default HexBoard;
