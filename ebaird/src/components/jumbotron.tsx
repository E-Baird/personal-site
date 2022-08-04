import React, { ReactElement } from "react";
import Modal from "./modal";
import useFade from "../hooks/fadeHook";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsQuestionCircle,
} from "react-icons/bs";

interface IJumbotronProps {
  headerText: string;
}

const Jumbotron = (props: IJumbotronProps): ReactElement => {
  const { headerText } = props;
  const [showModal, setShowModal, fadeProps] = useFade(false);

  const aboutText = (
    <div>
      Hi, I'm Emily. I'm a full-stack cloud developer based
      in Calgary, Alberta. <br /><br />
      In my day-to-day I work at <a href="https://pureweb.com">Pureweb</a>, where I get to make all kinds of cool stuff using AWS,<br />
      Node, React, and more. I get especially stoked on serverless architectures and noSQL databases. <br /><br />
      Other interests include cybersecurity, film photography, computer science <br />
      pedagogy, language acquisition, and climbing rocks. <br />
    </div>
  );

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
                setShowModal(true);
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
            <a
              href="mailto:emilyiris.baird@gmail.com"
              >
              <div
                className="icon-flex-box-item"
              >
                <BsEnvelope />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        fadeProps={fadeProps}
        bodyText={aboutText}
      />
    </div>
  );
};

export default Jumbotron;
