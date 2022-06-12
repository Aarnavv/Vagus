import * as React from "react";
import * as ActionIcons from '../svgIcons/actionButtons';
import '../css/settings.css';
import { updateIDClass } from './Utility';

export default class Settings extends React.Component {
  static toggleDisplay = () => {
    let settings = document.querySelector(".settings-outer") as HTMLElement;
    if (settings.style.display === "none") {
      settings.style.display = "block";
      updateIDClass('left-cmd', [], ['blur-ele']);
      updateIDClass('hex-board', [], ['blur-ele']);
    } else {
      settings.style.display = "none";
      updateIDClass('left-cmd', ['blur-ele'], []);
      updateIDClass('hex-board', ['blur-ele'], []);
    }
  }

  static braceOpen = () => { return '{' }
  static braceClosed = () => { return '}' }

  static renderKey = (keys: string[], values: string[]) => {
    let keyJSX = []
    for (let j = 0; j < keys.length; j++) {
      keyJSX.push(
        <div className="key-value" id={`key-value-${j}`} key={j}>
          <div className="keys-div"><span className="blue" id={`key-${j}`}> {`"${keys[j]}"`}</span>: </div>
          <div className="values-div"><span className="blue">"#<span className="blue" id={`value-${j}`} contentEditable="true" suppressContentEditableWarning={true}>{`${values[j]}`}</span>"</span>,</div>
        </div>
      )
    }
    return keyJSX;
  }

  render() {
    return (
      <React.Fragment>
        <div className="settings-outer" style={{ display: 'none' }}>
          <div className="settings-inner">
            <div className="settings-master-header">
              <div className="settings-buttons">
                <ActionIcons.StopButtonIcon onClick={() => { Settings.toggleDisplay(); }} className="cross-icon" />
              </div>
              <div className="settings-header">
                <p>settings.json</p>
              </div>
            </div>
            <div className="settings-content">
              <div className="braces"><p>{Settings.braceOpen()}</p></div>
              <div className="key-value-master-drop">
                <div className="key-value-master">
                  {Settings.renderKey(['CMD_BG', 'CMD_BORDER', 'PROJECT_BG', 'MOZ_SB_COLOR', 'SB_COLOR', 'SB_COLOR_HOVER', 'SB_COLOR_TRACK', 'FILE_HOVER', 'ALGO_FOLDER', 'NODE_FOLDER', 'MAZE_FOLDER', 'SPEED_FOLDER', 'LEGEND_FOLDER', 'HEX_COLOR', 'HEX_COLOR_HOVER', 'WALL_NODE_COLOR', 'PATH_NODE_COLOR1', 'PATH_NODE_COLOR2', 'PATH_NODE_COLOR3', 'PATH_NODE_COLOR4', 'PATH_NODE_COLOR5', 'VISITED_NODE_COLOR1', 'VISITED_NODE_COLOR2', 'VISITED_NODE_COLOR3', 'VISITED_NODE_COLOR11', 'VISITED_NODE_COLOR21', 'VISITED_NODE_COLOR31'], ['21252B', '434B57', '323844', '4b4e5578', 'ffffff42', 'ffffff60', '7f808200', '2C313A', 'D5756C', '67BBFF', '4CAF50', 'E5C07B', 'EF5350', '282C34', '1B8BCD', '484E5B', 'FFA500', 'FF9000', 'FF7B00', 'FF6702', 'FF5000', '175ab5', '1b8bcd', '25c8cf', 'BF4286', 'D15FDA', '85404F'])}
                </div>
              </div>
              <div className="braces"><p>{Settings.braceClosed()}</p></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
