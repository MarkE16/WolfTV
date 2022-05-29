import React from 'react';
import "../App.css";

function Bottom() {
  const googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSfGEBMAZqY-2TjH9Br1C7Tb48PuTaG4r7JOSlD8rsrRZKRwVw/viewform";
  return (
    <div className='Bottom'>
      <p style={{ alignSelf: "center",  color: "white", textShadow: "1px 4px 5px black" }}>
        © 2022 WolfTV is owned by PFISD/Weiss High School | WolfTV website developed by Mark Evola | v0.1 |
        Have feedback? Submit a <a href={googleForm} target="_blank" className='link'>form</a> here.
      </p>
      <a href='https://www.instagram.com/whs.productions/' target="_blank" title='Wolf TV Instagram'><img className='icon' src={require("../assets/icons/instagram.png")}/></a>
      <a href='https://github.com/MarkE16/WolfTV' target="_blank" title='Wolf TV Github'><img className='icon' src={require("../assets/icons/github.png")}/></a>
    </div>
  )
}

export default Bottom;