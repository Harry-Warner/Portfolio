import React from "react";
import Link from "next/link";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import WorkIcon from "@material-ui/icons/Work";

const Index = () => {
  return (
    <>
      <h1 className="uppercase text-center font-bold text-3xl md:text-5xl font-sans text-dark my-2 md:my-6">
        Welcome to <br className="md:hidden" /> my portfolio
      </h1>
      <StyledBox className="flex mx-auto py-1 px-1 bg-darkT">
        <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 h-full">
          <StyledNav>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </StyledNav>
          <StyledNav>
            <Link href="/interaction">
              <a>Interaction</a>
            </Link>
          </StyledNav>
          <StyledNav>
            <Link href="/index">
              <a>Resume</a>
            </Link>
          </StyledNav>
          <StyledNav>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </StyledNav>
        </div>
        <div className="about flex flex-col px-4 bg-dark font-sans">
          <img
            className="my-4 w-40 h-40 mx-auto rounded-full"
            src="harry.jpg"
            alt="profile pic"
          />
          <div className="flex items-center py-2">
            <PermIdentityIcon style={{ color: "#f7f7f7" }} />
            <p className="text-base text-cream font-sans ml-1">Harry Warner</p>
          </div>
          <div className="flex items-center py-2">
            <WorkIcon style={{ color: "#f7f7f7" }} />
            <p className="text-base text-cream font-sans ml-1">
              Front end developer
            </p>
          </div>
          <div className="flex items-center py-2">
            <LanguageIcon style={{ color: "#f7f7f7" }} />
            <p className="text-base text-cream font-sans ml-1">React</p>
          </div>
          <a href="https://www.google.co.uk/maps/place/Lancaster/@54.0441576,-2.8361624,13z/data=!3m1!4b1!4m5!3m4!1s0x487b6141d2138751:0xbea089595c0b389!8m2!3d54.0465742!4d-2.8007412?expflags=__data_rollout__Tactile.IsDogfoodRollout__launched__%3Afalse%2C__data_rollout__Tactile.IsFishfoodRollout__launched__%3Afalse">
            <div className="flex items-center py-2">
              <LocationOnIcon style={{ color: "#f7f7f7" }} />
              <p className="text-base text-cream font-sans ml-1">
                Lancaster, UK
              </p>
            </div>
          </a>
          <div className="py-3 px-10 w-full flex justify-around items-center">
            <a href="https://github.com/Harry-Warner">
              <GitHubIcon style={{ color: "#f7f7f7" }} />
            </a>
            <InstagramIcon style={{ color: "#f7f7f7" }} />
            <TwitterIcon style={{ color: "#f7f7f7" }} />
          </div>
        </div>
      </StyledBox>
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
