import React, { useCallback, useContext } from "react";
import Project from "./project";
import { func } from "prop-types";
import PortHeightContext from "../lib/portHeightContext";

const Portfolio = () => {
  const { setPortHeight } = useContext(PortHeightContext);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setPortHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <section ref={measuredRef} name="portfolio" className="bg-cream">
        <h1 className="text-5xl text-dark text-center font-sans pt-20">
          Portfolio
        </h1>
        <h2 className="text-xl text-dark text-center font-sans w-11/12 lg:w-3/4 mx-auto">
          Below you will find my projects to date. Starting with two freelance
          clients and finishing with a personal project of mine.
        </h2>
        <Project
          left
          project={"veggiessimo"}
          title={"Veggiessimo"}
          github={"https://github.com/Harry-Warner/Veggiessimo-repo"}
          url={"https://veggiessimo.com.au"}
          techStack={
            "React, Next JS, Node JS, Sanity, Tailwind CSS, Styled-Components, GROQ"
          }
          description={`Veggiessimo asked me to create a website for their recipes and posts on sustainability. Using React, Next JS and a Sanity headless CMS I was able to give them everything they needed and more. Through the sign up form I created they are now receiving more subscribers to their monthly emails`}
        />
        <Project
          right
          project={"martin"}
          title={"Martin Ross Pringle"}
          github={"https://github.com/Harry-Warner/Martin-Ross-Pringle"}
          url={"https://martinrosspringle.co.uk"}
          techStack={"HTML, CSS, JavaScript"}
          description={`My first voyage into web development came in the form of Martins portfolio. He had a specific design in mind that revolved around simplicity allowing his photos to stand out. I used vanilla Javascript along with HTML and CSS`}
        />
        <Project
          playlist
          left
          internal
          github={
            "https://github.com/Harry-Warner/Portfolio/blob/master/pages/publicplaylist.js"
          }
          project={"playlist"}
          title={"Music Playlist Project"}
          techStack={"React, Next JS, Node JS, Tailwind CSS, Styled-Components"}
          description={`Creating a database in the route folder I developed the API using Node JS and added utility functions in order to read, create, update and delete songs from a playlist. Available locally, please find the code in the github link.`}
        />
      </section>
    </>
  );
};

Portfolio.propTypes = {
  setPortHeight: func.isRequired,
};

export default Portfolio;
