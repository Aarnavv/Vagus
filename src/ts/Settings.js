import * as React from "react";
import * as ActionIcons from '../svgIcons/actionButtons';
import '../css/settings.css';
import { updateIDClass } from './Utility';
import currentState from "./GlobalState";
export default class Settings extends React.Component {
    static toggleDisplay = () => {
        let settings = document.querySelector(".settings-outer");
        if (settings.style.display === "none") {
            settings.style.display = "block";
            updateIDClass('left-cmd', [], ['blur-ele']);
            updateIDClass('hex-board', [], ['blur-ele']);
        }
        else {
            settings.style.display = "none";
            updateIDClass('left-cmd', ['blur-ele'], []);
            updateIDClass('hex-board', ['blur-ele'], []);
        }
    };
    static braceOpen = () => { return '{'; };
    static braceClosed = () => { return '}'; };
    static renderKey = (mapper) => {
        let keyJSX = [];
        let i = 0;
        mapper.forEach((value, key) => {
            keyJSX.push(React.createElement("div", { className: "key-value", id: `key-value-${i}`, key: i },
                React.createElement("div", { className: "keys-div" },
                    React.createElement("span", { className: "blue", id: `key-${i}` },
                        " ",
                        `"${key}"`),
                    ": "),
                React.createElement("div", { className: "values-div" },
                    React.createElement("span", { className: "blue" },
                        "\"#",
                        React.createElement("span", { className: "blue", id: `value-${i}`, contentEditable: "true", suppressContentEditableWarning: true }, `${value}`),
                        "\""),
                    ",")));
            i++;
        });
        return keyJSX;
    };
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "settings-outer", style: { display: 'none' } },
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
                            React.createElement("div", { className: "key-value-master" }, Settings.renderKey(currentState.cssVariables()))),
                        React.createElement("div", { className: "braces" },
                            React.createElement("p", null, Settings.braceClosed())))))));
    }
}
