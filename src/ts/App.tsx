import React from "react";
import HexBoard from "./HexBoard";
import Navbar from "./Navbar";
import '../css/app.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="content">
            <div className="left-cmd">
              <Navbar />
            </div>
            <HexBoard />
          </div>
        </div>
      </React.Fragment >
    );
  }
}