import * as React from "react";
import '../css/navbar.css';
import { Arrow, RedFolder, LightRedFolder, NormalFile, ProjectIcon, StopIcon, UndoIcon, PlayIcon, BlueFolder, GreenFolder, YellowFolder, READMEIcon } from "./Components";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="header">
          <div className="title">Vagus</div>
          <div className="description">[“pathfinding algorithms”][“Latin”:”wandering”]</div>
        </div>
        <div className="project">
          <ProjectIcon />
          <p className="project-title">Project</p>
          <div className="buttons">
            <StopIcon />
            <UndoIcon />
            <PlayIcon />
          </div>
        </div>
        <div className="drops">
          <div className="master-drop drop">
            <Arrow />
            <RedFolder />
            <div className="drop-title">Vagus-master<span className="bold-it">[vagus]</span></div>
          </div>
          <div className="master-line line">
            <div className="master-control-drop drop">
              <Arrow />
              <RedFolder />
              <div className="drop-title">master-control-panel</div>
            </div>
            <div className="master-cp-line line">
              <div className="advanced-control-drop drop">
                <Arrow />
                <RedFolder />
                <div className="drop-title">advanced-control-panel</div>
              </div>
              <div className="advanced-cp-line line">
                <div className="algorithm-drop drop">
                  <Arrow />
                  <LightRedFolder />
                  <div className="drop-title">algorithms</div>
                </div>
                <div className="algorithms line">
                  <div className="alg-1 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">aStarSearch.tsx</p>
                  </div>
                  <div className="alg-2 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">djikstrasSearch.tsx</p>
                  </div>
                  <div className="alg-3 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">bellmanFord.tsx</p>
                  </div>
                  <div className="alg-4 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">breadthFirstSearch.tsx</p>
                  </div>
                  <div className="alg-5 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">depthFirstSearch.tsx</p>
                  </div>
                  <div className="alg-6 drop-file">
                    <NormalFile />
                    <p className="alg-name file-name">biDirectionalSearch.tsx</p>
                  </div>
                </div>
                <div className="add-node-drop drop">
                  <Arrow />
                  <BlueFolder />
                  <div className="drop-title">addableNodes</div>
                </div>
                <div className="nodes line">
                  <div className="node-1 drop-file">
                    <NormalFile />
                    <p className="node-name file-name">weightNode.io</p>
                  </div>
                  <div className="node-2 drop-file">
                    <NormalFile />
                    <p className="node-name file-name">bombNode.io</p>
                  </div>
                  <div className="node-3 drop-file">
                    <NormalFile />
                    <p className="node-name file-name">wallNode.io</p>
                  </div>
                </div>
                <div className="mazes-drop drop">
                  <Arrow />
                  <GreenFolder />
                  <div className="drop-title">mazes</div>
                </div>
                <div className="mazes line">
                  <div className="maze-1 drop-file">
                    <NormalFile />
                    <p className="maze-name file-name">gridMaze.bat</p>
                  </div>
                  <div className="maze-2 drop-file">
                    <NormalFile />
                    <p className="maze-name file-name">randomMaze.bat</p>
                  </div>
                  <div className="maze-3 drop-file">
                    <NormalFile />
                    <p className="maze-name file-name">diagonalCutMaze.bat</p>
                  </div>
                </div>
                <div className="speed-drop drop">
                  <Arrow />
                  <YellowFolder />
                  <div className="drop-title">speeds</div>
                </div>
                <div className="speed line">
                  <div className="speed-1 drop-file">
                    <NormalFile />
                    <p className="speed-name file-name">25percent.sys</p>
                  </div>
                  <div className="speed-2 drop-file">
                    <NormalFile />
                    <p className="speed-name file-name">50percent.sys</p>
                  </div>
                  <div className="speed-3 drop-file">
                    <NormalFile />
                    <p className="speed-name file-name">100percent.sys</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="read-me">
              <div className="speed-1 drop-read">
                <READMEIcon />
                <p className="speed-name file-name">legend.md</p>
              </div>
              <div className="speed-1 drop-read">
                <READMEIcon />
                <p className="speed-name file-name">README.md</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}