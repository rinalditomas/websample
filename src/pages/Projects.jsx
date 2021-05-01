import React from "react";
import GoTop from "../components/GoTop";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import CRUCE from "../cruce.png"

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Tomas | Works</title>
      </Helmet>
      <Fade bottom>
        <section className="main my-card-project text-left">
          <h1 className="project-title">Cruce</h1>
          <div className="my-project-links">
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://the-social-code.herokuapp.com/"
            >
              Live Web
            </a> */}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/rinalditomas/Cruce"
            >
              Repo
            </a>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="text-blue"
              href="https://github.com/marta8919/the-social-code-server"
            >
              Repo Server
            </a> */}
          </div>

          <p>
            CRUCE is a Full Stack application where companies can handle their products' deliveries in realtime.<br />
            Main features:<ls>
              <ul>Add orders by uploading an XLS file</ul>
              <ul>Register delivery companies and delivery man</ul>
              <ul>See metrics of both delivery companies and delivery man.</ul>
              </ls> 
          </p>
          <div className="my-project-tags text-blue">
            <a href="https://github.com/search?q=%23react">React</a>
            <a href="https://github.com/search?q=%23javascript">JavaScript</a>
            <a href="https://github.com/search?q=%23redux">Redux</a>
            <a href="https://github.com/search?q=%23sequelize">Sequelize</a>
            <a href="https://github.com/search?q=%23Nodejs">Nodejs</a>
            <a href="https://github.com/search?q=%23JWT">JWT</a>
            <a href="https://github.com/search?q=%23socket-io">Socket.IO</a>
            <a href="https://material-ui.com/es/">MaterialUI</a>
          </div>
          <a
            className="my-project-image"
            href="https://the-social-code.herokuapp.com/"
          >
            <img
              src={CRUCE}
              alt="TSCProject"
            />
          </a>
        </section>
        <GoTop className="my-gotop" scrollStepInPx="100" delayInMs="20.50" />
      </Fade>
      <Footer />
    </>
  );
}
