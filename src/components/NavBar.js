import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { RiCloseLine } from 'react-icons/ri';
import InfoBox from "./InfoBox";

function NavBar({ infoBoxOpen, setInfoBoxOpen }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation().pathname;


  useEffect(() => {

    if (!hamburgerOpen) {
      document.querySelector("html").style.overflow = "auto";
    } else {
      document.querySelector("html").style.overflow = "hidden";
    }

  }, [hamburgerOpen])
  return (
    <>
      { infoBoxOpen && <InfoBox setOpen={setInfoBoxOpen} />}
      <div id="navBar">
        <header className='App-header'>
          <div>
            <Link to="/" title="WolfTV Home Page">
              <img className='App-logo' src={require("../assets/wolftv-logo-transparent.png")} alt="Wolf TV" />
            </Link>
          </div>
          <div className="header-items">
            {location === "/" && <a href="#crew"><li>Crew</li></a>}
            <a href='#segments'><li><div className='dropdown'>
              Segments
              <div className="dropdown-content" title='View segment'>
                <Link to="../announcements">Announcements</Link>
                <Link to="../cyber-news">Cyber News</Link>
                <Link to="../retro-review">Retro Review</Link>
                <Link to="../pop-trivia">Pop Trivia</Link>
                <Link to="../stories">Stories</Link>
              </div>
            </div></li></a>
            {location === "/" && <a href='#podcast'><li>Podcast</li></a>}
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
              {location === "/" &&
                <a href='#podcast'>
                  <button className="menuItem">Podcast</button>
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
              <Link to="/pop-trivia">
                <button className="menuItem">Pop Trivia</button>
              </Link>
              <Link to="/stories">
                <button className="menuItem">Stories</button>
              </Link>
              <p style={{ fontStyle: "italic", fontSize: 15, textShadow: "0 2px 0 black" }}><AiOutlineQuestion /> Where would you like to navigate to?</p>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default NavBar;