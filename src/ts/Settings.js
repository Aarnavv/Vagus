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
        console.log(settings.style.display);
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
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "settings-outer", style: { display: 'none' } },
                React.createElement("div", { className: "settings-inner" },
                    React.createElement("div", { className: "settings-buttons" },
                        React.createElement(ActionIcons.StopButtonIcon, { onClick: () => { Settings.toggleDisplay(); }, className: "cross-icon" }))))));
    }
}
