import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from './NavBar';

function Stories({ modalOpen, setModalOpen, selectedMemberName, setSelectedMemberName }) {
  return (
    <div className='App'>
      <NavBar />
      <h1 className='title stories'>Stories</h1>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default Stories;