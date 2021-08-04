import React from "react";
import "./../../index.css";

const Contact = () => {
  return (
    <section className="contact-container" name="contact" id="contact">
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
        </div>

        {}
        <div className="cards">
          
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/DannyJacome30"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/danny3012/"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/daniela-jácome-a079b0ba/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/dannyjacome30/?hl=es"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
          
          <div className="contact-text">
            <span>Social Media</span>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
