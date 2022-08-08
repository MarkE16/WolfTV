import React from 'react'

function Loading() {
  return (
    <div className='App' style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div className='loading'>
        <img src={require("../assets/WeissWolf.png")} loading="lazy" alt="WeissWolf" className='App-logo' style={{ border: "none", float: "none" }}/>
      </div>
    </div>
  )
}

export default Loading