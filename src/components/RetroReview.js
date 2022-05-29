import React, { useState, useEffect } from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Bottom from "./Bottom";
import MemberImg from './MemberImg';

function RetroReview({ modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const members = require("../data/crew.json");

  document.title = "Wolf TV | Retro Review";
  return (
    <div className='App'>
      <NavBar />
      <h1 className="title retro-review">Retro Review</h1>
      <div>
        <div className='body'>
          <h2 className='subtitle'>What is Retro Review?</h2>
          <p>
            Retro Review is a segment of Wolf TV that reviews all kinds of things that occurred in the past.
          </p>
          <h2 className='subtitle'>What kind of content is highlighted?</h2>
          <p>
            The type of content displayed during the Retro Review are mainly just things, like the name suggests, from the past. Types of content could
            be:
            <ul style={{ backgroundColor: "white", padding: 20, margin: 30, borderRadius: 5}}>
              <li>Video Games</li>
              <li>Music</li>
              <li>Movies</li>
            </ul>
          </p>
          <h2 className='subtitle'>Who is in charge of Retro Review?</h2>
          <p>The following people are in charge:</p>
          <div className='member-imgs'>
            <MemberImg member={members["2021-2022"][6]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][9]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
          </div>
        </div>
      </div>
      <Link to="/"><button className='button'>[← Return to Home</button></Link>
      <Bottom />
    </div>
  )
}

export default RetroReview;