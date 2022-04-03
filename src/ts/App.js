import React from "react";
import HexBoard from "./HexBoard";
import Navbar from "./Navbar";
import '../css/app.css';
export default class App extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "App" },
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "left-cmd" },
                        React.createElement(Navbar, null)),
                    React.createElement(HexBoard, null)))));
    }
}
