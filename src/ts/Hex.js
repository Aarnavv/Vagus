import * as React from "react";
import '../css/hex.css';
function App() {
    return (React.createElement("div", { className: "hexagon", id: "hexagon", style: styles.hexagon }));
}
const styles = {
    hexagon: {
        backgroundColor: 'white',
    }
    // hexagonbefore, hexagon:after{
    // }
};
export default App;
