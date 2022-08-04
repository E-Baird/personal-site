import React from "react";
import ReactDOM from "react-dom";
import { IFadeProps } from "../hooks/fadeHook";

interface IAboutProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
  fadeProps: IFadeProps;
  bodyText: JSX.Element;
}

const Modal = (props: IAboutProps) => {
  const { isOpen, onClose, fadeProps, bodyText } = props;
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
