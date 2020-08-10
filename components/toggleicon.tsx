import React from "react";
import styled from "styled-components";

const ToggleIcon = ({ open, setOpen }: any) => {
  return (
    <>
      <StyledIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledIcon>
    </>
  );
};

interface Props {
  open: boolean;
}

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
  z-index: 50;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ open }: Props) => (open ? "2rem" : "2.5rem")};
    height: 0.25rem;
    background: ${({ open }: Props) => (open ? "#f7f7f7" : "#3f3f44")};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: Props) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }: Props) => (open ? "0" : "1")};
      transform: ${({ open }: Props) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }: Props) =>
        open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;

export default ToggleIcon;
