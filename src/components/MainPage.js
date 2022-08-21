import React, { useEffect, useState } from "react";
import MemberImg from "./MemberImg";
import MessageModal from "./MessageModal";
import NavBar from "./NavBar";
import Bottom from "./Bottom";
import SlideShow from "./SlideShow";
import "../App.css";
import InfoBox from "./InfoBox";
import { BsPlayFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Loading from "./Loading";
import Segment from "./Segment";

// function sort(sortItem) {
//   useEffect(() => {
//     if (sortItem === "latest") {
      
//     } else {

//     }
//   }, [sortItem]);
// }



function MainPage({ selectedMemberName, setSelectedMemberName, infoBoxOpen, setInfoBoxOpen }) {
  const [messageModalShown, setMessageModalShown] = useState(false);
  const [currentVimeoEpData, setCurrentVimeoEpData] = useState({title: "", linkCode: ""});
  const [loadingVideo, setLoadingVideo] = useState(false);

  const members = require("../data/crew.json");

  const vimeoStuff = {
    "token": "a0ca4b46a912abfcac526a6a9a8cb4f8"
  }
  
  const fetchVimeo = async () => {
    setLoadingVideo(true);
    const getVideo = await fetch("https://api.vimeo.com/users/152561840/videos", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + vimeoStuff["token"]
      }
    })
    return await getVideo.json();
    }

  useEffect(() => {
    fetchVimeo().then(data => {
      setCurrentVimeoEpData({title: data.data[0].name, linkCode: data.data[0].link.slice(18)});
      setLoadingVideo(false);
    })
  }, []);

  document.title = "Wolf TV | Home";
  return (
    <div id="top" className="App">
      { <a href='#top'><button id="topBtn" className="button-circle scroll-to-top-btn" title="Scroll back to the top"><IoIosArrowUp /></button></a>}
      <NavBar />
      <div style={{zIndex: 0 }}>
        <div className='intro'>
          <SlideShow />
          <div className='intro-subtitle'>
            <h2 className='intro-title'>Welcome to WOLF TV</h2>
            {/*<h2 className='intro-subtitle-text'>The Official Website of the Wolf Pack</h2>*/}
            <hr />
            <p className='intro-body'>The website for Weiss High School's announcement broadcast show.</p>
            <div className='intro-actions'>
              <a href='https://vimeo.com/user152561840' target="_blank"  rel="noreferrer"><button className='button' title='View Vimeo Page'>WolfTV Vimeo Page</button></a>
              <a href='#segments'><button className='button' title='View Wolf TV Segments'>Segments</button></a>
              <a href='#latest-ep'><button className='button' title='Watch the latest Wolf TV Episode'>Watch Latest Episode</button></a>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 0 }}>
          <h1 className='title'>Latest Wolf TV Episode</h1>
          <p id="latest-ep" className='subtitle'>
            Here you can watch the latest episode of Wolf TV! <br />
            Latest Episode: <strong>Ep {(currentVimeoEpData.title && currentVimeoEpData.linkCode) === "" ? "Fetching..." : currentVimeoEpData.title.slice(10, 14) + " | " + currentVimeoEpData.title.slice(15, 22)}</strong>
          </p>
          <div className='body'>
            <div className='video-bg'>
              {loadingVideo ? <Loading /> : <iframe id="vimeoVideo" title="Wolf TV Vimeo Video" src={`https://player.vimeo.com/video/${currentVimeoEpData.linkCode}`} width="100%" height="100%"  allow="autoplay; fullscreen" allowFullScreen></iframe>}
            </div>
          </div>
        </div>
        <div>
          <h1 id="start" className='title'>What is WOLF TV?</h1>
          <div className='body'>
            <p className='paragraph-txt'>
              WolfTV is an announcement video broadcast at Weiss High School. WolfTV is produced by students in the AV
              (Audio Visual) class. It mainly showcases important information
              for students, teachers, and staff. Often times, segments are included to add some "fun" to the show. The
              show is broadcast daily during the beginning of 3rd/7th period to allow all persons to catch up on what's
              going on around the school.
            </p>
            <a href='#crew'><button className='button-circle' title='Next'><IoIosArrowDown className='arrow-down'/></button></a>
          </div>
        </div>
      </div>
      <div id='crew'>
        <h1 className='title'>Meet the WOLF TV Crew</h1>
        <div className='body'>
          <p>
            The following people have helped bring new announcements and content to WOLF TV:
          </p>
          <div>
            <h2 className='title'>Teacher</h2>
            <div className='member-imgs'>
              <MemberImg member={members["teacher"]} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
            </div>
            {/* <div style={{ float: "right" }}>
              <label>Sort by:</label>
              <select name='sort' id='sort' className='sort-box' onClick={e => { e.stopPropagation(); setMessageModalShown(true)}}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div> */}
            <h2 className='title'>2022-2023</h2>
            <div className='member-imgs'>
              <p><strong>This section isn't available yet. Check back later.</strong><br />Estimated Update/Release: <em>Sometime in September?</em></p>
            </div>
            <h2 className='title'>2021-2022</h2>
            <div className='member-imgs'>
              {
                members['2021-2022'].map(member => {
                  return <MemberImg member={member} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                })
              }
            </div>
            <p>
              These members gave it their all to make the best content possible for Wolf TV. Whether it took minutes, hours, or
              even days, they made sure to continue producing. Thank you!
            </p>
            <a href='#segments'><button className='button-circle' title='Next'><IoIosArrowDown className='arrow-down'/></button></a>
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
              <Segment title="Announcements" color="#b31b1b" path="/announcements">
                The main part of the show: the announcements! This segment contains all the information one Weiss Wolf should
                know when at the school. It contains information about classes, tests, and events.
              </Segment>
              <Segment title="Cyber News" color="#4ff0ff" path="/cyber-news">
                Cyber News is a segment that updates you on the latest on the Cyber World, whether it'd be video games, music,
                or just news in general.
              </Segment>
              <Segment title="Retro Review" color="#f09e4d" path="/retro-review">
                Retro Review is a segment that takes a deep dive into the past of classical TV shows, video games, movies,
                and music.
              </Segment>
              <Segment title="Stories" color="#00ff0d" path="/stories">
                Stories are about people that are experiencing something big.
                Whether it may be something special, traumatic, or heart-warming,
                we want people's stories to be heard!
              </Segment>
            </div>
          </div>
        </div>
        
      </div>
      { messageModalShown && <MessageModal setMsgModalOpen={setMessageModalShown} title="Option Unavailable" msg="This option is currently in development and is not available yet. Come back later!"/> }
      <div className='end'>
        <h2 className='title'>You've scrolled to the end.</h2>
        <a href="https://vimeo.com/user152561840"><button className='button'><BsPlayFill className="button-icon" /> WATCH WOLF TV</button></a>
      </div>
      { infoBoxOpen && <InfoBox setOpen={setInfoBoxOpen} />}
      <Bottom />
    </div>
  );
}

export default MainPage;