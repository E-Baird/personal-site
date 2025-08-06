import React from "react";
import { BsLinkedin, BsGithub, BsQuestionCircle, BsPen } from "react-icons/bs";
import { ClickableIcon } from "./ClickableIcon";
import { IconBar } from "./IconBar";

interface ILandingProps {
  backButtonBehaviour: () => void;
}

export const Landing = ({ backButtonBehaviour }: ILandingProps) => {
  const title = "EMILY BAIRD";

  return (
    <div className="header">
      <div className="fit-content-width">
        {title}
        <hr />
        <IconBar>
          <ClickableIcon clickBehaviour={() => backButtonBehaviour()}>
            <BsQuestionCircle />
          </ClickableIcon>
          <ClickableIcon link="https://github.com/E-Baird/">
            <BsGithub />
          </ClickableIcon>
          <ClickableIcon link="https://blog.ebaird.ca">
            <BsPen />
          </ClickableIcon>
          <ClickableIcon link="https://www.linkedin.com/in/emily-baird/">
            <BsLinkedin />
          </ClickableIcon>
        </IconBar>
      </div>
    </div>
  );
};
