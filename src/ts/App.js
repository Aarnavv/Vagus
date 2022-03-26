import * as React from "react";
import HexBoard from "./HexBoard";
import '../css/app.css';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "App" },
            React.createElement("div", { className: "header" }),
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "left-cmd" }),
                React.createElement(HexBoard, null)))));
}
export default App;
