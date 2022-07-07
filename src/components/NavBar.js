import React, { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import classNames from 'classnames';

function NavBar() {


  // const navBarItems = classNames({
  //   "header-items": true,
  //   "hamburger": document.body.wid < 768
  // })
  return (
    <div id="navBar" style={{ display: "sticky", position: "fixed", top: 0, zIndex: 1, width: "100%" }}>
      <header className='App-header'>
        <div>
          <Link to="/" title="WolfTV Home Page">
            <img className='App-logo' src={require("../assets/wolftv-logo-transparent.png")} alt="Wolf TV" />
          </Link>
        </div>
        <div className="header-items">
          <a href="#members"><li>Members</li></a>
          <div className='dropdown'>
            <a href='#segments'><li>Segments</li></a>
            <div className="dropdown-content" title='View segment'>
              <Link to="/announcements">Announcements</Link>
              <Link to="/cyber-news">Cyber News</Link>
              <Link to="/retro-review">Retro Review</Link>
              <Link to="/stories">Stories</Link>
            </div>
          </div>

        </div>
        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", objectFit: "contain" }}>
          <Link title="Home" to="/"><img className='App-logo' src={require("../assets/wolftv-logo-transparent.png")} alt="Rendering..." /></Link>
        </div>
        <div className="header-items">
          <a href='/#members'><li>Members</li></a>
            <div className='App-header-float-right'>
              <button id="hamburger" className='hamburger' title='More'>
                <GiHamburgerMenu />
              </button>
            </div>
            <div className='dropdown'>
              <a href='#segments'><li>Segments</li></a>
              <div className="dropdown-content" title='View segment'>
                <Link to="/announcements">Announcements</Link>
                <Link to="/cyber-news">Cyber News</Link>
                <Link to="/retro-review">Retro Review</Link>
                <Link to="/stories">Stories</Link>
              </div>
            </div>
        </div> */}
      </header>
    </div>
  )
}

export default NavBar;