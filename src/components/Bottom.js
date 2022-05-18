import React from 'react';
import "../App.css";

function Bottom() {
  const googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSfGEBMAZqY-2TjH9Br1C7Tb48PuTaG4r7JOSlD8rsrRZKRwVw/viewform";
  return (
    <div className='Bottom'>
      <p style={{ marginTop: 70 }}>
        © 2022 WolfTV is owned by PFISD/Weiss High School | WolfTV website developed by Mark Evola | v0.1 |
        Have feedback? Submit a <a href={googleForm} target="_blank" className='link'>form</a> here.
      </p>
    </div>
  )
}

export default Bottom;