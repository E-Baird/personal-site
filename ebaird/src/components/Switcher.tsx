import React, { useState } from "react";
import { Landing } from "./Landing";
import { About } from "./About";

export const Switcher = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return toggle ? (
    <Landing backButtonBehaviour={() => setToggle(false)} />
  ) : (
    <About backButtonBehaviour={() => setToggle(true)} />
  );
};
