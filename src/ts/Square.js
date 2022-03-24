import * as React from "react";
import '../css/square.css';
export default class Square extends React.Component {
    styles = {
        square: {
            left: this.props.x + "px",
            top: this.props.y + "px",
        }
    };
    render() {
        return (React.createElement("div", { className: "square", id: "square", style: this.styles.square }));
    }
}
