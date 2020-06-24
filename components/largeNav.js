import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { number } from "prop-types";
import ResHeightContext from "../lib/resHeightContext";
import PortHeightContext from "../lib/portHeightContext";

const LargeNav = () => {
  const { resHeight } = useContext(ResHeightContext);
  const { portHeight } = useContext(PortHeightContext);

  const [header, setHeader] = useState("bg-teal text-dark");
  const [section, setSection] = useState("first");

  useEffect(() => {
    const resume = window.innerHeight + portHeight - 45;
    const contact = window.innerHeight + portHeight + resHeight - 45;
    const breakpoint = window.innerHeight * (7 / 12);
    const listenScrollEvent = () => {
      if (window.scrollY <= breakpoint) {
        setHeader("bg-teal text-dark");
        setSection("first");
      } else if (
        breakpoint < window.scrollY &&
        window.scrollY < window.innerHeight
      ) {
        setHeader("bg-dark text-skin");
        setSection("");
      } else if (
        window.innerHeight <= window.scrollY &&
        window.scrollY < resume
      ) {
        setSection("portfolio");
      } else if (window.scrollY >= resume && window.scrollY < contact) {
        setSection("resume");
      } else if (window.scrollY > contact) {
        setSection("contact");
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      <div
        className={`${header} z-50 uppercase hidden sm:flex fixed top-0 h-12 w-full bg-teal justify-end items-center px-4`}
      >
        <div
          className={`border-solid border-b-2 ${
            section === "portfolio"
              ? "border-skin"
              : section === "first"
              ? "border-teal"
              : "border-dark"
          } flex items-center h-full`}
        >
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
        <div
          className={`border-solid border-b-2 ${
            section === "resume"
              ? "border-skin"
              : section === "first"
              ? "border-teal"
              : "border-dark"
          } flex items-center h-full`}
        >
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
        <div
          className={`border-solid border-b-2 ${
            section === "contact"
              ? "border-skin"
              : section === "first"
              ? "border-teal"
              : "border-dark"
          } flex items-center h-full`}
        >
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

LargeNav.propTypes = {
  height: number.isRequired,
};

export default LargeNav;
