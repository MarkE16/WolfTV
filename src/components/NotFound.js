import React from "react";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

function NotFound() {
  return (
    <div className="App not-found">
      <div className="not-found-err">
        <img style={{ border: "none", height: "10vh", objectFit: "contain" }} src={require("../assets/wolftv-logo-transparent.png")} alt="Wolf TV" />
      </div>
      <h1 className="title">404</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require("../assets/nowebpage.PNG")} alt="No Webpage" style={{ width: 100, height: 100 }} />
      </div>
      <div style={{ backgroundColor: "white", borderRadius: 5, padding: 20 }}>
        <p className="err-text">
          I'm sure both you and I know that you're not supposed to be here. You might want to make sure you typed in the URL correctly,
          or you went to a link that actually works.
          <hr />
          If you believe this an error, and that there <em>is</em> supposed to be a page here that contains something, then please submit feedback to
          the <a className="body-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfGEBMAZqY-2TjH9Br1C7Tb48PuTaG4r7JOSlD8rsrRZKRwVw/viewform">feedback form</a>.
          Alternatively, you can contact the developer at his <a href="https://marke16.github.io/my-website/" className="body-link">website</a> through the
          form, or through his supporting contact methods.
        </p>
      </div>
      <Link to={-1}><button className='button'><CgLogOut className='button-icon' /> Return Back</button></Link>
    </div>
  );
}

export default NotFound;