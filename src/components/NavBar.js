import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { RiCloseLine } from 'react-icons/ri';

function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation().pathname;


  useEffect(() => {
    const menu = document.querySelector('.hamburger-menu');
    const hamburger = document.querySelector(".hamburger");
    const items = document.querySelectorAll(".menuItem");

    if (!hamburgerOpen) {
      document.querySelector("html").style.overflow = "auto";
    } else {
      document.querySelector("html").style.overflow = "hidden";
    }

  }, [hamburgerOpen])
  return (
    <div id="navBar" style={{ display: "sticky", position: "fixed", top: 0, zIndex: 1, width: "100%" }}>
      <header className='App-header'>
        <div>
          <Link to="/" title="WolfTV Home Page">
            <img className='App-logo' src={require("../assets/wolftv-logo-transparent.png")} alt="Wolf TV" />
          </Link>
        </div>
        <div className="header-items">
          {location === "/" && <a href="#crew"><li>Crew</li></a>}
          <a href='#segments'><li>Segments
            <div className='dropdown'>
              ▽
            <div className="dropdown-content" title='View segment'>
              <Link to="../announcements">Announcements</Link>
              <Link to="../cyber-news">Cyber News</Link>
              <Link to="../retro-review">Retro Review</Link>
              <Link to="../stories">Stories</Link>
            </div>
          </div></li></a>
        </div>
        <div>
          <button id="hamburger" className="hamburger" title='More' onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            { !hamburgerOpen ? <GiHamburgerMenu /> : <RiCloseLine /> }
          </button>
          <div className={`hamburger-menu ${hamburgerOpen ? "showingMenu" : ""}`} onClick={e => e.stopPropagation()}>
            <h2 className='subtitle'>Navigate</h2>
            {location === "/" &&
              <a href='#crew'>
                <button className="menuItem">Crew</button>
              </a>}
            <Link to="/announcements">
              <button className="menuItem">Announcements</button>
            </Link>
            <Link to="/cyber-news">
              <button className="menuItem">Cyber News</button>
            </Link>
            <Link to="/retro-review">
              <button className="menuItem">Retro Review</button>
            </Link>
            <Link to="/stories">
              <button className="menuItem">Stories</button>
            </Link>
            <p style={{ fontStyle: "italic", fontSize: 15, textShadow: "0 2px 0 black" }}><AiOutlineQuestion /> Where would you like to navigate to?</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar;