import React, { ReactNode } from "react";
interface IIconBarProps {
  children: ReactNode;
}

export const IconBar = ({ children }: IIconBarProps) => {
  return <div className="flex-box-row">{children}</div>;
};
