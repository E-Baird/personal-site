import React from "react";
import ReactDOM from "react-dom";
import { IFadeProps } from "../hooks/fadeHook";

interface IAboutProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
  fadeProps: IFadeProps;
}

const bodyText = (
  <div>
    Hi, I'm Emily. I'm a full-stack developer and computer science student based
    in Calgary, Alberta. <br />
    Day-to-day I work at PureWeb writing Node, React, and more. <br />
    Other interests include cybersecurity, film photography, computer science
    pedagogy, and language acquisition. <br />
  </div>
);

const Modal = (props: IAboutProps) => {
  const { isOpen, onClose, fadeProps } = props;
  const modalStyle: React.CSSProperties = { ...fadeProps.style };
  if (isOpen) {
    return ReactDOM.createPortal(
      <div
        className="modal"
        style={modalStyle}
        onClick={onClose}
        onAnimationEnd={fadeProps.onAnimationEnd}
      >
        <div className="modal-content">
          <div className="modal-body">{bodyText}</div>
        </div>
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;
