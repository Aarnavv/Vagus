import * as React from "react";
import * as ActionIcons from '../svgIcons/actionButtons';
import '../css/settings.css';

export default class Settings extends React.Component {

  static updateClasses = (id: string, classesRM: string[], classesADD: string[]): void => {
    let element = document.querySelector(id) as HTMLElement;
    element.classList.remove(...classesRM);
    element.classList.add(...classesADD);
  }

  static toggleDisplay = () => {
    let settings = document.querySelector(".settings-outer") as HTMLElement;
    if (settings.style.display === "none") {
      settings.style.display = "block";
      Settings.updateClasses('.left-cmd', [], ['blur-ele']);
      Settings.updateClasses('.hex-board', [], ['blur-ele']);
    } else {
      settings.style.display = "none";
      Settings.updateClasses('.left-cmd', ['blur-ele'], []);
      Settings.updateClasses('.hex-board', ['blur-ele'], []);
    }
  }

  static braceOpen = () => { return '{' }
  static braceClosed = () => { return '}' }

  static renderKey = (keys: string[]) => {
    let keyJSX = []
    keys.forEach(key => {
      keyJSX.push(<div className="keys-div"><span className="blue"> {`"${key}"`}</span>: </div>)
    })
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
                  <div className="keys-master-div"> {Settings.renderKey(['CMD_BG', 'CMD_BORDER', 'PROJECT_BG', 'MOZ_SB_COLOR', 'SB_COLOR', 'SB_COLOR_HOVER', 'SB_COLOR_TRACK', 'FILE_HOVER', 'ALGO_FOLDER', 'NODE_FOLDER', 'MAZE_FOLDER', 'SPEED_FOLDER', 'LEGEND_FOLDER', 'HEX_COLOR', 'HEX_COLOR_HOVER', 'WALL_NODE_COLOR', 'PATH_NODE_COLOR1', 'PATH_NODE_COLOR2', 'PATH_NODE_COLOR3', 'PATH_NODE_COLOR4', 'PATH_NODE_COLOR5', 'VISITED_NODE_COLOR1', 'VISITED_NODE_COLOR2', 'VISITED_NODE_COLOR3', 'VISITED_NODE_COLOR11', 'VISITED_NODE_COLOR21', 'VISITED_NODE_COLOR31'])}</div>
                  <div className="values-master-div"><div className="values-div"><span className="blue">"#_____"</span>,</div></div>
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
