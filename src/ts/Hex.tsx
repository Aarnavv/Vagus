import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";
import '../css/hex.css';

// function Hex() {
//   return (
//     <div className="hexagon" id="hexagon" style={styles.hexagon}>
//     </div>
//   );
// }

// const styles = {
//   hexagon: {
//     top: "0px",
//   } as React.CSSProperties
// }
// export default Hex;

type coords = {
  x: number,
  y: number
}

export default class Hex extends React.Component<coords> {
  // xVar: string = ""
  // yVar: string = ""
  // constructor(props: any) {
  //   super(props);
  //   this.xVar = props.x;
  //   this.yVar = props.y;
  // }
  styles = {
    hexagon: {
      left: this.props.x + "px",
      top: this.props.y + "px",
    } as React.CSSProperties
  }
  render() {
    return (
      <div className="hexagon" id="hexagon" style={this.styles.hexagon}>
      </div>
    );
  }
}