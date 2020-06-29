import React, { useState, useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import WorkIcon from "@material-ui/icons/Work";
import MobileNav from "../components/mobileNav";
import LargeNav from "../components/largeNav";
import Portfolio from "../components/portfolio";
import Resume from "../components/resume";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PortHeightContext from "../lib/portHeightContext";
import ResHeightContext from "../lib/resHeightContext";

const Index = () => {
  const [portHeight, setPortHeight] = useState(0);
  const [resHeight, setResHeight] = useState(0);

  const resValue = useMemo(() => ({ resHeight, setResHeight }), [
    resHeight,
    setResHeight,
  ]);

  const portValue = useMemo(() => ({ portHeight, setPortHeight }), [
    portHeight,
    setPortHeight,
  ]);

  console.log(resHeight);

  return (
    <>
      <PortHeightContext.Provider value={portValue}>
        <ResHeightContext.Provider value={resValue}>
          <MobileNav />
          <LargeNav />
          <section name="home" className="w-full h-screen min-h-screen">
            <div className="pb-4 w-full h-7/12 bg-teal flex flex-col justify-center items-center">
              <h1 className="font-sans text-center text-dark text-4xl md:text-6xl">
                Front End Developer
              </h1>
              <h3 className="pb-10 md:pb-0 font-sans text-center text-dark italic text-base md:text-xl uppercase">
                Turning ideas into reality
              </h3>
            </div>
            <div className="relative w-full h-5/12 bg-dark flex flex-col justify-center items-center">
              <img
                src="./harry.jpg"
                className="absolute -top-20 rounded-full h-40 md:h-48 w-40 md:w-48"
                alt="Profile picture of Harry with Edinburgh city as the backdrop"
              />
              <h2 className="mt-10 text-2xl md:text-4xl text-center text-cream font-sans">
                Harry Warner
              </h2>
              <h4 className="text-sm md:text-xl text-center text-cream font-sans px-4 lg:px-10 py-2">
                Hello and welcome to my portfolio. I'm a front end developer
                looking to find a team who will push me to my limits and beyond!
                Learning new technologies is my passion and excellence is my
                virtue. I have worked mostly with React based apps.
              </h4>
            </div>
          </section>
          <Portfolio />
          <Resume />
          <Contact />
          <Footer />
        </ResHeightContext.Provider>
      </PortHeightContext.Provider>
    </>
  );
};

const StyledBox = styled.div`
  width: fit-content;

  .about {
    margin: 5px;
    width: 225px;

    @media (max-width: 700px) {
      width: 150px;
    }
  }
`;

const StyledNav = styled.div`
  width: 200px;
  height: 200px;
  margin: 5px;
  background: #3f3f44;
  cursor: pointer;
  color: #f7f7f7;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    font-size: 12.5px;
    font-weight: 800;
  }

  &:hover {
    background: #fdcb9e;
    color: #3f3f44;
  }
`;

export default Index;
