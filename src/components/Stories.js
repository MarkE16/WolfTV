import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Bottom from "./Bottom";
import MemberImg from "./MemberImg";

function Stories({ modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const members = require("../data/crew.json");

  document.title = "Stories | Weiss High School";
  return (
    <div className='App'>
      <NavBar />
      <h1 className='title stories'>Stories</h1>
      <div>
        <div className='body'>
          <h2 className='subtitle'>What is Stories?</h2>
          <p>
            Stories is a segment of Wolf TV that delivers a story about 1 or multiple individuals. Stories allow the individual(s) express 
            their story to the viewers, to allow them to share their story with the world, and to let them be heard.
          </p>
          <h2 className='subtitle'>What kind of content is highlighted?</h2>
          <p>
            The type of content in Stories could literally be anything. Whether the topic is about a person, an event, a place, or 
            anything else, it can qualify as a story.
          </p>
          <h2 className='subtitle'>What is the purpose of Stories?</h2>
          <p>
            The purpose of Stories is that the Wolf TV team wants to get people's stories out there. The Wolf TV team wants to make
            the stories have an impact on the viewers. The team also wants the viewer to be aware that those stories exist. That is part
            of the goal Wolf TV has.
          </p>
          <h2 className='subtitle'>Who is in charge of Stories?</h2>
          <p>The following people are in charge:</p>
          <div className='member-imgs'>
            <MemberImg member={members["2021-2022"][0]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][1]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][3]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][8]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            <MemberImg member={members["2021-2022"][9]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
          </div>
        </div>
      </div>
      <Link to="/"><button className='button'>[← Return to Home</button></Link>
      <Bottom />
    </div>
  )
}

export default Stories;