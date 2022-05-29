import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className='App-header'>
      <Link title="Home" to="/"><img className='App-logo' src={require("../assets/wolftv-logo-transparent.png")} alt="Rendering..." /></Link>
        <a href='#members'><li>Members</li></a>
        <div className='dropdown'>
          <a href='#segments'><li>Segments</li></a>
          <div className="dropdown-content">
            <Link to="/announcements">Announcements</Link>
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