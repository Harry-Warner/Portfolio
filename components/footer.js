import React from "react";

const Footer = () => {
  return (
    <section className="h-64 w-full bg-dark text-creamT flex flex-col items-center justify-center text-center">
      <h3 className="text-base w-11/12 md:w-1/2">
        This site was built with <span className="text-cream">React</span>,{" "}
        <span className="text-cream">Next JS</span>,{" "}
        <span className="text-cream">Tailwind CSS</span>, and
        <span className="text-cream"> Styled-Components</span>. Font in the body
        is Open Sans taken from Google.
      </h3>
      <div className="flex">
        <a
          href="https://github.com/Harry-Warner"
          className="py-1 px-3 bg-blackT shadow-lg m-3 rounded-lg hover:bg-skinT hover:text-dark"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harry-warner-a78554153/"
          className="py-1 px-3 bg-blackT shadow-lg m-3 rounded-lg hover:bg-skinT hover:text-dark"
        >
          LinkedIn
        </a>
      </div>
      <h4 className="uppercase text-sm">
        &#169; 2020 <span className="text-skin">Harry Warner</span>, made in the
        uk
      </h4>
    </section>
  );
};

export default Footer;
