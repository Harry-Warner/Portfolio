import React, { useState } from "react";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sm:hidden">
        <ToggleIcon open={open} setOpen={setOpen} />
        <ToggleMenu open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default MobileNav;
