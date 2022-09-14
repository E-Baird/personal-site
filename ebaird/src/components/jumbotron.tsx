import React, { ReactElement } from "react";
import About from "./modal";
import useFade from "../hooks/fadeHook";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsQuestionCircle,
} from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";

interface IJumbotronProps {
  headerText: string;
}

const Jumbotron = (props: IJumbotronProps): ReactElement => {
  const { headerText } = props;
  const [showAbout, setShowAbout, fadeAboutProps] = useFade(false);
  // const [showProjectsModal, setShowProjectsModal, fadeProjectsProps] = useFade(false);

  const aboutText = (
    <div>
      <h2>About</h2>
      Hi, I'm Emily. I'm a full-stack cloud developer based
      in Calgary, Alberta. <br /><br />
      In my day-to-day I work at <a href="https://pureweb.com">Pureweb</a>, where I get to make all kinds of cool stuff using AWS,<br />
      Node, React, and more. I get especially stoked on serverless architectures and noSQL databases. <br /><br />
      Other interests include cybersecurity, film photography, computer science <br />
      pedagogy, language acquisition, and climbing rocks. <br />
    </div>
  );

  const projectsText = (
    <div>
      <h2>Projects</h2>
      Here are some of my favourite professional and personal projects.
      <ul>
        <li>MagpieCTF 2021</li>
        <li>Introduction to Cross-Site Scripting</li>
        <li>This is my Architecture</li>
        <li>Photography</li>
      </ul>
    </div>
  )

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
            <div
              className="icon-flex-box-item"
              // onClick={() => {
              //   setShowProjects(true);
              // }}
            >
              <BiGitBranch />
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
        fadeProps={fadeAboutProps}
        bodyText={aboutText}
      />
      {/* <Modal
        isOpen={showProjectsModal}
        onClose={() => {
          setShowProjectsModal(false);
        }}
        fadeProps={fadeProjectsProps}
        bodyText={projectsText}
      /> */}
    </div>
  );
};

export default Jumbotron;
