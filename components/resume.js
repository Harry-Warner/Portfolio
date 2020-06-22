import React from "react";

const Resume = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center pt-12 bg-dark md:h-screen">
      <h1 className="text-4xl text-center text-cream pb-10">Resume</h1>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <div className="px-3 md:px-0 w-full md:w-5/12 flex flex-col text-center text-cream">
          <div className="md:hidden mx-auto w-11/12 md:w-4/12 h-100 bg-skin" />
          <h1 className="mt-4 md:mt-0 text-2xl">About Me</h1>
          <p className="mb-4 md:mb-4 text-base">
            I graduated with a first class Bachelor of Science degree in
            Mathematics with Statistics but despite my passion for maths I felt
            like there was some creative aspect missing from all of the
            professions that my degree unlocked and as a result I decided to
            travel the world in search for my passion. I travelled across South
            East Asia for 7 months in total and Australia for a full year.
            <br />
            <br />
            Upon my return I decided to embark on a career in web development.
            From when I wrote my first line of code to now I have been glued to
            my computer eager to learn more. My Mathematical background has
            given me fundamental problem solving skills and my eagerness to
            infinitely improve is what will greatly benefit any employer looking
            to hire me. Check out my CV to find out more!
          </p>
        </div>
        <div className="hidden mx-auto md:block w-4/12 h-100 bg-skin" />
      </div>
    </section>
  );
};

export default Resume;
