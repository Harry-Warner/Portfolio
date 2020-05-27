import React, { useState } from "react";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ToggleIcon open={open} setOpen={setOpen} />
      <ToggleMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
