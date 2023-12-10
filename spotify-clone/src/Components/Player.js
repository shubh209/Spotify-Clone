import React from "react";
import Footer from "./Footer.js";
import "./Player.css";
import Sidebar from "./Sidebar.js";
import Body from "./Body.js";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;