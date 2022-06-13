import * as React from "react";
import * as ActionIcons from '../svgIcons/actionButtons';
import '../css/settings.css';
import { updateIDClass } from './Utility';
import currentState from "./GlobalState";

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

  static renderKey = (mapper : Map<string, string>): Array<JSX.Element> => {
    let keyJSX : Array<JSX.Element> = [];
    let i : number = 0;
    mapper.forEach((value, key) => {
      keyJSX.push(
        <div className="key-value" id={`key-value-${i}`} key={i}>
          <div className="keys-div"><span className="blue" id={`key-${i}`}> {`"${key}"`}</span>: </div>
          <div className="values-div"><span className="blue">"#<span className="blue" id={`value-${i}`} contentEditable="true" suppressContentEditableWarning={true}>{`${value}`}</span>"</span>,</div>
        </div>
      );
      i++;
    });
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
                  {Settings.renderKey(currentState.cssVariables())}
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
