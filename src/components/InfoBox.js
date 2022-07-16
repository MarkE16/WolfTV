import React, { useEffect } from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../App.css";

function InfoBox({ msg, setOpen }) {

  return (
    <div id="info-box" className='info-box'>
        <button id="info-x-btn" className='infobox-x-btn' onClick={() => setOpen(false)}>
          <RiCloseLine />
        </button>
        <p style={{ backgroundColor: "white", padding: 5, borderRadius: "5%" }}>
           🎉The release of the Wolf TV website is here with v1.0!
           For more info, visit the <a href="https://github.com/MarkE16/WolfTV" target="_blank" className='link'>Github page</a>.
        </p>
      </div>
  )
}

export default InfoBox;