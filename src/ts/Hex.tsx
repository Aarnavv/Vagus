import * as React from "react";
import * as ReactDOM from "react-dom";
import '../css/hex.css';

function App() {
  return (
    <div className="hexagon" id="hexagon" style={styles.hexagon}>
    </div>
  );
}

const styles = {
  hexagon: {
    backgroundColor: 'white',
  } as React.CSSProperties
  // hexagonbefore, hexagon:after{

  // }
}
export default App;