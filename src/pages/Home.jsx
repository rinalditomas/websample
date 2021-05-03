import React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

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
              src="https://res.cloudinary.com/dssllfoin/image/upload/v1620070230/blob_zlfn7u.svg"
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
