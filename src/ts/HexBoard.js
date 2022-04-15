import * as React from "react";
import '../css/hex.css';
import HexBoardInitializer from "./HexBoardInitializer";
export default class HexBoard extends React.Component {
    render() {
        return (React.createElement("div", { className: "hex-board" }, HexBoardInitializer.renderHex()));
    }
}
