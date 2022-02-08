import React, { useEffect } from "react"
import "./navbar.css"

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
