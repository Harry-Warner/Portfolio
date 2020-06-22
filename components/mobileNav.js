import React, { useState } from "react";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";
import Headroom from "react-headroom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="relative">
        <Headroom className="sm:hidden">
          <div className="h-12 w-full bg-teal" />
          <ToggleIcon open={open} setOpen={setOpen} />
          <ToggleMenu open={open} setOpen={setOpen} />
        </Headroom>
      </nav>
    </>
  );
};

export default MobileNav;
