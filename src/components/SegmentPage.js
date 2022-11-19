import React from "react";
import MemberImg from "./MemberImg";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

function SegmentPage({ title, about, content, contentList, purpose=undefined, members, selectedMemberName, setSelectedMemberName }) {
  const titleSplit = title.split(" ");
  const newCapitalizedTitle = titleSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1) + " ").join("").trimEnd();

  document.title = "WOLF TV | " + newCapitalizedTitle;
  return (
    <div className='App'>
      <div className='segment-page-container'>
        <h1 className={`title ${title === "announcements" ? "announcements" 
                              : title === "cyber news" ? "cyber-news" 
                              : title === "retro review" ? "retro-review" 
                              : title === "pop trivia" ? "pop-trivia" 
                              : title === "stories" ? "stories" : ""}`}>{newCapitalizedTitle}</h1>
        <div className="body">
          <h2 className='subtitle'>What {title === "announcements" ? "are the" : "is"} {newCapitalizedTitle}?</h2>
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
              <h2 className='subtitle'>What is the purpose of {newCapitalizedTitle}?</h2>
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
      <Link to="/"><button className='button'><CgLogOut className='button-icon' /> Return to Home</button></Link>
    </div>
  );
}

export default SegmentPage;