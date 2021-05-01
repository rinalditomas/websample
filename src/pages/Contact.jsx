import React from "react";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Tomas | Contact</title>
      </Helmet>
      <div className="main text-right my-div-contact">
        <Fade bottom>
          <div id="text-contact">
            <h2>Let's talk!</h2>
            <div className="my-project-links my-contact">
              <a id="contact-email" href="mailto:rinalditomas@gmail.com">
                Send me an email
              </a>
              <a
                id="contact-github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/rinalditomas"
              >
                Github
              </a>
              <a
                id="contact-linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tomas-rinaldi-b4745b86/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}
