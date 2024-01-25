import Navbar from "./navbar";
import "./contact.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Contact = () => {
  var [email, updateEmail] = useState();
  var [message, updateMessage] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    if (email == " " && message == " ") {
      alert("Please ensure all data is filled. ");
    } else {
      updateEmail(" ");
      updateMessage(" ");
      alert("Message has been sent successfully");
    }
  };
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="about-circle"></div>
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} id="mail" />
          <form method="POST">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="text"
              id="email"
              placeholder="enter your email address"
              value={email}
              required
              onChange={(e) => updateEmail(e.target.value)}
            />
            <label htmlFor="message"> Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="enter your message"
              value={message}
              required
              onChange={(e) => updateMessage(e.target.value)}
            ></textarea>
            <button onClick={handleClick}>Send Message</button>
          </form>
        </div>
        <img src="./contact.png" alt="" id="contact-img" />
      </div>
    </>
  );
};
export default Contact;
