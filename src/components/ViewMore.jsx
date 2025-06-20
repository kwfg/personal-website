import React from "react";
import { Link } from "react-router-dom";

function ViewMore({ to, text }) {
  return (
    <div className="viewmore-container">
      <Link to={to} className="viewmore-link">
        {text}
      </Link>
    </div>
  );
}

export default ViewMore;
