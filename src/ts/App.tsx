import * as React from "react";
import HexBoard from "./HexBoard";
import SquareBoard from "./SquareBoard";
import '../css/app.css';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="header">

        </div>
        <div className="content">
          <div className="left-cmd"></div>
          <HexBoard />
          {/* <SquareBoard /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;