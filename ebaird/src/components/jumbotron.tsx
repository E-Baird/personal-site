import React, { ReactElement } from "react";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";

interface IJumbotronProps {
  headerText: string;
}

const Jumbotron = (props: IJumbotronProps): ReactElement => {
  const { headerText } = props;
  return (
    <div className="App-header">
      <div className="Header-flex-item">
        {headerText}
        <hr />
        <div className="icon-flex-box">
          <a href="https://www.linkedin.com/in/emily-baird/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/E-Baird/">
            <BsGithub />
          </a>
          <a href="mailto:emilyiris.baird@gmail.com">
            <BsEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
