import React, { useState } from 'react';
import { Folder } from '../svgIcons/folderSVGIconComponent';
import {ArrowIcon} from '../svgIcons/arrowSVGIcons';
import '../css/navbar.css';

export function FolderComponent(props: any) {
    const [isExpanded, setIsExpanded] = useState(true);
    let topLevel: boolean = false;
    let InsideText = () => {
        return (
            <b>[vagus]</b>
        )
    }
    if (props.text === 'Vagus-master') {
        topLevel = true;
    }
    const changeState = (id: string, value: string) => {
        setIsExpanded(!isExpanded);
        setTimeout(() => {
            document.getElementById(id).style.transform = value;
        }, 10)
    }
    return (
        <div className={props.divClassName}>
            <div className="folder-id">
                {isExpanded && <ArrowIcon id={props.arrowID} onClick={() => changeState(props.arrowID, "rotate(-90deg)")} />}
                {!isExpanded && <ArrowIcon id={props.arrowID} onClick={() => changeState(props.arrowID, "rotate(0deg)")} />}
                <Folder fill={props.colorOfFolder} />
                <div className="folder-title">{props.text}{topLevel && <InsideText />}</div>
            </div>
            {isExpanded && props.children}
        </div>
    )
}