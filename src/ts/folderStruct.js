import React, { useState } from 'react';
import { Folder } from '../svgIcons/folderSVGIconComponent';
import { ArrowIcon } from '../svgIcons/arrowSVGIcons';
import '../css/navbar.css';
export function FolderComponent(props) {
    const [isExpanded, setIsExpanded] = useState(true);
    let topLevel = false;
    let InsideText = () => {
        return (React.createElement("b", null, "[master]"));
    };
    if (props.text === 'graphs') {
        topLevel = true;
    }
    const changeState = (id, value) => {
        setIsExpanded(!isExpanded);
        setTimeout(() => {
            document.getElementById(id).style.transform = value;
        }, 1);
    };
    return (React.createElement("div", { className: props.divClassName },
        React.createElement("div", { className: "folder-id" },
            isExpanded && React.createElement(ArrowIcon, { id: props.arrowID, onClick: () => changeState(props.arrowID, "rotate(-90deg)") }),
            !isExpanded && React.createElement(ArrowIcon, { id: props.arrowID, onClick: () => changeState(props.arrowID, "rotate(0deg)") }),
            isExpanded && React.createElement(Folder, { fill: props.colorOfFolder, onClick: () => changeState(props.arrowID, "rotate(-90deg)") }),
            !isExpanded && React.createElement(Folder, { fill: props.colorOfFolder, onClick: () => changeState(props.arrowID, "rotate(0deg)") }),
            isExpanded && React.createElement("div", { className: "folder-title", onClick: () => changeState(props.arrowID, "rotate(-90deg)") },
                props.text,
                topLevel && React.createElement(InsideText, null)),
            !isExpanded && React.createElement("div", { className: "folder-title", onClick: () => changeState(props.arrowID, "rotate(0deg)") },
                props.text,
                topLevel && React.createElement(InsideText, null))),
        isExpanded && props.children));
}
