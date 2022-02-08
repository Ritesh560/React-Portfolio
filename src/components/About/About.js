import React, { useEffect } from "react"

import "./About.css"

function About() {
  return (
    <>
      <div id="About">
        <br />
        <br />
        <br />
        <div className="about">
          <div className="about-me">
            <h1 className="center big">About Me</h1>
            <p className="define para">My name is Ritesh Kumar. I was born and bought up in Kurukshetra, Haryana. My father is a ShopKeeper and my mother is a Home Maker. Currently I pursuing BTech in IT branch from Indian Institute of Information Technology Sonepat (IIIT Sonepat), Haryana.</p>
          </div>

          <div className="pic">
            <img src="../img/pic3.jpeg" alt="#" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
