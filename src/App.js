import React, { Component } from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Game />
      </React.Fragment>
    );
  }
}

export default App;
