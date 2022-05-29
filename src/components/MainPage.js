import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import MemberImg from './MemberImg';
import MessageModal from './MessageModal';
import NavBar from './NavBar';
import Bottom from "./Bottom";
import "../App.css";
import { Link } from "react-router-dom";
import InfoBox from './InfoBox';

function MainPage({ modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  const [messageModalShown, setMessageModalShown] = useState(false);
  const [currentVimeoEpData, setCurrentVimeoEpData] = useState({title: "", linkCode: ""});

  const members = require("../data/crew.json");

  const vimeoStuff = {
    "token": "a0ca4b46a912abfcac526a6a9a8cb4f8"
  }
  
  const fetchVimeo = () => fetch("https://api.vimeo.com/users/152561840/videos", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + vimeoStuff["token"]
      }
    })
      .then(response => response.json())
      .then(data => setCurrentVimeoEpData({title: data.data[0].name, linkCode: data.data[0].link.slice(18)}) )
      .catch(error => console.log(error))

  const videoRef = React.createRef();

  useEffect(() => {
    fetchVimeo();
    videoRef.current?.load();
  }, [])

  document.title = "Wolf TV | Home";
  return (
    <div id="top" className="App">
      <InfoBox />
      { <a href='#top'><Button id="topBtn" className="button-circle scroll-to-top-btn" title="Scroll back to the top">↑</Button></a>}
      <NavBar />
      <div>
        <div className='intro'>
          {/* <video autoPlay={true} muted={true} loop={true}>
            <source src={require("../assets/videos/max_editing.mp4")} type="video/mp4" />
          </video>
          <video autoPlay={true} muted={true} loop={true}>
            <source src={require("../assets/videos/michael_editing.mp4")} type="video/mp4" />
          </video>
          <video autoPlay={true} muted={true} loop={true}>
            <source src={require("../assets/videos/josh_hodge.MP4")} type="video/mp4" />
          </video> */}
          <div className='intro-subtitle'>
            <h1 className='intro-title'>Welcome to Wolf TV</h1>
            <p className='intro-body'>The website for Weiss High School's announcement broadcast show.</p>
            <a href='https://vimeo.com/user152561840' target="_blank"><button varient="primary" className='button' title='View Vimeo Page'>WolfTV Vimeo Page</button></a>
            <a href='#segments'><button varient="primary" className='button' title='View Wolf TV Segments'>Segments</button></a>
            <a href='#latest-ep'><button varient="primary" className='button' title='Watch the latest Wolf TV Episode'>Watch Latest Episode</button></a>
          </div>
        </div>
        <div>
          <h1 className='title'>Latest Wolf TV Episode</h1>
          <p id="latest-ep" className='subtitle'>
            Here you can watch the latest episode of Wolf TV! <br />
            Latest Episode: <strong>Ep {(currentVimeoEpData.title && currentVimeoEpData.linkCode) === "" ? "Fetching..." : currentVimeoEpData.title.slice(10, 14) + " | " + currentVimeoEpData.title.slice(15, 22)}</strong>
          </p>
          <div className='body'>
            <div className='video-bg'>
              <iframe id="vimeoVideo" src={`https://player.vimeo.com/video/${currentVimeoEpData.linkCode}`} width="740" height="460" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 id="start" className='title'>What is WOLF TV?</h1>
          <div className='body'>
            <p>
              WolfTV is an announcement video broadcast at Weiss High School. WolfTV is produced by students in the AV
              (Audio Visual) class. It mainly showcases important information
              for students, teachers, and staff. Often times, segments are included to add some "fun" to the show. The
              show is broadcasted daily during the beginning of 3rd/7th period to allow all persons to catch up on what's
              going on around the school.
            </p>
            <a href='#members'><Button className='button-circle'>↓</Button></a>
          </div>
        </div>
      </div>
      <div id='members'>
        <h1 className='title'>WOLF TV Members</h1>
        <div className='body'>
          <p>
            The following people help continue bringing new content to WOLF TV: 
          </p>
          <div>
            <h2 className='title'>Teacher</h2>
            <div className='member-imgs'>
              <MemberImg member={members["teacher"]} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            </div>
            <h2 className='title'>2022-2023</h2>
            <div className='member-imgs'>
              <p><strong>This section isn't available yet. Check back later.</strong></p>
            </div>
            <h2 className='title'>2021-2022</h2>
            <div className='member-imgs'>
              {
                members['2021-2022'].map(member => {
                  return <MemberImg member={member} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                })
              }
            </div>
            <p>
              These members gave it their all to make the best content possible for Wolf TV. Whether it took minutes, hours, or
              even days, they made sure to continue producing. Thank you!
            </p>
            <a href='#segments'><Button className='button-circle'>↓</Button></a>
          </div>
        </div>
      </div>
      <div id="segments">
        <h1 className='title'>WOLF TV Segments</h1>
        <div className='body'>
          <p>
            Currently, there are a total of <strong>4 segments</strong> that can appear on Wolf TV. Please, give them a look!
          </p>
          <div>
            <div className='wolftv-segments'>
              <div className='segment'>
                <h3 style={{ color: "#b31b1b", textShadow: "0px 1px 2px black"}}>Announcements</h3>
                <p className='segment-desc'>
                  The main part of the show: the announcements! This segement contains all the information one Weiss Wolf should
                  know when at the school. It contains information about classes, tests, and events.
                </p>
                <Link to="/announcements"><Button className='button'>Learn More</Button></Link>
              </div>
              <div className='segment'>
                <h3 style={{ color: "#4ff0ff", textShadow: "0px 1px 2px black" }}>Cyber News</h3>
                <p className='segment-desc'>
                  Cyber News is a segment that updates you on the latest on the Cyber World, whether it'd be video games, music,
                  or just news in general.
                </p>
                <Link to="/cyber-news"><Button className='button'>Learn More</Button></Link>
              </div>
              <div className='segment'>
                <h3 style={{ color: "#f09e4d", textShadow: "0px 1px 2px black" }}>Retro Review</h3>
                <p className='segment-desc'>
                  Retro Review is a segment that takes a deep dive into the past of classical TV shows, video games, movies,
                  and music. 
                </p>
                <Link to="/retro-review"><Button className='button'>Learn More</Button></Link>
              </div>
              <div className='segment'>
                <h3 style={{ color: "#00ff0d", textShadow: "0px 1px 2px black" }}>Stories</h3>
                <p className='segment-desc'>
                  Stories are about people that are experiencing something big.
                  Whether it may be something special, tramatic, or heart-warming,
                  we want people's stories to be heard!
                </p>
                <Link to="/stories"><Button className='button'>Learn More</Button></Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      { messageModalShown && <MessageModal setMsgModalOpen={setMessageModalShown} title="Option Unavailable" msg="This option currently isn't available yet. Come back later."/> }
      <div className='end'>
        <h1 className='title'>This is the end.</h1>
      </div>
      <p style={{ color: "white" }}>Want More? Head over to the <a href='https://vimeo.com/user152561840' target="_blank" className='link'>Vimeo Page</a> to watch WolfTV!</p>
      <Bottom />
    </div>
  );
}

export default MainPage;