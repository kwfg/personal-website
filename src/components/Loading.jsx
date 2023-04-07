import React from "react";

function Loading() {
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500); // Change the delay time as needed
  });

  return <div id="loader"></div>;
}

export default Loading;
