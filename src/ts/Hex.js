import * as React from "react";
import '../css/hex.css';
import { HexIcon } from "../svgIcons/hexagonSVGIconComponent";
import { updateHexIcon } from "./HexBoardUpdate";
export default class Hex extends React.Component {
    styles = {
        hexagon: {
            left: this.props.x + "px",
            top: this.props.y + "px",
        }
    };
    /**
     * Renders each individual hexagon.
     * @return void
     */
    render() {
        return (React.createElement("div", { className: "hexagon", id: this.props.id, style: this.styles.hexagon, onClick: () => {
                updateHexIcon(`props-${this.props.id}`, parseInt(this.props.id));
            } },
            React.createElement(HexIcon, { idSVG: `svg-${this.props.id}` }),
            React.createElement("div", { className: "prop-holder no-node", id: `props-${this.props.id}` })));
    }
}
