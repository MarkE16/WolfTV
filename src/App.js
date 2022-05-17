import './App.css';
import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CyberNews from './segments/CyberNews';
import RetroReview from './segments/RetroReview';
import Stories from './segments/Stories';

// WOLFTV SITE | v0.1

// FIX: ADDING EMBEDDED VIMEO >> CURRENT ISSUES WITH VIMEO API

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/cyber-news" element={ <CyberNews /> } />
          <Route path="/retro-review" element={ <RetroReview /> } />
          <Route path="/stories" element={ <Stories /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
