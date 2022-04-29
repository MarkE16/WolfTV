import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="App">
      <ul>
        <header className='App-header'>
          <img src={require("../src/assets/WeissWolf.png")} />
          <img src={require("../src/assets/WolfTVText.png")} />
          <a href='#home'><li>Home</li></a>
          <a href='#members'><li>Members</li></a>
          <a href='#more'><li>More</li></a>
          <input type="text" className='NavBar-input' placeholder='Find Something...' value={search} onChange={(txt) => setSearch(txt.target.value)}></input>
          <Button className='button' disabled={isLoading} onClick={() => handleClick(search)}>Search</Button>
        </header>
      </ul>
      <div id='home' className='Intro'>
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
            The following people help continue bringing new content to WOLF TV: [!] NEED PHOTOS AND MEMBER DESC.
          </p>
          <div className='member-imgs'>

          </div>
        </div>
      </div>
      {/* <div className='Bottom'>
        <h2>g</h2>
      </div> */}
    </div>
  );
}

export default App;
