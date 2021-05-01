import React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import blob from '../blob.svg'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tomas | Home</title>
      </Helmet>
      <div className="main home my-landing text-right">
        <Fade bottom>
          <div className="home-background">
            <img
              src={blob}
              alt="home-blob"
            />
          </div>
          <h1>
            Hi. I’m Tomas.<br></br>I'm a software developer.
          </h1>
        </Fade>
      </div>
    </>
  );
}
