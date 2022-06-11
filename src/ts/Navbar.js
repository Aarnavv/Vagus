import * as React from "react";
import '../css/navbar.css';
import { ProjectIcon } from '../svgIcons/projectSVGIconComponent';
import * as ActionIcons from '../svgIcons/actionButtons';
import { FolderComponent } from "./folderStruct";
import { TSXFile, IOFile, BATFile, SYSFile, MDFile, GUIFile } from "./fileStruct";
import cssConstants from "./cssConstants";
import { StopButtonClick, StartButtonClick, PrevButtonClick } from "./ActionButtonsFunctionality";
import currentState from './GlobalState';
import { RemoveAllClasses } from './ActionButtonsFunctionality';
export default class Navbar extends React.Component {
    render() {
        return (React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "title" }, "Vagus"),
                React.createElement("div", { className: "description" }, "{\"Latin\":\"wandering\",\"purpose\":\"algorithms\"}")),
            React.createElement("div", { className: "project" },
                React.createElement(ProjectIcon, null),
                React.createElement("p", { className: "project-title" }, "Project"),
                React.createElement("div", { className: "buttons" },
                    React.createElement(ActionIcons.StopButtonIcon, { onClick: () => {
                            StopButtonClick();
                        } }),
                    React.createElement(ActionIcons.PrevButtonIcon, { onClick: () => {
                            PrevButtonClick();
                        } }),
                    React.createElement(ActionIcons.RunButtonIcon, { onClick: () => {
                            let currentNode = currentState.graph().nodes().get(currentState.startNode());
                            RemoveAllClasses(1, []);
                            if (currentState.run())
                                StartButtonClick(currentNode, true);
                            else if (!currentState.run()) {
                                currentState.changeRun();
                                StartButtonClick(currentNode, false);
                            }
                        } }))),
            React.createElement("div", { className: "folder-panel" },
                React.createElement(FolderComponent, { colorOfFolder: cssConstants.SOLID_RED, text: "Vagus-master", divClassName: "folder", arrowID: "vagus-master-arrow" },
                    React.createElement("div", { className: "advanced-cp-border" },
                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.SOLID_RED, text: "advanced-control-panel", divClassName: "folder advanced-cp-comp", arrowID: "advanced-cp-arrow" },
                            React.createElement("div", { className: "advanced-cp-border" },
                                React.createElement(FolderComponent, { colorOfFolder: cssConstants.LIGHT_RED, text: "algorithms", divClassName: "folder advanced-cp-comp", arrowID: "algorithms-arrow" },
                                    React.createElement("div", { className: "folder-drop-inner" },
                                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.LIGHT_RED, text: "heuristic", divClassName: "folder advanced-cp-comp", arrowID: "heuristic-arrow" },
                                            React.createElement("div", { className: "folder-drop-inner" },
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "aStarSearch.tsx", divID: "tsx-1" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "bestFirstSearch.tsx", divID: "tsx-2" }))),
                                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.LIGHT_RED, text: "un-weighted", divClassName: "folder advanced-cp-comp", arrowID: "un-weighted-arrow" },
                                            React.createElement("div", { className: "folder-drop-inner" },
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "breadthFirstSearch.tsx", divID: "tsx-3" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "depthFirstSearch.tsx", divID: "tsx-4" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "randomWalk.tsx", divID: "tsx-5" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "bestFirstSearch.tsx", divID: "tsx-6" }))),
                                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.LIGHT_RED, text: "weighted", divClassName: "folder advanced-cp-comp", arrowID: "weighted-arrow" },
                                            React.createElement("div", { className: "folder-drop-inner" },
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "aStarSearch.tsx", divID: "tsx-7" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "dijkstrasSearch.tsx", divID: "tsx-8" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "bellmanFord.tsx", divID: "tsx-9" }),
                                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "biDirectionalSearch.tsx", divID: "tsx-10" }))))),
                                React.createElement(FolderComponent, { colorOfFolder: cssConstants.BLUE, text: "addableNodes", divClassName: "folder advanced-cp-comp", arrowID: "addable-arrow" },
                                    React.createElement("div", { className: "folder-drop-inner" },
                                        React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "startNode.io", divID: "io-1" }),
                                        React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "endNode.io", divID: "io-2" }),
                                        React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "bombNode.io", divID: "io-3" }),
                                        React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "weightNode.io", divID: "io-4" }),
                                        React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "wallNode.io", divID: "io-5" }))),
                                React.createElement(FolderComponent, { colorOfFolder: cssConstants.GREEN, text: "mazes", divClassName: "folder advanced-cp-comp", arrowID: "mazes-arrow" },
                                    React.createElement("div", { className: "folder-drop-inner" },
                                        React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "none.bat", divID: "bat-1" }),
                                        React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateRandomMaze.bat", divID: "bat-2" }),
                                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.GREEN, text: "wall", divClassName: "folder advanced-cp-comp", arrowID: "wall-arrow" },
                                            React.createElement("div", { className: "folder-drop-inner" },
                                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateLeastCostPathBlocker.bat", divID: "bat-3" }),
                                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateBlockedRidges.bat", divID: "bat-4" }),
                                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateBlockedRandomMaze.bat", divID: "bat-5" }))),
                                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.GREEN, text: "weighted", divClassName: "folder advanced-cp-comp", arrowID: "weighted-arrow" },
                                            React.createElement("div", { className: "folder-drop-inner" },
                                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateWeightedRidges.bat", divID: "bat-6" }),
                                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "generateWeightedRandomMaze.bat", divID: "bat-7" }))))),
                                React.createElement(FolderComponent, { colorOfFolder: cssConstants.YELLOW, text: "speeds", divClassName: "folder advanced-cp-comp", arrowID: "speeds-arrow" },
                                    React.createElement("div", { className: "folder-drop-inner" },
                                        React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "25percent.sys", divID: "sys-1" }),
                                        React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "50percent.sys", divID: "sys-2" }),
                                        React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "100percent.sys", divID: "sys-3" }))))),
                        React.createElement(FolderComponent, { colorOfFolder: cssConstants.SOLID_RED, text: "legend", divClassName: "folder advanced-cp-comp", arrowID: "legend-arrow" },
                            React.createElement("div", { className: "folder-drop-inner" },
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "bombNode.gui", type: "bomb", divID: "gui-1" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "shortestPathNode.gui", type: "shortest-path", divID: "gui-2" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "wallNode.gui", type: "wall", divID: "gui-3" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "visitedNode.gui", type: "visited", divID: "gui-4" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "unvisitedNode.gui", type: "unvisited", divID: "gui-5" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "startNode.gui", type: "start-node", divID: "gui-6" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "endNode.gui", type: "end-node", divID: "gui-7" }),
                                React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "weightNode.gui", type: "weight", divID: "gui-8" }))),
                        React.createElement(MDFile, { divClassName: "folder-less-file file md-file advanced-cp-comp", pClassName: "file-name", text: "settings.json [Work in Progress!]", divID: "md-1" }))))));
    }
}
