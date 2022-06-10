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
    console.log(settings.style.display)
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

  render() {
    return (
      <React.Fragment>
        <div className="settings-outer" style={{ display: 'none' }}>
          <div className="settings-inner">
            <div className="settings-buttons">
              <ActionIcons.StopButtonIcon onClick={() => { Settings.toggleDisplay(); }} className="cross-icon" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
