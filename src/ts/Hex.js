import * as React from "react";
import '../css/hex.css';
import { HexIcon } from "../svgIcons/hexagonSVGIconComponent";
import { GRAPH } from "./GlobalState";
export default class Hex extends React.Component {
    styles = {
        hexagon: {
            left: this.props.x + "px",
            top: this.props.y + "px",
        }
    };
    // hover = () => {
    //   document.getElementById("ns" + this.props.id).style.backgroundColor = '#1B8BCD';
    //   document.getElementById("nwse" + this.props.id).style.backgroundColor = '#1B8BCD';
    //   document.getElementById("swne" + this.props.id).style.backgroundColor = '#1B8BCD';
    // }
    // Unhover = () => {
    //   document.getElementById("ns" + this.props.id).style.backgroundColor = '#282C34';
    //   document.getElementById("nwse" + this.props.id).style.backgroundColor = '#282C34';
    //   document.getElementById("swne" + this.props.id).style.backgroundColor = '#282C34';
    // }
    // render() {
    //   return (
    //     <div className="hexagon" id="hexagon" style={this.styles.hexagon} >
    //       {/* <div  className="hexagon" id="hexagon" onMouseEnter={this.anim} onMouseLeave={this.UnAnim} style={this.styles.hexagon} > */}
    //       <div className="rect n-s" id={"ns" + this.props.id} onMouseEnter={this.hover} onMouseLeave={this.Unhover}></div>
    //       <div className="rect nw-se" id={"nwse" + this.props.id} onMouseEnter={this.hover} onMouseLeave={this.Unhover}></div>
    //       <div className="rect sw-ne" id={"swne" + this.props.id} onMouseEnter={this.hover} onMouseLeave={this.Unhover}></div>
    //     </div>
    //   );
    // }
    render() {
        return (React.createElement("div", { className: "hexagon", id: this.props.id, style: this.styles.hexagon, onClick: () => console.log(GRAPH) },
            React.createElement(HexIcon, { width: 34, height: 34 })));
    }
}
