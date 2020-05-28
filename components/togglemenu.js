import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

const ToggleMenu = ({ open }) => {
  return (
    <StyledMenu
      open={open}
      className="absolute z-40 top-0 left-0 bg-dark h-screen"
    >
      <div className="flex flex-col relative ml-2 mr-8 my-16">
        <a href="/index">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/index">Interaction</a>
        <a href="/index">Resume</a>
        <a href="/index">Contact</a>
      </div>
    </StyledMenu>
  );
};

ToggleMenu.propTypes = {
  open: bool.isRequired,
};

const StyledMenu = styled.div`
  width: fit-content;
  transition: all 0.3s ease-in-out;
  left: ${({ open }) => (open ? "0" : "-218px")};
  font-size: 20px;
  letter-spacing: 3px;

  a {
    padding: 10px 10px 10px 7.5px;
    color: #f7f7f7;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #3f3f44;
      background: #fdcb9e;
    }
  }
`;

export default ToggleMenu;
