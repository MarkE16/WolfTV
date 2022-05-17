import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className='App-header'>
        <img style={{ paddingTop: 15, transform: "scale(2.5)", height: 50 }} src={require("../assets/wolftv-logo-transparent.png")} />
        <Link to="/"><li>Home</li></Link>
        <a href='#members'><li>Members</li></a>
        <div className='dropdown'>
          <a><li>Segments</li></a>
          <div className="dropdown-content">
            <Link to="/cyber-news">Cyber News</Link>
            <Link to="/retro-review">Retro Review</Link>
            <Link to="/stories">Stories</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar;