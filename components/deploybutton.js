import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const DeployButton = ({ open, setOpen }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <StyledButton open={open} onClick={() => setOpen(!open)}>
        <h2 className="font-sans uppercase font-bold tracking-wide">
          Deploy Projects
        </h2>
        <h3 className="font-sans uppercase font-bold tracking-widest">
          Hide Projects
        </h3>
      </StyledButton>
    </div>
  );
};

DeployButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledButton = styled.div`
  display: flex;
  width: fit-content;
  padding: 10px;
  background: ${({ open }) => (open ? "#fdcb9e" : "#3f3f44")};
  border: 2px solid #3f3f44;
  border-radius: 5px;
  position: relative;
  z-index: 50;
  cursor: pointer;
  color: ${({ open }) => (open ? "#3f3f44" : "#fdcb9e")};

  &:hover {
    background: #fdcb9e;
    color: #3f3f44;
    font-size: ${({ open }) => (open ? "15px" : "0")};
  }

  h2 {
    transition: font-size 0.3s ease-in-out;
    font-size: ${({ open }) => (open ? "0" : "20px")};
  }

  h3 {
    transition: font-size 0.3s ease-in-out;
    font-size: ${({ open }) => (open ? "10px" : "0")};
  }
`;

export default DeployButton;
