import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

const ToggleMenu = ({ open }) => {
  return (
    <StyledMenu open={open} className="absolute top-0 left-0 bg-dark h-screen">
      <div className="flex flex-col relative ml-2 mr-8 my-16">
        <h1>Home</h1>
        <h1>Portfolio</h1>
        <h1>Interaction</h1>
        <h1>Resume</h1>
        <h1>Contact</h1>
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
font-size: 25px;

  h1 {
    padding: 10px 10px 10px 7.5px;
    color: #f7f7f7;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        color: #3f3f44;
        background: #fdcb9e;
    }
`;

export default ToggleMenu;
