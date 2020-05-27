import React from "react";
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
      <StyledBox className="flex mx-auto py-2 px-2 rounded-lg bg-darkT">
        <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 h-full">
          <StyledNav>Portfolio</StyledNav>
          <StyledNav>Interaction</StyledNav>
          <StyledNav>Resume</StyledNav>
          <StyledNav>Contact</StyledNav>
        </div>
        <div className="about flex flex-col px-4 rounded-lg bg-dark font-sans">
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
          <div className="py-4 w-full flex justify-around">
            <a href="https://github.com/Harry-Warner">
              <GitHubIcon fontSize="large" style={{ color: "#f7f7f7" }} />
            </a>
            <InstagramIcon fontSize="large" style={{ color: "#f7f7f7" }} />
            <TwitterIcon fontSize="large" style={{ color: "#f7f7f7" }} />
          </div>
        </div>
      </StyledBox>
    </>
  );
};

const StyledBox = styled.div`
  width: fit-content;

  .about {
    margin: 10px;
    width: 225px;

    @media (max-width: 700px) {
      width: 150px;
    }
  }
`;

const StyledNav = styled.a`
  width: 200px;
  height: 200px;
  margin: 10px;
  background: #3f3f44;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f7f7f7;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;

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
