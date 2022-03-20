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

export default class Hex extends Component {
  xVar: string = ""
  yVar: string = ""
  constructor(props: any) {
    super(props);
    this.xVar = props.x;
    this.yVar = props.y;
  }
  styles = {
    hexagon: {
      left: this.xVar,
      top: this.yVar,
    } as React.CSSProperties
  }
  render() {
    return (
      <div className="hexagon" id="hexagon" style={this.styles.hexagon}>
      </div>
    );
  }
}