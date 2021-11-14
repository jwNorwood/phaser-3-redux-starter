import React from "react";
import Settings from "../scenes/Settings";
import MainMenu from "../scenes/MainMenu";
import Game from "../scenes/Game";

const App = () => {
  return (
    <div style={{backgroundColor: "white"}}>
      <MainMenu />
      <Settings />
      <Game />
    </div>
  );
};

export default App;