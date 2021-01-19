import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <div className="contact-topline"></div>
        <div className="contact-title">CONTACT</div>
        <div className="contact-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
        <div className="contact-email">AJhanson4535345@gmail.com</div>
        <div className="contact-also">You can also find me here:</div>
        <div className="icon-container">
          <a
            href="https://github.com/ajhanson22227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-3x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ajhanson22227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
