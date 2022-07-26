import React from "react";
import { Link } from "react-router-dom";

function Segment({ title, color, children, path }) {
  return (
    <div className="segment">
      <h3 style={{ color: color, textShadow: "0 1px 2px black"}}>{title}</h3>
      <hr />
      <p className="segment-desc">
        {children}
      </p>
      <Link to={path}><button className="button">Learn More</button></Link>
    </div>
  );
}

export default Segment;