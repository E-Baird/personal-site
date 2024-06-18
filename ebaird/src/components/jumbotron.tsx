import React, { ReactElement, useState } from "react";
import About from "./about";
import {
  BsLinkedin,
  BsGithub,
  BsQuestionCircle,
} from "react-icons/bs";

interface IJumbotronProps {
  headerText: string;
}

const Jumbotron = (props: IJumbotronProps): ReactElement => {
  const { headerText } = props;
  const [showAbout, setShowAbout] = useState<boolean>(false);

  return (
    <div>
      <div className="App-header">
        <div className="Header-flex-item">
          {headerText}
          <hr />
          <div className="icon-flex-box">
            <div
              className="icon-flex-box-item"
              onClick={() => {
                setShowAbout(true);
              }}
            >
              <BsQuestionCircle />
            </div>
            <a
              href="https://www.linkedin.com/in/emily-baird/"
              >
              <div
                className="icon-flex-box-item"
              >
                <BsLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/E-Baird/"
              >
              <div
                className="icon-flex-box-item"
              >
                <BsGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
      <About
        isOpen={showAbout}
        onClose={() => {
          setShowAbout(false);
        }}
      />
    </div>
  );
};

export default Jumbotron;
