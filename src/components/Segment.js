import React from "react";
import { Link } from "react-router-dom";

function Segment({ title, color, children, path, year }) {
  return (
    <div className="segment">
      <h3 className={`segment-title ${color}`}>{title}</h3>
      <p id="timeline">{year}</p>
      <hr />
      <p className="segment-desc">
        {children}
      </p>
      <Link to={path}><button className="button">Learn More</button></Link>
    </div>
  );
}

export default Segment;