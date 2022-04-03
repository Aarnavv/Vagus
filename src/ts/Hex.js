import * as React from "react";
import '../css/hex.css';
export default class Hex extends React.Component {
    styles = {
        hexagon: {
            left: this.props.x + "px",
            top: this.props.y + "px",
        }
    };
    anim1 = () => {
        document.getElementById("ns" + this.props.id).style.backgroundColor = '#1B8BCD';
        document.getElementById("nwse" + this.props.id).style.backgroundColor = '#1B8BCD';
        document.getElementById("swne" + this.props.id).style.backgroundColor = '#1B8BCD';
    };
    norAnim1 = () => {
        document.getElementById("ns" + this.props.id).style.backgroundColor = '#434B57';
        document.getElementById("nwse" + this.props.id).style.backgroundColor = '#434B57';
        document.getElementById("swne" + this.props.id).style.backgroundColor = '#434B57';
    };
    render() {
        return (React.createElement("div", { className: "hexagon", id: "hexagon", style: this.styles.hexagon },
            React.createElement("div", { className: "rect n-s", id: "ns" + this.props.id, onMouseEnter: this.anim1, onMouseLeave: this.norAnim1 }),
            React.createElement("div", { className: "rect nw-se", id: "nwse" + this.props.id, onMouseEnter: this.anim1, onMouseLeave: this.norAnim1 }),
            React.createElement("div", { className: "rect sw-ne", id: "swne" + this.props.id, onMouseEnter: this.anim1, onMouseLeave: this.norAnim1 })));
    }
}
