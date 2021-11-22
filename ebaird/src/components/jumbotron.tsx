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
              className="icon-flex-box-item"
              href="https://www.linkedin.com/in/emily-baird/"
            >
              <BsLinkedin />
            </a>
            <a
              className="icon-flex-box-item"
              href="https://github.com/E-Baird/"
            >
              <BsGithub />
            </a>
            <a
              className="icon-flex-box-item"
              href="mailto:emilyiris.baird@gmail.com"
            >
              <BsEnvelope />
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
      />
    </div>
  );
};

export default Jumbotron;
