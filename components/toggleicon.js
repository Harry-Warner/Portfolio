import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const ToggleIcon = ({ open, setOpen }) => {
  return (
    <>
      <StyledIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledIcon>
      <StyledName open={open}>Harry Warner</StyledName>
    </>
  );
};

ToggleIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledName = styled.h1`
  position: absolute;
  z-index: 50;
  transition: left 0.3s ease-in-out;
  left: ${({ open }) => (open ? "3.5rem" : "4.5rem")};
  top: 20px;
  font-size: 17.5px;
  text-transform: uppercase;
  color: ${({ open }) => (open ? "rgba(247, 247, 247, .75)" : "#3f3f44")};
`;

const StyledIcon = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: width 0.3s linear;
  width: 2.5rem;
  height: 2rem;
  background: transparent;
  cursor: pointer;
  z-index: 20;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ open }) => (open ? "2rem" : "2.5rem")};
    height: 0.25rem;
    background: ${({ open }) => (open ? "#f7f7f7" : "#3f3f44")};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;

export default ToggleIcon;
