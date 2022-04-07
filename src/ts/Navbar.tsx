import * as React from "react";
import '../css/navbar.css';
import { ProjectIcon } from '../svgIcons/projectSVGIconComponent';
import * as ActionIcons from '../svgIcons/actionButtons';
import { FolderComponent } from "./folderStruct";
import { TSXFile, IOFile, BATFile, SYSFile, MDFile, GUIFile } from "./fileStruct";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="header">
          <div className="title">Vagus</div>
          <div className="description">{"{\"Latin\":\"wandering\",\"purpose\":\"algorithms\"}"}</div>
        </div>
        <div className="project">
          <ProjectIcon />
          <p className="project-title">Project</p>
          <div className="buttons">
            <ActionIcons.StopButtonIcon />
            <ActionIcons.PrevButtonIcon />
            <ActionIcons.RunButtonIcon />
          </div>
        </div>
        <div className="folder-panel">
          <FolderComponent colorOfFolder="#EF5350" text="Vagus-master" divClassName="folder" arrowID="vagus-master-arrow">
            <FolderComponent colorOfFolder="#EF5350" text="advanced-control-panel" divClassName="folder" arrowID="advanced-cp-arrow" >
              <FolderComponent colorOfFolder="#D5756C" text="algorithms" divClassName="folder" arrowID="algorithms-arrow" >
                <div>
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="aStarSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="djikstrasSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="bellmanFord.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="breadthFirstSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="depthFirstSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="biDirectionalSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="floydWarshallSearch.tsx" />
                  <TSXFile divClassName="file" pClassName="tsx-name file-name" text="johnsonsAlgorithm.tsx" />
                </div>
              </FolderComponent>
              <FolderComponent colorOfFolder="#67BBFF" text="addableNodes" divClassName="folder" arrowID="addable-arrow">
                <div>
                  <IOFile divClassName="file" pClassName="node-name file-name" text="weigthNode.io" />
                  <IOFile divClassName="file" pClassName="node-name file-name" text="bombNode.io" />
                  <IOFile divClassName="file" pClassName="node-name file-name" text="wallNode.io" />
                </div>
              </FolderComponent>
              <FolderComponent colorOfFolder="#4CAF50" text="mazes" divClassName="folder" arrowID="mazes-arrow">
                <div>
                  <BATFile divClassName="file" pClassName="maze-name file-name" text="none.bat" />
                  <BATFile divClassName="file" pClassName="maze-name file-name" text="gridMaze.bat" />
                  <BATFile divClassName="file" pClassName="maze-name file-name" text="randomMaze.bat" />
                  <BATFile divClassName="file" pClassName="maze-name file-name" text="diagonalCutMaze.bat" />
                </div>
              </FolderComponent>
              <FolderComponent colorOfFolder="#E5C07B" text="speeds" divClassName="folder" arrowID="speeds-arrow">
                <div>
                  <SYSFile divClassName="file" pClassName="speed-1 file-name" text="100percent.sys" />
                  <SYSFile divClassName="file" pClassName="speed-1 file-name" text="50percent.sys" />
                  <SYSFile divClassName="file" pClassName="speed-1 file-name" text="25percent.sys" />
                </div>
              </FolderComponent>
            </FolderComponent>
            <FolderComponent colorOfFolder="#EF5350" text="legend" divClassName="folder" arrowID="legend-arrow">
              <div>
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="bombNode.gui" type="bomb" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="shortestPathNode.gui" type="shortest-path" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="wallNode.gui" type="wall" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="visitedNode.gui" type="visited" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="unvisitedNode.gui" type="unvisited" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="startNode.gui" type="start-node" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="endNode.gui" type="end-node" />
                <GUIFile divClassName="file" pClassName="legend-1 file-name" text="weightNode.gui" type="weight" />
              </div>
            </FolderComponent>
            <MDFile divClassName="folder-less-file file" pClassName="file-name" text="README.md" />
          </FolderComponent>
        </div>
      </div>
    );
  }
}