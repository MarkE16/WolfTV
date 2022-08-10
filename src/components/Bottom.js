import React from 'react';
import "../App.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
function Bottom() {
  const googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSfGEBMAZqY-2TjH9Br1C7Tb48PuTaG4r7JOSlD8rsrRZKRwVw/viewform";
  return (
    <div className='Bottom'>
      <p style={{ color: "white", textShadow: "1px 4px 5px black" }}>
        © 2022 WolfTV is owned by PFISD/Weiss High School | WolfTV website developed by <a href='https://markevola.herokuapp.com/' title="Oh neat, you're about to go to my website, huh?" className='link' target="_blank" rel='noreferrer'>Mark Evola</a> | v1.0.1 |
        Have feedback? Submit a <a href={googleForm} target="_blank" className='link'>form</a> here.
      </p>
      <a href='https://www.instagram.com/whs.productions/' target="_blank" rel='noreferrer' title='Wolf TV Instagram'><button className='icon'><BsInstagram /></button></a>
      <a href='https://github.com/MarkE16/WolfTV' target="_blank" rel='noreferrer' title='Wolf TV Github'><button className='icon'><BsGithub /></button></a>
    </div>
  )
}

export default Bottom;