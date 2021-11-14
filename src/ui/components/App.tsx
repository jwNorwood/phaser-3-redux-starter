import React, { useState, useEffect } from "react";
import Settings from "../scenes/Settings";
import MainMenu from "../scenes/MainMenu";
import Game from "../scenes/Game";
import { store } from "../../system/store"
import { useAppSelector, useAppDispatch } from "../../system/hooks";

const App = () => {
  const scene = useAppSelector(state => state.scenes.activeScene);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "flex-end", 
      width: "100%", 
      position: "absolute" 
      }}>
      {scene === "main" && <MainMenu />}
      {scene === "settings" && <Settings />}
      {scene === "game" && <Game />}
    </div>
  );
};

export default App;