import React from "react";
import NavBar from "./NavBar";
import MemberImg from "./MemberImg";
import members from "../data/crew.json";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import Bottom from "./Bottom";

function SegmentPage({ title, about, content, contentList, purpose=undefined, members, selectedMemberName, setSelectedMemberName }) {
  const titleSplit = title.trim().split(" ")
  const titleSplitCap = titleSplit.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1) + " ";
  })

  document.title = "Wolf TV | " + titleSplitCap;
  return (
    <div className='App'>
      <NavBar />
      <div className='segment-container'>
        <h1 className='title announcements'>{titleSplitCap}</h1>
        <div className="body">
          <h2 className='subtitle'>What {title === "announcements" ? "are the" : "is"} {titleSplitCap}?</h2>
          <p>
            {about}
          </p>
          <h2 className='subtitle'>What kind of content is highlighted?</h2>
          <p>
            {content}
            {contentList &&
              <ul style={{ backgroundColor: "white", padding: 20, margin: 30, borderRadius: 5}}>
              {contentList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            }
          </p>
          {purpose && (
            <div>
              <h2 className='subtitle'>What is the purpose of {titleSplitCap}?</h2>
              <p>
                {purpose}
              </p>
            </div>
          )}
          <h2 className='subtitle'>Who is in charge of developing this segment?</h2>
          <p>The following people who help produce content for this segment are:</p>
          <div className='member-imgs'>
            {members.map(member => <MemberImg member={member} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>)}
          </div>
        </div>
      </div>
      <Link to="/"><button className='button'><CgLogOut className='btn-icon' /> Return to Home</button></Link>
      <Bottom />
    </div>
  );
}

export default SegmentPage;