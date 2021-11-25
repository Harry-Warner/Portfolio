import React, { useCallback, useContext, useState } from "react";
import ResHeightContext from "../lib/resHeightContext";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const [scale, setScale] = useState(false);

  const { resHeight, setResHeight } = useContext(ResHeightContext);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setResHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <section
      name="resume"
      ref={measuredRef}
      className="flex flex-col w-full justify-center items-center pt-12 bg-dark md:h-screen"
    >
      <h1 className="text-4xl text-center text-cream pb-10">Resume</h1>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div className="relative px-3 md:px-0 mx-auto w-full md:w-5/12 flex flex-col text-start text-cream">
          <h1 className="my-4 md:mt-0 text-2xl">Industry experience</h1>
          <p className="mb-4 md:mb-4 text-base">
            I began working for <span className="underline text-skin"><a href="https://www.iventis.co.uk/">Iventis</a></span> in September 2020
            as a Graduate Software Engineer. Since then I have been an integral part of the dev team as we build a brand new version of the product, 
            and earlier this year I was promoted to Software Engineer.
            <br />
            <br />
            With the front end going from angular to react and the back end transitioning from monolith to a microservice architecture we are making
            strong progress towards a strong reliable system while continuing to innovate.
            <br />
            <br />
            As a Software Engineer I work on both the front and back end. On the front end React codebase we work with MapBox GL for map 
            integration and interactivity, XState for state management (Axios for API calls) and Jest/Cypress for testing. On the back end, 
            we use C# with Kafka to communicate between micro services and Postgres/Postgis for the database.
          </p>
        </div>
        <div
          onClick={() => setScale(!scale)}
          className={`mx-auto max-w-screen max-h-screen box-border overflow-scroll cursor-pointer hover:shadow-outline ${
            scale ? "absolute" : "relative"
          }`}
        >
          <Document file="cv.pdf">
            {scale ? (
              <Page scale={1} pageNumber={1} />
            ) : (
              <Page scale={0.5} pageNumber={1} />
            )}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;
