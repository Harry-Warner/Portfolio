import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const LargeNav = () => {
  const [header, setHeader] = useState("bg-teal text-dark");

  useEffect(() => {
    const breakpoint = window.innerHeight * (7 / 12);
    const listenScrollEvent = (event) => {
      if (window.scrollY <= breakpoint) {
        setHeader("bg-teal text-dark");
      } else if (window.scrollY > breakpoint) {
        setHeader("bg-dark text-skin");
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <div
        className={`${header} z-50 uppercase hidden sm:flex fixed top-0 h-12 w-full bg-teal justify-end items-center px-4`}
      >
        <div className="flex items-center h-full">
          <Link
            to="portfolio"
            activeClass="active"
            duration={500}
            spy={true}
            smooth={true}
            scroll={true}
            className="font-bold px-4 cursor-pointer"
          >
            Portfolio
          </Link>
        </div>
        <div className="flex items-center h-full">
          <Link
            to="resume"
            activeClass="active"
            duration={500}
            spy={true}
            smooth={true}
            scroll={true}
            className="font-bold px-4 cursor-pointer"
          >
            Resume
          </Link>
        </div>
        <div className="flex items-center h-full">
          <Link
            to="contact"
            activeClass="active"
            duration={500}
            spy={true}
            smooth={true}
            scroll={true}
            className="font-bold px-4 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
