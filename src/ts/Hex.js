import * as React from "react";
import '../css/hex.css';
export default class Hex extends React.Component {
    styles = {
        hexagon: {
            left: this.props.x + "px",
            top: this.props.y + "px",
        }
    };
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "hexagon", id: "hexagon", style: this.styles.hexagon },
                React.createElement("div", { className: "rect n-s" }),
                React.createElement("div", { className: "rect nw-se" }),
                React.createElement("div", { className: "rect sw-ne" }))));
    }
}
