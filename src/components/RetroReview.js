import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';

function RetroReview() {
  return (
    <div className='App'>
      <NavBar />
      <p>Retro Review</p>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default RetroReview;