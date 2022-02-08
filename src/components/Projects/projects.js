import React, { useEffect } from "react"

import "./projects.css"

function Project() {
  return (
    <>
      <div className="projects" id="Projects">
        <br />
        <br />
        <h1 className="center big">Projects</h1>
        <div className="project">
          <div className="projectImg">
            <a href="https://61b4a139aa4aa5de704a2124--quirky-spence-821975.netlify.app/" target="_blank">
              <img src="../img/React-chat-app.jpg" alt="#" />
            </a>
          </div>
          <div className="projectbox">
            <h2 className="center">React Chat App</h2>
            <p className="define">This is a online Chat application. I created it using Html, CSS, JavaScript and React in frontend. NodeJs, ExpressJs and MongoDB in backend and Socket.io. This is a Chat application allows you to chat with anyone across the world online.</p>
            <a href="https://61b4a139aa4aa5de704a2124--quirky-spence-821975.netlify.app/" target="_blank" className="btn pd">
              view
            </a>
          </div>
        </div>

        <div className="project">
          <div className="projectImg">
            <a href="https://ritesh560.github.io/BRMeal/" target="_blank">
              <img src="../img/BR-Meal.jpg" alt="#" />
            </a>
          </div>
          <div className="projectbox">
            <h2 className="center">BR Meal</h2>
            <p className="define">This is a online Food odering website. It has all the subsections and plenty of food items to order. This project is created by me and one of my friend in Html, CSS and JavaScript.</p>
            <a href="https://ritesh560.github.io/BRMeal/" target="_blank" className="btn pd">
              view
            </a>
          </div>
        </div>

        <div className="project">
          <div className="projectImg">
            <a href="https://ritesh560.github.io/drum_kit/" target="_blank">
              <img src="../img/Drum-kit.jpg" alt="#" />
            </a>
          </div>
          <div className="projectbox">
            <h2 className="center">Drum-kit</h2>
            <p className="define mr">This is a online Drum-kit for refreshing your mind. I created this website test my JavaScript skills. This website contains lots of different tunes which allows us to feel like we are performing a drum.</p>
            <a href="https://ritesh560.github.io/drum_kit/" target="_blank" className="btn pd">
              view
            </a>
          </div>
        </div>

        <div className="project">
          <div className="projectImg">
            <a href="https://ritesh560.github.io/dice-game/" target="_blank">
              <img src="../img/dice-game.jpg" alt="#" />
            </a>
          </div>
          <div className="projectbox">
            <h2 className="center">Dice Game</h2>
            <p className="define">This is a simple Dice Game. I created it using simple JavaScript tools and some of html and css. This tells you a random winner between two players on reloading. Thus create a sense of real dice game.</p>
            <a href="https://ritesh560.github.io/dice-game/" target="_blank" className="btn pd mr">
              view
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
