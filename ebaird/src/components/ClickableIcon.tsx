import React from "react";
import { PropsWithChildren } from "react";

interface IClickableIconProps {
  link?: string;
  clickBehaviour?: () => any;
}

export const ClickableIcon = ({
  link,
  clickBehaviour,
  children,
}: PropsWithChildren<IClickableIconProps>) => {
  return (
    <div
      className="monochrome-icon"
      onClick={clickBehaviour ? () => clickBehaviour() : undefined}
    >
      {link ? (
        <a href={link} style={{ color: "inherit" }}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
