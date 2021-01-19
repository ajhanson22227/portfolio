import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <div className="contact-topline"></div>
        <div className="contact-title">CONTACT</div>
        <div className="contact-desc">
          If you would like to send me a message, click on the e-mail link below
        </div>
        <div className="contact-email">
          <a href="mailto:ajhanson.dev@gmail.com">ajhanson.dev@gmail.com</a>
        </div>
        <div className="contact-also">You can also find me here:</div>
        <div className="icon-container">
          <a
            href="https://github.com/ajhanson22227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ajhanson22227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
