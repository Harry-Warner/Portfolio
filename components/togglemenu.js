import React from "react";
import { Link } from "react-scroll";
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
        <Link
          open={open}
          onClick={() => setOpen(!open)}
          to="portfolio"
          activeClass="active"
          duration={500}
          spy={true}
          smooth={true}
          scroll={true}
        >
          Portfolio
        </Link>
        <Link
          open={open}
          onClick={() => setOpen(!open)}
          to="resume"
          activeClass="active"
          duration={500}
          spy={true}
          smooth={true}
          scroll={true}
        >
          Resume
        </Link>
        <Link
          open={open}
          onClick={() => setOpen(!open)}
          to="contact"
          activeClass="active"
          duration={500}
          spy={true}
          smooth={true}
          scroll={true}
        >
          Contact
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
