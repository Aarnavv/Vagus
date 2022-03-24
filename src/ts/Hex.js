import * as React from "react";
import '../css/hex.css';
export default class Hex extends React.Component {
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
        }
    };
    render() {
        return (React.createElement("div", { className: "hexagon", id: "hexagon", style: this.styles.hexagon }));
    }
}
