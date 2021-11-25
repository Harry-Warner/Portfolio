import React, { useCallback, useContext } from "react";
import Project from "./project";
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
      <section name="portfolio" ref={measuredRef} className="bg-cream">
        <h1 className="text-5xl text-dark text-center font-sans pt-20">
          Portfolio
        </h1>
        <h2 className="text-xl text-dark text-center font-sans w-11/12 lg:w-3/4 mx-auto">
          Below you will see a few projects I carried out before starting work at Iventis
        </h2>
        <Project
          left
          project={"veggiessimo"}
          title={"Veggiessimo"}
          github={"https://github.com/Harry-Warner/Veggiessimo-repo"}
          url={"https://veggiessimo.com.au"}
          techStack={
            "React, Next.js, Sanity, Tailwind CSS, Styled-Components, GROQ"
          }
          description={`Veggiessimo asked me to create a website for their recipes and posts on sustainability. Using React, Next JS and a Sanity headless CMS I was able to give them everything they needed and more. Through the sign up form I created they are now receiving more subscribers to their monthly emails.`}
        />
        <Project
          right
          project={"spotify-data"}
          title={"Spotify Data"}
          github={"https://github.com/Harry-Warner/spotifydata"}
          url={"https://spotifydata.vercel.app/"}
          techStack={"React, Next.js, Spotify API"}
          description={`Using the Spotify API, I enable users to see their latest listening habbits as well as their old.`}
        />
        <Project
          playlist
          left
          internal
          url={"/publicplaylist"}
          github={"https://github.com/Harry-Warner/Portfolio"}
          project={"playlist"}
          title={"Music Playlist Project"}
          techStack={
            "React, Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS, Styled-Components"
          }
          description={`Creating a database with MongoDB, I connected the API using Node.js with API endpoints to read, create, update and delete songs from a playlist.`}
        />
      </section>
    </>
  );
};

export default Portfolio;
