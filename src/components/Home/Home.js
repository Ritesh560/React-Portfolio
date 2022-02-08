import React, { useEffect } from "react"

import "./Home.css"

function Home() {
  return (
    <>
      <div className="body" id="Home">
        <div className="container2">
          <div className="intro">
            <h2>
              Hello, <br />
              My Name is <br />
              <span className="name">Ritesh Kumar</span>
            </h2>
            <a href="./Ritesh's Resume.pdf" download>
              <button className="btn">Resume</button>
            </a>
          </div>

          <div className="profilePic">
            <div className="picbox">
              <img src="img/profilepic2.png" alt="#" />
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Home
