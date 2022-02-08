import React, { useEffect } from "react"

import "./skills.css"

function Skills() {
  return (
    <>
      <div className="skills" id="Skills">
        <br /> <br />
        <h1 className="center big">My Skills</h1>
        <div className="boxContainer">
          <div className="box">
            <br />
            <div className="icon">
              <i className="fas fa-code"></i>
            </div>
            <h2 className="center">Web development</h2>
            <p className="define center">In development, I know HTML, CSS, JS, REACTJS, EXPRESS.JS, MONGODB and NODEJS. Now I want to gain knowledge from real world problems by internshps. Looking forward brush up my MERN stack skills by contributing in open-source projects and participating in hacathons.</p>
          </div>

          <div className="box">
            <br />
            <div className="icon">
              <img src="../img/cp.png" alt="#" />
            </div>
            <h2 className="center">Competitive Programing</h2>
            <p className="define center">In have a large interest in solving problems of CP. I give regular contests on Hackerrank, CodeChef and Codeforces.I usually code in C++. I am 5* on Hackerrank in c language and 3* on CodeChef.</p>
          </div>

          <div className="box">
            <br />
            <div className="icon">
              <img src="../img/languages.png" alt="#" />
            </div>
            <h2 className="center">Languages</h2>
            <p className="define center">I know C and C++ as programing languages. I learnt Data Structures and algorithums in C language and learning DSA in C++. I used to practice my DSA questions on Leetcode and GeeksForGeeks.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
