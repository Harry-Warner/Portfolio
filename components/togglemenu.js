import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { bool, func } from "prop-types";

const ToggleMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu
      open={open}
      className="absolute z-40 top-0 left-0 bg-dark h-screen"
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center text-center w-full h-full box-border relative"
      >
        <Link href="/index">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/publicplaylist">
          <a>Public Playlist</a>
        </Link>
        <Link href="/index">
          <a>Resume</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </StyledMenu>
  );
};

ToggleMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledMenu = styled.div`
  width: 100%;
  transition: all 0.3s ease-in-out;
  left: ${({ open }) => (open ? "0" : "-100%")};
  font-size: 20px;
  letter-spacing: 3px;

  a {
    width: 100%;
    padding: 1rem;
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
