import React, { useState, useEffect } from "react";

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
          <h4 className="font-bold px-4">Portfolio</h4>
        </div>
        <div className="flex items-center h-full">
          <h4 className="font-bold px-4">Resume</h4>
        </div>
        <div className="flex items-center h-full">
          <h4 className="font-bold px-4">Contact</h4>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
