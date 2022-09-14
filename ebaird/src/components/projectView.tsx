import React, { useState } from "react";
import { Project } from "../util/project";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

interface IProjectViewProps {
    projectDetails: Project;
}

const ProjectView = (props: IProjectViewProps) => {
    const projectDetails = props.projectDetails;
    const [showDetails, setShowDetails] = useState(false);
    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div>
            <BrowserView
                className="project-container"
            >   
            <div
                onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
                className="project"
            >                
                <img
                    src={projectDetails.imageUrl}
                    className="project-image"
                />
                {showDetails && (
                    <div
                        // suppresses onClick action in parent element
                        onClick={(event) => event.stopPropagation()}
                        className="project-details"
                    >
                        <a 
                            href={projectDetails.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3>{projectDetails.title}</h3>
                        </a>
                        <div className="project-description">{projectDetails.description}</div>
                    </div>
                )}
            </div> 
            </BrowserView>
            <MobileView
                className="project"
            >
                <img
                    onClick={(event) => {
                        // suppresses onClick action in parent element
                        event.stopPropagation()
                        toggleShowDetails();
                    }}
                    className="project-image"
                    src={projectDetails.imageUrl}
                />
                {showDetails && (
                    <div
                        className="project-details"
                    >
                        <a 
                            href={projectDetails.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3>{projectDetails.title}</h3>
                        </a>
                        <div className="project-description">{projectDetails.description}</div>
                    </div>
                )}
            </MobileView>
        </div>
    )
}

export default ProjectView;

