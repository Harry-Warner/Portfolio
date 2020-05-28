import React, { useState } from "react";
import DeployButton from "../components/deploybutton";
import DeployProjects from "../components/deployprojects";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DeployButton open={open} setOpen={setOpen} />
      <DeployProjects open={open} setOpen={setOpen} />
    </>
  );
};

export default Portfolio;
