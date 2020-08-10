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

  console.log(resHeight);
  return (
    <section
      name="resume"
      ref={measuredRef}
      className="flex flex-col w-full justify-center items-center pt-12 bg-dark md:h-screen"
    >
      <h1 className="text-4xl text-center text-cream pb-10">Resume</h1>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div className="relative px-3 md:px-0 mx-auto w-full md:w-5/12 flex flex-col text-center text-cream">
          <h1 className="my-4 md:mt-0 text-2xl">About Me</h1>
          <p className="mb-4 md:mb-4 text-base">
            I graduated with a first class BSc in Mathematics with Statistics. I
            felt that many of the professions that such a degree gives access to
            lacked the creative aspect I was looking for. Soon after graduating
            I took time out to travel and to consider which direction my career
            should take. I travelled across South East Asia for 7 months and
            then Australia for a year.
            <br />
            <br />
            While abroad I discussed a number of options with many like minded
            people and over time, the idea of a career in web development
            started to emerge. Immediately after returning to the UK I got to
            work, spending many long hours playing with code on my computer. My
            background in mathematics has nurtured my interest in problem
            solving. Taking these skills and an aspiration to excel in this
            field will, I hope be an asset to any future employer. Check out my
            CV to find out more!
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
