import * as React from "react";
import '../css/hex.css';

type props = {
  x: number,
  y: number,
  id: string,
}

export default class Hex extends React.Component<props> {
  styles = {
    hexagon: {
      left: this.props.x + "px",
      top: this.props.y + "px",
    } as React.CSSProperties
  }
  
  anim1 = () => {
    document.getElementById("ns" + this.props.id).style.backgroundColor = '#1B8BCD';
    document.getElementById("nwse" + this.props.id).style.backgroundColor = '#1B8BCD';
    document.getElementById("swne" + this.props.id).style.backgroundColor = '#1B8BCD';
  }

  norAnim1 = () => {
    document.getElementById("ns" + this.props.id).style.backgroundColor = '#434B57';
    document.getElementById("nwse" + this.props.id).style.backgroundColor = '#434B57';
    document.getElementById("swne" + this.props.id).style.backgroundColor = '#434B57';
  }

  render() {
    return (
      <div className="hexagon" id="hexagon" style={this.styles.hexagon} >
        {/* <div  className="hexagon" id="hexagon" onMouseEnter={this.anim} onMouseLeave={this.norAnim} style={this.styles.hexagon} > */}
        <div className="rect n-s" id={"ns" + this.props.id} onMouseEnter={this.anim1} onMouseLeave={this.norAnim1}></div>
        <div className="rect nw-se" id={"nwse" + this.props.id} onMouseEnter={this.anim1} onMouseLeave={this.norAnim1}></div>
        <div className="rect sw-ne" id={"swne" + this.props.id} onMouseEnter={this.anim1} onMouseLeave={this.norAnim1}></div>
      </div>
    );
  }
}