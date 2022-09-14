import React from "react";
import ReactDOM from "react-dom";
import { IFadeProps } from "../hooks/fadeHook";

interface IAboutProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
  fadeProps: IFadeProps;
  bodyText: JSX.Element;
}

const About = (props: IAboutProps) => {
  const { isOpen, onClose, fadeProps, bodyText } = props;
  const aboutStyle: React.CSSProperties = { ...fadeProps.style };
  if (isOpen) {
    return ReactDOM.createPortal(
      <div
        className="modal"
        style={aboutStyle}
        onClick={onClose}
        onAnimationEnd={fadeProps.onAnimationEnd}
      >
        <div className="modal-body">{bodyText}</div>
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default About;
