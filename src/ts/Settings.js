import * as React from "react";
import * as ActionIcons from '../svgIcons/actionButtons';
import '../css/settings.css';
export default class Settings extends React.Component {
    static updateClasses = (id, classesRM, classesADD) => {
        let element = document.querySelector(id);
        element.classList.remove(...classesRM);
        element.classList.add(...classesADD);
    };
    static toggleDisplay = () => {
        let settings = document.querySelector(".settings-outer");
        if (settings.style.display === "none") {
            settings.style.display = "block";
            Settings.updateClasses('.left-cmd', [], ['blur-ele']);
            Settings.updateClasses('.hex-board', [], ['blur-ele']);
        }
        else {
            settings.style.display = "none";
            Settings.updateClasses('.left-cmd', ['blur-ele'], []);
            Settings.updateClasses('.hex-board', ['blur-ele'], []);
        }
    };
    static braceOpen = () => { return '{'; };
    static braceClosed = () => { return '}'; };
    static renderKey = (keys) => {
        let keyJSX = [];
        keys.forEach(key => {
            keyJSX.push(React.createElement("div", { className: "keys-div" },
                React.createElement("span", { className: "blue" },
                    " ",
                    `"${key}"`),
                ": "));
        });
        return keyJSX;
    };
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "settings-outer", style: { display: 'block' } },
                React.createElement("div", { className: "settings-inner" },
                    React.createElement("div", { className: "settings-master-header" },
                        React.createElement("div", { className: "settings-buttons" },
                            React.createElement(ActionIcons.StopButtonIcon, { onClick: () => { Settings.toggleDisplay(); }, className: "cross-icon" })),
                        React.createElement("div", { className: "settings-header" },
                            React.createElement("p", null, "settings.json"))),
                    React.createElement("div", { className: "settings-content" },
                        React.createElement("div", { className: "braces" },
                            React.createElement("p", null, Settings.braceOpen())),
                        React.createElement("div", { className: "key-value-master-drop" },
                            React.createElement("div", { className: "key-value-master" },
                                React.createElement("div", { className: "keys-master-div" },
                                    " ",
                                    Settings.renderKey(['CMD_BG', 'CMD_BORDER', 'PROJECT_BG', 'MOZ_SB_COLOR', 'SB_COLOR', 'SB_COLOR_HOVER', 'SB_COLOR_TRACK', 'FILE_HOVER', 'ALGO_FOLDER', 'NODE_FOLDER', 'MAZE_FOLDER', 'SPEED_FOLDER', 'LEGEND_FOLDER', 'HEX_COLOR', 'HEX_COLOR_HOVER', 'WALL_NODE_COLOR', 'PATH_NODE_COLOR1', 'PATH_NODE_COLOR2', 'PATH_NODE_COLOR3', 'PATH_NODE_COLOR4', 'PATH_NODE_COLOR5', 'VISITED_NODE_COLOR1', 'VISITED_NODE_COLOR2', 'VISITED_NODE_COLOR3', 'VISITED_NODE_COLOR11', 'VISITED_NODE_COLOR21', 'VISITED_NODE_COLOR31'])),
                                React.createElement("div", { className: "values-master-div" },
                                    React.createElement("div", { className: "values-div" },
                                        React.createElement("span", { className: "blue" }, "\"#_____\""),
                                        ",")))),
                        React.createElement("div", { className: "braces" },
                            React.createElement("p", null, Settings.braceClosed())))))));
    }
}
