import * as React from "react";
import '../css/navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="header">
          <div className="title">Vagus</div>
          <div className="description">[“pathfinding algorithms”][“Latin”:”wandering”]</div>
        </div>
        <div className="project">
          <svg className="svg-img" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg className="svg-img" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="17.1471" fill="#C4C4C4" />
              <rect x="1.14706" y="3.73535" width="19.7059" height="11.9412" fill="#2079AD" stroke="black" />
            </svg>
          </svg>
          <p className="project-title">Project</p>
          <div className="buttons">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="17" height="17" rx="2" fill="#262626" />
              <rect x="5.12134" y="3" width="13" height="3" transform="rotate(45 5.12134 3)" fill="#FF0000" />
              <rect width="13" height="3" transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.1924 3)" fill="#FF0000" />
            </svg>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="17" height="17" rx="2" fill="#262626" />
              <path d="M8.6683 6.66667C6.98534 6.66667 5.46116 7.32667 4.28627 8.4L2 6V12H7.71568L5.41671 9.58667C6.29946 8.81333 7.42355 8.33333 8.6683 8.33333C10.9165 8.33333 12.828 9.87333 13.4949 12L15 11.48C14.1172 8.68667 11.6214 6.66667 8.6683 6.66667Z" fill="#8167AD" />
            </svg>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="17" height="17" rx="2" fill="#262626" />
              <path d="M15 9L4.5 15.0622L4.5 2.93782L15 9Z" fill="#499C54" />
            </svg>
          </div>
        </div>
        <div className="drops">
          <div className="master-drop drop">
            <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
            </svg>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.8 0.538574H1.7C0.765 0.538574 0.00849999 1.2655 0.00849999 2.15396L0 11.8463C0 12.7347 0.765 13.4617 1.7 13.4617H15.3C16.235 13.4617 17 12.7347 17 11.8463V3.76934C17 2.88088 16.235 2.15396 15.3 2.15396H8.5L6.8 0.538574Z" fill="#EF5350" />
            </svg>
            <div className="drop-title">Vagus-master<span className="bold-it">[vagus]</span></div>
          </div>
          <div className="master-line line">
            <div className="master-control-drop drop">
              <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
              </svg>
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.8 0.538574H1.7C0.765 0.538574 0.00849999 1.2655 0.00849999 2.15396L0 11.8463C0 12.7347 0.765 13.4617 1.7 13.4617H15.3C16.235 13.4617 17 12.7347 17 11.8463V3.76934C17 2.88088 16.235 2.15396 15.3 2.15396H8.5L6.8 0.538574Z" fill="#EF5350" />
              </svg>
              <div className="drop-title">master-control-panel</div>
            </div>
            <div className="master-cp-line line">
              <div className="advanced-control-drop drop">
                <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
                </svg>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.8 0.538574H1.7C0.765 0.538574 0.00849999 1.2655 0.00849999 2.15396L0 11.8463C0 12.7347 0.765 13.4617 1.7 13.4617H15.3C16.235 13.4617 17 12.7347 17 11.8463V3.76934C17 2.88088 16.235 2.15396 15.3 2.15396H8.5L6.8 0.538574Z" fill="#EF5350" />
                </svg>
                <div className="drop-title">advanced-control-panel</div>
              </div>
              <div className="advanced-cp-line line">
                <div className="algorithm-drop drop">
                  <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53233 0.538574H1.46766C0.722477 0.538574 0.119552 1.2655 0.119552 2.15396L0.112778 11.8463C0.112778 12.7347 0.722477 13.4617 1.46766 13.4617H12.3068C13.052 13.4617 13.6616 12.7347 13.6616 11.8463V3.76934C13.6616 2.88088 13.052 2.15396 12.3068 2.15396H6.88721L5.53233 0.538574Z" fill="#D5756C" />
                  </svg>
                  <div className="drop-title">algorithms</div>
                </div>
                <div className="algorithms line">
                  <div className="alg-1 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">aStarSearch.tsx</p>
                  </div>
                  <div className="alg-2 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">djikstrasSearch.tsx</p>
                  </div>
                  <div className="alg-3 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">bellmanFord.tsx</p>
                  </div>
                  <div className="alg-4 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">breadthFirstSearch.tsx</p>
                  </div>
                  <div className="alg-5 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">depthFirstSearch.tsx</p>
                  </div>
                  <div className="alg-6 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="alg-name file-name">biDirectionalSearch.tsx</p>
                  </div>
                </div>
                <div className="add-node-drop drop">
                  <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53233 0.538574H1.46766C0.722477 0.538574 0.119552 1.2655 0.119552 2.15396L0.112778 11.8463C0.112778 12.7347 0.722477 13.4617 1.46766 13.4617H12.3068C13.052 13.4617 13.6617 12.7347 13.6617 11.8463V3.76934C13.6617 2.88088 13.052 2.15396 12.3068 2.15396H6.88721L5.53233 0.538574Z" fill="#67BBFF" />
                  </svg>
                  <div className="drop-title">addableNodes</div>
                </div>
                <div className="nodes line">
                  <div className="node-1 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="node-name file-name">weightNode.io</p>
                  </div>
                  <div className="node-2 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="node-name file-name">bombNode.io</p>
                  </div>
                  <div className="node-3 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="node-name file-name">wallNode.io</p>
                  </div>
                </div>
                <div className="mazes-drop drop">
                  <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53233 0.538574H1.46766C0.722477 0.538574 0.119552 1.2655 0.119552 2.15396L0.112778 11.8463C0.112778 12.7347 0.722477 13.4617 1.46766 13.4617H12.3068C13.052 13.4617 13.6616 12.7347 13.6616 11.8463V3.76934C13.6616 2.88088 13.052 2.15396 12.3068 2.15396H6.88721L5.53233 0.538574Z" fill="#4CAF50" />
                  </svg>
                  <div className="drop-title">mazes</div>
                </div>
                <div className="mazes line">
                  <div className="maze-1 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="maze-name file-name">gridMaze.bat</p>
                  </div>
                  <div className="maze-2 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="maze-name file-name">randomMaze.bat</p>
                  </div>
                  <div className="maze-3 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="maze-name file-name">diagonalCutMaze.bat</p>
                  </div>
                </div>
                <div className="speed-drop drop">
                  <svg className="arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.645 0.307617L7 5.44247L12.355 0.307617L14 1.88843L7 8.61531L0 1.88843L1.645 0.307617Z" fill="#959595" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53233 0.538452H1.46766C0.722477 0.538452 0.119552 1.26538 0.119552 2.15384L0.112778 11.8461C0.112778 12.7346 0.722477 13.4615 1.46766 13.4615H12.3068C13.052 13.4615 13.6616 12.7346 13.6616 11.8461V3.76922C13.6616 2.88076 13.052 2.15384 12.3068 2.15384H6.88721L5.53233 0.538452Z" fill="#E5C07B" />
                  </svg>
                  <div className="drop-title">speeds</div>
                </div>
                <div className="speed line">
                  <div className="speed-1 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="speed-name file-name">25percent.sys</p>
                  </div>
                  <div className="speed-2 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="speed-name file-name">50percent.sys</p>
                  </div>
                  <div className="speed-3 drop-file">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2" />
                      <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25" />
                    </svg>

                    <p className="speed-name file-name">100percent.sys</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="read-me">
              <div className="speed-1 drop-read">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7.49996C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.49996C0 3.35782 3.35786 -4.48555e-05 7.5 -4.48555e-05C11.6421 -4.48555e-05 15 3.35782 15 7.49996Z" fill="#0094FF" />
                  <path d="M7.14127 10.1326V5.90257H7.93327V10.1326H7.14127ZM7.53727 4.81357C7.39927 4.81357 7.27927 4.76857 7.17727 4.67857C7.08127 4.58257 7.03327 4.46557 7.03327 4.32757C7.03327 4.18957 7.08127 4.07257 7.17727 3.97657C7.27927 3.88057 7.39927 3.83257 7.53727 3.83257C7.66927 3.83257 7.78627 3.88057 7.88827 3.97657C7.99027 4.07257 8.04127 4.18957 8.04127 4.32757C8.04127 4.46557 7.99027 4.58257 7.88827 4.67857C7.78627 4.76857 7.66927 4.81357 7.53727 4.81357Z" fill="#173B5C" />
                </svg>

                <p className="speed-name file-name">legend.md</p>
              </div>
              <div className="speed-1 drop-read">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7.49996C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.49996C0 3.35782 3.35786 -4.48555e-05 7.5 -4.48555e-05C11.6421 -4.48555e-05 15 3.35782 15 7.49996Z" fill="#0094FF" />
                  <path d="M7.14127 10.1326V5.90257H7.93327V10.1326H7.14127ZM7.53727 4.81357C7.39927 4.81357 7.27927 4.76857 7.17727 4.67857C7.08127 4.58257 7.03327 4.46557 7.03327 4.32757C7.03327 4.18957 7.08127 4.07257 7.17727 3.97657C7.27927 3.88057 7.39927 3.83257 7.53727 3.83257C7.66927 3.83257 7.78627 3.88057 7.88827 3.97657C7.99027 4.07257 8.04127 4.18957 8.04127 4.32757C8.04127 4.46557 7.99027 4.58257 7.88827 4.67857C7.78627 4.76857 7.66927 4.81357 7.53727 4.81357Z" fill="#173B5C" />
                </svg>

                <p className="speed-name file-name">README.md</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}