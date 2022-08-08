import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import MemberImg from './MemberImg';
import Bottom from "./Bottom";
import { CgLogOut } from "react-icons/cg";

function Announcements({ selectedMemberName, setSelectedMemberName }) {
  const members = require("../data/crew.json");

  document.title = "Wolf TV | Announcements";
  return (
    <div className='App'>
      <NavBar />
      <div className='segment-container'>
        <h1 className='title announcements'>Announcements</h1>
        <div className="body">
          <h2 className='subtitle'>What are the announcements?</h2>
          <p>
            The announcements is the main segment of the entire show of Wolf TV. Without it, who knows what the purpose of
            Wolf TV would've been this whole time.
          </p>
          <h2 className='subtitle'>What kind of content is highlighted?</h2>
          <p>
            The type of content displayed during the announcements are mainly just info about the school. Types of info could
            be:
            <ul style={{ backgroundColor: "white", padding: 20, margin: 30, borderRadius: 5}}>
              <li>Information about Classes</li>
              <li>Information about Tests (SAT, PSAT, STAAR, etc)</li>
              <li>Information about Events (Football games, prom, etc)</li>
            </ul>
          </p>
          <h2 className='subtitle'>Who is in charge of developing this segment?</h2>
          <p>The following people who help produce content for this segment are:</p>
          <div className='member-imgs'>
           <MemberImg member={members["2021-2022"][0]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
           <MemberImg member={members["2021-2022"][1]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
           <MemberImg member={members["2021-2022"][3]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
           <MemberImg member={members["2021-2022"][2]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
           <MemberImg member={members["2021-2022"][10]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
           <MemberImg member={members["2021-2022"][7]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
          </div>
        </div>
      </div>
      <Link to="/"><button className='button'><CgLogOut className='btn-icon' /> Return to Home</button></Link>
      <Bottom />
    </div>
  )
}

export default Announcements;