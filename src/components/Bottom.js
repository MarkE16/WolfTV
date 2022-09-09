import React, { useEffect, useState } from "react";
import "../App.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const getLatest = async (sig) => {
  try {
    const res = await fetch(`https://api.github.com/repos/MarkE16/WolfTV/releases`, {
      method: "GET",
      signal: sig,
      headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_GITHUB_TOKEN
      }
    })
    return res.json()
  } catch (e) {
    return e.message;
  }
}


function Bottom() {
  const googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSfGEBMAZqY-2TjH9Br1C7Tb48PuTaG4r7JOSlD8rsrRZKRwVw/viewform";
  const [version, setVersion] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("version")) {
      const controller = new AbortController();
      const signal = controller.signal;
      getLatest(signal).then(data => {
        console.log(data);
        setVersion(data[0].tag_name);
        sessionStorage.setItem("version", data[0].tag_name);
      })
      return () => controller.abort();
    }
    setVersion(sessionStorage.getItem("version"));
  }, [])

  return (
    <div className='Bottom'>
      <p style={{ color: "white", textShadow: "1px 4px 5px black" }}>
        © 2022 WOLF TV is owned by PFISD/Weiss High School | WOLF TV website developed by <a href='https://marke16.github.io/my-website/' title="Oh neat, you're about to go to my website, huh?" className='link' target="_blank" rel='noreferrer'>Mark Evola</a> | {version} |
        Have feedback? Submit a <a href={googleForm} target="_blank" className='link'>form</a> here.
      </p>
      <div className="socials">
        <a href='https://www.instagram.com/whs.productions/' target="_blank" rel='noreferrer' title='Wolf TV Instagram'><button className='icon'><BsInstagram /></button></a>
        <a href='https://github.com/MarkE16/WolfTV' target="_blank" rel='noreferrer' title='Wolf TV GitHub'><button className='icon'><BsGithub /></button></a>
      </div>
      <div>
        <Link to="/">
          <img className="footer-logo" src={require("../assets/wolftv-logo-transparent.png")} alt="WeissWolf" />
        </Link>
      </div>
    </div>
  )
}

export default Bottom;