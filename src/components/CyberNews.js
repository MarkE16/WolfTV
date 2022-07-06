import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Bottom from "./Bottom";
import MemberImg from './MemberImg';
import { CgLogOut } from 'react-icons/cg';

function CyberNews({ modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const members = require("../data/crew.json");

  document.title = "Wolf TV | Cyber News";
  return (
    <div className='App'>
      <NavBar />
      <div className='segment-container'>
        <h1 className="title cyber-news">Cyber News</h1>
        <div className='body'>
          <h2 className='subtitle'>What is Cyber News?</h2>
          <p>
            Cyber News is a segment of Wolf TV that delivers news that happens in the cyber world AKA the internet.
          </p>
          <h2 className='subtitle'>What kind of content is highlighted?</h2>
          <p>
            The type of content displayed during the Cyber News are mainly just info about the cyber world. Types of info could
            be:
            <ul style={{ backgroundColor: "white", padding: 20, margin: 30, borderRadius: 5}}>
              <li>Video Games</li>
              <li>Music</li>
              <li>Movies</li>
              <li>News in general</li>
            </ul>
          </p>
          <h2 className='subtitle'>Who is in charge of developing this segment?</h2>
          <p>The following people who help produce content for this segment are:</p>
          <div className='member-imgs'>
            <MemberImg member={members["2021-2022"][4]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][3]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][2]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
          </div>
        </div>
      </div>
      <Link to="/"><button className='button'><CgLogOut /> Return to Home</button></Link>
      <Bottom />
    </div>
  )
}

export default CyberNews;