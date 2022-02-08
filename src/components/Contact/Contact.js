import React, { useEffect, useRef } from "react"
import emailjs from "emailjs-com"

import "./Contact.css"

function Contact() {
  const form = useRef()
  function handelSubmit(e) {
    e.preventDefault()

    emailjs.sendForm("service_70d7wyc", "template_3y819ym", form.current, "user_64vqzuujFojFknhljckP0").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <>
      <h1 className="center big">Contact Info</h1>
      <div className="contact" id="Contact">
        <div className="contact-info">
          <div className="contactbox">
            <img className="contact-img" src="../img/user.png" alt="#" />
            <span>
              Name
              <h3 className="heading">Ritesh Kumar</h3>
            </span>
            <br />
          </div>
          <div className="contactbox">
            <img className="contact-img" src="../img/location.png" alt="#" />
            <span>
              Address
              <h3 className="heading">kurukshetra,Haryana, India</h3>
            </span>
            <br />
          </div>

          <div className="contactbox">
            <img className="contact-img" src="../img/gmail.png" alt="#" />
            <span>
              Email
              <h3 className="heading">singlaritesh007@gmail.com</h3>
            </span>
          </div>
        </div>

        <form ref={form} className="message" onSubmit={handelSubmit}>
          <h2>Message Me</h2>
          <div className="field">
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="email" placeholder="Email" name="user_email" required />
          </div>
          <div className="field">
            <input type="text" placeholder="Subject" name="user_subject" required />
          </div>
          <div className="field textarea">
            <textarea cols="30" rows="3" placeholder="Message..." name="message" required></textarea>
          </div>
          <br />
          <button className="btn submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
