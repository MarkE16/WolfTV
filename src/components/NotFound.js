import React from "react";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

function NotFound() {
  return (
    <div className="App not-found">
      <div className="not-found-err">
        <img style={{ border: "none", height: "12vh", objectFit: "contain" }} src={require("../assets/wolftv-logo-transparent.png")} alt="Wolf TV" />
      </div>
      <h1 className="title">404</h1>
      <h2 className="subtitle">No Existing Page?</h2>
      <div style={{ backgroundColor: "white", borderRadius: 5, padding: 20 }}>
        <p className="err-text">
          I'm sure both you and I know that you're not supposed to be here. You might want to make sure you typed in the URL correctly,
          or you went to a link that actually works.
          <hr />
          If you believe this an error, and that there <em>is</em> supposed to be a page here that contains something, then please contact the developer
          at his <a href="https://marke16.github.io/my-website/" className="body-link">website</a> through the form, or through his supporting contact
          methods.
        </p>
      </div>
      <Link to={-1}><button className='button'><CgLogOut className='button-icon' /> Return Back</button></Link>
    </div>
  );
}

export default NotFound;