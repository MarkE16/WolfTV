import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import MemberImg from './MemberImg';

// WOLFTV SITE | v0.1

function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMemberName, setSelectedMemberName] = useState("");

  const members = {
    "2021-2022": [
      {"michael": require("../src/assets/crew_imgs/michael.jpg")},
      {"max": require("../src/assets/crew_imgs/max.jpg")},
      {"mark": require("../src/assets/crew_imgs/mark.jpg")},
      {"maddie": require("../src/assets/crew_imgs/maddie.jpg")},
      {"lex": require("../src/assets/crew_imgs/lex.jpg")},
      {"josh S": require("../src/assets/crew_imgs/joshS.jpg")},
      {"eli": require("../src/assets/crew_imgs/eli.jpg")},
      {"diego": require("../src/assets/crew_imgs/diego.jpg")},
      {"christian": require("../src/assets/crew_imgs/christian.jpg")}
    ]
  }

  const handleClick = query => {
    if (!isLoading) {
      if (query == "") {
        return alert("Cannot search for an empty string.");
      }
      setIsLoading(true);
      console.log(query);
      setTimeout(() => {
        console.log("Hello!");
        setIsLoading(false);
      }, 3000);
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div id="home" className="App">
      <header className='App-header'>
        <img style={{ paddingTop: 20, transform: "scale(1.3)", height: 50 }} src={require("../src/assets/WeissWolf.png")} />
        <img style={{ paddingTop: 20, transform: "scale(1.3)", height: 50 }} src={require("../src/assets/WolfTVText.png")} />
        <a href='#home'><li>Home</li></a>
        <a href='#members'><li>Members</li></a>
        <a href='#segments'><li>Segments</li></a>
        <input type="text" className='NavBar-input' placeholder='Find Something...' value={search} onChange={(txt) => setSearch(txt.target.value)}></input>
        <Button className='button' disabled={isLoading} onClick={() => handleClick(search)}>Search</Button>
      </header>
      <div className='Intro'>
        <h1 className='title'>What is WOLF TV?</h1>
        <div className='body'>
          <p>
            WolfTV is an announcement video broadcast at Weiss High School. It mainly showcases important information
            for students, teachers, and staff. Often times, segments are included to add some "fun" to the show. The
            show is broadcasted daily during the beginning of 3rd/7th period to allow all persons to catch up on what's
            going on around the school.
          </p>
          <a href='#members'><Button className='button-circle'>↓</Button></a>
        </div>
      </div>
      <div id='members' className='Members'>
        <h1 className='title'>WOLF TV Members</h1>
        <div className='body'>
          <p>
            The following people help continue bringing new content to WOLF TV: 
          </p>
          <div>
            <h2 className='title'>2021-2022</h2>
            <div className='member-imgs'>
              {
                members['2021-2022'].map(member => {
                  return <MemberImg member={member} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/>
                })
              }
            </div>
          </div>
        </div>
        <a href='#home'><Button className="button-circle">↑</Button></a>
      </div>
      <div className='Bottom'>
        <p style={{ marginTop: 70 }}>© 2022 WolfTV is owned by PFISD/Weiss High School | WolfTV website developed by Mark Evola</p>
      </div>
    </div>
  );
}

export default App;
