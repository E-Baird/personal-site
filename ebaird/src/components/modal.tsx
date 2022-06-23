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
    Hi, I'm Emily. I'm a full-stack cloud developer based
    in Calgary, Alberta. <br /><br />
    In my day-to-day I work at <a href="https://pureweb.com">Pureweb</a>, where I get to make all kinds of cool stuff using AWS,<br />
    Node, React, and more. I get especially stoked on serverless architectures and noSQL databases. <br /><br />
    Other interests include cybersecurity, film photography, computer science <br />
    pedagogy, language acquisition, and climbing rocks. <br />
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
