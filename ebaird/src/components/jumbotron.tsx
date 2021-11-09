import React, { ReactElement, useState } from "react";
import Modal from "./modal";
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
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (event: React.MouseEvent<HTMLDivElement>): void => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="App-header">
        <div className="Header-flex-item">
          {headerText}
          <hr />
          <div className="icon-flex-box">
            <div className="icon-flex-box-item" onClick={toggleModal}>
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
      <Modal isOpen={showModal} onClose={toggleModal} />
    </div>
  );
};

export default Jumbotron;
