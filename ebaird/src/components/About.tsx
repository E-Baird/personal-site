import React, { ReactElement } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";

interface IAboutProps {
  backButtonBehaviour: () => void;
}

export const About = ({ backButtonBehaviour }: IAboutProps) => {
  const transitUrl = "https://transitapp.com";
  const transitLink: ReactElement = (
    <a href={transitUrl} target="_blank" rel="noopener noreferrer">
      Transit
    </a>
  );

  const webTpLink: ReactElement = (
    <a href={`${transitUrl}/en/trip-planner`} target="_blank" rel="noopener noreferrer">Web Trip Planner</a>
  )

  const zzzaUrl = "https://dylanleclair.github.io/zzza";
  const zzzaLink: ReactElement = (
    <a href={zzzaUrl} target="_blank" rel="noopener noreferrer">
      silly 8-bit video games
    </a>
  );

  const aboutBody: ReactElement = (
    <div>
      <h2>About</h2>
      Hi, I'm Emily. I'm a full-stack developer based in Montréal, Québec, Canada.
      <br />
      <br />
      By day, I work at {transitLink}, where I lead the project in charge of the {webTpLink}, which involves writing Typescript and daydreaming about the S-Bahn. By night, I write {zzzaLink} and also sleep.
      <br />
      <br />
      My other interests include cybersecurity, film photography, computer science pedagogy, language acquisition, and climbing rocks.
      <br />
      <br />
    </div>
  );

  return (
    <div className="modal">
      <div className="centered-container">
        {aboutBody}
        <button className="button" onClick={() => backButtonBehaviour()}>
          <BsArrowReturnLeft />
        </button>
      </div>
    </div>
  );
};
