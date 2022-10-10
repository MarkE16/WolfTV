import React  from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../App.css";

function InfoBox({ msg, setOpen }) {

  return (
    <div id="info-box" className='info-box'>
        <p style={{ backgroundColor: "white", borderRadius: "5px" }}>
           🎉The release of the Wolf TV website is here!
           For more info, visit the <a href="https://github.com/MarkE16/WolfTV" target="_blank" className='link'>GitHub page</a>. 🎉
        </p>
        <button id="info-x-btn" className='infobox-x-btn' onClick={() => setOpen(false)}>
          <RiCloseLine />
        </button>
      </div>
  )
}

export default InfoBox;