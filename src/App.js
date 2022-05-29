import './App.css';
import React, { useState, useLayoutEffect } from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CyberNews from './components/CyberNews';
import RetroReview from './components/RetroReview';
import Stories from './components/Stories';
import Announcements from './components/Announcements';

// WOLFTV SITE | v0.1

// FIX: ADDING EMBEDDED VIMEO >> CURRENT ISSUES WITH VIMEO API

function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMemberName, setSelectedMemberName] = useState("");

  return (
    <Router>
      <Wrapper>
        <div>
          <Routes>
            <Route path="/" element={ <MainPage modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/> } />
            <Route path="/announcements" element={ <Announcements modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/> } />
            <Route path="/cyber-news" element={ <CyberNews modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/> } />
            <Route path="/retro-review" element={ <RetroReview modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/> } />
            <Route path="/stories" element={ <Stories modalOpen={modalOpen} setModalOpen={setModalOpen} selectedMemberName={selectedMemberName} setSelectedMemberName={setSelectedMemberName}/> } />
          </Routes>
        </div>
      </Wrapper>
    </Router>
  )
}

export default App;
