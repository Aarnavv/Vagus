import * as React from "react";
import * as ReactDOM from "react-dom";
import Hex from "./Hex";
import '../css/hex.css';
import { render } from "@testing-library/react";

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
  }
  return (
    <div className="hex-board">
      <Hex {...this.propertiesForHex}/>
    </div>
  );
}
export default HexBoard;