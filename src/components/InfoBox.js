import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../App.css";

function InfoBox({ msg }) {
  return (
    <div 
      id="info-box" 
      style={{ 
        display: "block", 
        backgroundColor: "#fc384b", 
        fontSize: 20, 
        position: "sticky", 
        width: "100%", 
        boxShadow: "0 10px 20px black",
        bottom: 0 }}
      >
        <button id="info-x-btn" className='infobox-x-btn'>
          <RiCloseLine />
        </button>
        <p style={{ color: "white" }}>
          UPDATE: Even though the website is up and running, it is still NOT complete. The version number can be found at the bottom of the
          website. For more info, visit the <a href="https://github.com/MarkE16/WolfTV" target="_blank" className='link'>Github page</a>.
        </p>
      </div>
  )
}

export default InfoBox;