import React, { ReactElement } from "react";
import About from "./about";
import Projects from "./projects";
import useFade from "../hooks/fadeHook";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsQuestionCircle,
} from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { Project, projectData } from "../util/project";

interface IJumbotronProps {
  headerText: string;
}

const Jumbotron = (props: IJumbotronProps): ReactElement => {
  const { headerText } = props;
  const [showAbout, setShowAbout, fadeAboutProps] = useFade(false);
  const [showProjects, setShowProjects, fadeProjectsProps] = useFade(false);

  const aboutText = (
    <div>
      <h2>About</h2>
      Hi, I'm Emily. I'm a full-stack cloud developer based
      in Montreal.<br /><br />
      I get especially stoked on serverless architectures, distributed and agent-based systems, and noSQL databases. <br /><br />
      My other interests include cybersecurity, film photography, computer science <br />
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
                setShowAbout(true);
              }}
            >
              <BsQuestionCircle />
            </div>
            <div
              className="icon-flex-box-item"
              onClick={() => {
                setShowProjects(true);
              }}
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
      <Projects
        isOpen={showProjects}
        onClose={() => {
          setShowProjects(false);
        }}
        fadeProps={fadeProjectsProps}
        projectsList={projectData}
      />
    </div>
  );
};

export default Jumbotron;
