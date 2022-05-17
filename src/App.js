import './App.css';
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CyberNews from './components/CyberNews';
import RetroReview from './components/RetroReview';
import Stories from './components/Stories';

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
