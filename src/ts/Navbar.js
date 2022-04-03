import * as React from "react";
import '../css/navbar.css';
export default class Navbar extends React.Component {
    render() {
        return (React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "title" }, "Vagus"),
                React.createElement("div", { className: "description" }, "[\u201Cpathfinding algorithms\u201D][\u201CLatin\u201D:\u201Dwandering\u201D]")),
            React.createElement("div", { className: "project" },
                React.createElement("svg", { className: "svg-img", width: "22", height: "18", viewBox: "0 0 22 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("svg", { className: "svg-img", width: "22", height: "18", viewBox: "0 0 22 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "22", height: "17.1471", fill: "#C4C4C4" }),
                        React.createElement("rect", { x: "1.14706", y: "3.73535", width: "19.7059", height: "11.9412", fill: "#2079AD", stroke: "black" }))),
                React.createElement("p", { className: "project-title" }, "Project"),
                React.createElement("div", { className: "buttons" },
                    React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "17", height: "17", rx: "2", fill: "#262626" }),
                        React.createElement("rect", { x: "5.12134", y: "3", width: "13", height: "3", transform: "rotate(45 5.12134 3)", fill: "#FF0000" }),
                        React.createElement("rect", { width: "13", height: "3", transform: "matrix(-0.707107 0.707107 0.707107 0.707107 12.1924 3)", fill: "#FF0000" })),
                    React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "17", height: "17", rx: "2", fill: "#262626" }),
                        React.createElement("path", { d: "M8.6683 6.66667C6.98534 6.66667 5.46116 7.32667 4.28627 8.4L2 6V12H7.71568L5.41671 9.58667C6.29946 8.81333 7.42355 8.33333 8.6683 8.33333C10.9165 8.33333 12.828 9.87333 13.4949 12L15 11.48C14.1172 8.68667 11.6214 6.66667 8.6683 6.66667Z", fill: "#8167AD" })),
                    React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "17", height: "17", rx: "2", fill: "#262626" }),
                        React.createElement("path", { d: "M15 9L4.5 15.0622L4.5 2.93782L15 9Z", fill: "#499C54" }))))));
    }
}
