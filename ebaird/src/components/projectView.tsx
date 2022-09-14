import { useState } from "react";
import { Project } from "../util/project";
import { BrowserView, MobileView } from "react-device-detect";

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
            <BrowserView className="project-container">
                <div 
                    className="project"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${projectDetails.imageUrl})`,
                        backgroundSize: "cover"
                    }}
                    onMouseEnter={() => setShowDetails(true)}
                    onMouseLeave={() => setShowDetails(false)}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {showDetails && (
                        <div 
                            className="project-description"
                            style={{background: "linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75))"}}
                        >
                            <a href={projectDetails.link}><h2>{projectDetails.title}</h2></a>
                            <p>{projectDetails.description}</p>
                        </div>
                    )}

                </div>
            </BrowserView>
            <MobileView className="project-container">
                <div
                    className="project-mobile"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${projectDetails.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleShowDetails();
                    }}
                >
                    {showDetails && (
                        <div
                            className="project-description"
                            style={{background: "linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75))"}}
                        >                        
                            <a href={projectDetails.link}><h2>{projectDetails.title}</h2></a>
                            <p>{projectDetails.description}</p>
                        </div>
                    )}

                </div>
            </MobileView>
        </div>
    )
}

export default ProjectView;

