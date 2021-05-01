import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Tomas | About</title>
      </Helmet>
      <div className="about column text-left">
        <Fade bottom>
          <div id="intern-about">
            <h2>Hi there!</h2>
            <h3>
              I'm Tomas Rinaldi Scatena, I’m an Argentinean software developer living in Europe focused in{""}
              <span className="text-blue my-tech">Front-end</span> and{" "}
              <span className="text-blue my-tech">Back-end</span> technologies,
              fan of traveling and tasty food.{" "}
            </h3>
            <h3 className="rest-about">
              My journey into programming began learning the basics of HTML, CSS and JavaScript by myself. After writing my first line of code I was hooked. So I started an 800 hours intensive training program based on software development focused on{""}
              <span className="text-blue my-tech">Front-end</span>,{" "}<span className="text-blue my-tech">Back-end</span> and <span className="text-blue my-tech">Database</span> while working in teams and applying <span className="text-blue my-tech">agile methodologies</span>.{" "}
            </h3>
            <h3 className="rest-about">
            I'm looking forward to enhance my knowledge and learn knew technologies by working in a challenging enviroment
              <span className="text-blue my-tech">
               
              </span>
            </h3>

            <div className="my-tools text-blue">
              <h3>
                <ul id="first-tags">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Hooks</li>
                </ul>
              </h3>
              <h3>
                <ul id="second-tags">
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                  <li>NodeJs</li>
                  <li>Express</li>
                </ul>
              </h3>
            </div>
            <div className="column">
              <Link className="text-blue contact-me" to="/contact">
                Let's get in touch
              </Link>
            </div>
          </div>
          <Footer />
        </Fade>
      </div>
    </>
  );
}
