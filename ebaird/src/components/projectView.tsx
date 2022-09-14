import React, { useState } from "react";
import { Project } from "../util/project";

interface IProjectViewProps {
    projectDetails: Project;
}

const ProjectView = (props: IProjectViewProps) => {
    const projectDetails = props.projectDetails;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className="project"
        >
            <img
                onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
                onClick={(event) => {
                    // suppresses onClick action in parent element
                    event.stopPropagation();
                    window.open(projectDetails.link, "_blank");
                }}
                className="project-image"
                src={projectDetails.imageUrl}
            />
            {showDetails && (
                <div
                    className="project-details"
                >
                    <h3>{projectDetails.title}</h3>
                    <div className="project-description">{projectDetails.description}</div>
                </div>
            )}
        </div>
    )
}

export default ProjectView;

