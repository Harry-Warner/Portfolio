import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

const DeployProjects = ({ open }) => {
  return (
    <StyledBox
      open={open}
      className="flex items-center justify-between z-0 mx-auto w-40 h-64 bg-dark"
    >
      <div>
        <div></div>
        <h1>Veggiessimo</h1>
        <p>
          Milly and Maria needed a website to expand their Veggiessimo brand.
          They needed complete control over content and a platform for people to
          subscribe to their newsletters.
          <br />
          <br />I approached them with my idea to build them a website from
          scratch with a Sanity headless CMS. They sent me their ideas for web
          design and using React and Next JS I gave them everything they wanted
          and more. Now they are posting recipes and blogs regularly onto an
          awesome website and gaining subscribers without ever having spent a
          penny!
        </p>
        <a href="https://github.com/Harry-Warner/Veggiessimo-repo">GitHub</a>
      </div>
      <div>
        <h1>Martin Ross Pringle</h1>
        <p>
          Photographers portfolio. I used HTML CSS and JavaScript to create a
          website space for Martin to display his photography.
        </p>
        <a href="https://github.com/Harry-Warner/Martin-Ross-Pringle">GitHub</a>
        <div></div>
      </div>
    </StyledBox>
  );
};

DeployProjects.propTypes = {
  open: bool.isRequired,
};

const StyledBox = styled.div`
  height: ${({ open }) => (open ? "500px" : "142px")};
  width: ${({ open }) => (open ? "800px" : "24px")};
  background: ${({ open }) => (open ? "rgba(63, 63, 68, .75)" : "#3f3f44")};
  transition: all 0.7s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(360deg)" : "rotate(90deg)")};

  div {
    height: calc(100% - 30px);
    width: 33%;
    margin: 0 15px;
    background: #3f3f44;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition-delay: 0.3s;

    div {
      height: 50%;
      width: calc(100% - 20px);
      margin: 10px;
      background: #f7f7f7;
    }

    h1,
    p,
    a {
      margin: 10px;
      color: #f7f7f7;
    }

    h1 {
      font-size: 20px;
    }
    p {
      font-size: 12.5px;
      text-align: center;
    }

    a {
      width: 50%;
      height: 7.5%;
      border: 2px solid #fdcb9e;
      border-radius: 5px;
      text-align: center;
      line-height: 31.25px;
      color: #fdcb9e;
      cursor: pointer;

      &:hover {
        background: #fdcb9e;
        color: #3f3f44;
        font-weight: 800;
      }
    }
  }
`;

export default DeployProjects;
