import React, { useCallback, useContext } from "react";
import { func } from "prop-types";
import ResHeightContext from "../lib/resHeightContext";

const Resume = () => {
  const { resHeight, setResHeight } = useContext(ResHeightContext);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setResHeight(node.getBoundingClientRect().height);
      console.log(node.getBoundingClientRect().height);
    }
  }, []);

  console.log(resHeight);
  return (
    <section
      ref={measuredRef}
      name="resume"
      className="flex flex-col w-full justify-center items-center pt-12 bg-dark md:h-screen"
    >
      <h1 className="text-4xl text-center text-cream pb-10">Resume</h1>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div className="px-3 md:px-0 mx-auto w-full md:w-5/12 flex flex-col text-center text-cream">
          <div className="md:hidden mx-auto w-11/12 md:w-4/12 h-100 bg-skin" />
          <h1 className="my-4 md:mt-0 text-2xl">About Me</h1>
          <p className="mb-4 md:mb-4 text-base">
            I graduated with a first class Bachelor of Science degree in
            Mathematics with Statistics and despite that passion I had for maths
            I could feel a creative aspect missing from the professions that
            follow a maths degree. As a result I decided to travel the world in
            a bid to seek what drives me. I travelled across South East Asia for
            7 months and Australia for a year.
            <br />
            <br />
            While abroad I couldnt get the idea of a career in web development
            out of my mind. Immediately after returning to the UK I got to work.
            From when I wrote my first line of code to now I have been glued to
            my computer eager to learn more. My Mathematical background - which
            has given me fundamental problem solving skills - and my eagerness
            to infinitely improve is what will greatly benefit any employer
            looking to hire me. Check out my CV to find out more!
          </p>
        </div>
        <div className="hidden mx-auto md:block w-4/12 h-100 bg-skin" />
      </div>
    </section>
  );
};

Resume.propTypes = {
  setResHeight: func.isRequired,
};

export default Resume;
