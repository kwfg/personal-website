import React from "react";
import NotFoundImg from "../images/pixel_404.png";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
      <img src={NotFoundImg} alt="404 not found" style={{ maxWidth: "700px", height: "auto",}} />
      <h2>Oops! The page you are looking for does not exist.</h2>
    </div>
  );
}

export default NotFound;
