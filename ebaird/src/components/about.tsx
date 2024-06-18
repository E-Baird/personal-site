import React, { ReactElement } from "react";
import { createPortal } from "react-dom";
import { BsArrowReturnLeft } from "react-icons/bs";

interface IAboutProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const About = (props: IAboutProps) => {
  const { isOpen, onClose } = props;

  const transitUrl = "https://transitapp.com/";
  const transitLink: ReactElement = (
    <a 
      href={transitUrl} 
      target="_blank"
      rel="noopener noreferrer"
    >Transit</a>
  )

  const zzzaUrl = "https://zzza.xyz/?file=main.prg";
  const zzzaLink: ReactElement = (
    <a
      href={zzzaUrl}
      target="_blank"
      rel="noopener noreferrer"
    >silly 8-bit video games</a>
  )

  const aboutBody: ReactElement = (
    <div>
      <h2>About</h2>
      Hi, I'm Emily. I'm a full-stack developer based
      in Montréal, Québec, Canada.<br /><br />
      By day, I work at {transitLink}, where I spend most of my time writing Typescript to allow people to buy subway tickets and bus passes on their phones.
      By night, I write {zzzaLink} and also sleep.<br /><br />
      My other interests include cybersecurity, film photography, computer science
      pedagogy, language acquisition, and climbing rocks. <br /> <br />
    </div>
  );

  return (
    isOpen ?
    createPortal(
      <div
        className="modal"
      >
        <div className="about-container">
          {aboutBody}
          <div onClick={onClose}>
            <button className="button">
              <BsArrowReturnLeft />
            </button>
          </div>
        </div>
      </div>,
      document.body
    ) :
    null
  )
};

export default About;
