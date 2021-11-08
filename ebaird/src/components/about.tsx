import React from "react";
import ReactDOM from "react-dom";

interface IAboutProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
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

const About = (props: IAboutProps) => {
  const { isOpen, onClose } = props;
  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="modal" onClick={onClose}>
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

export default About;
