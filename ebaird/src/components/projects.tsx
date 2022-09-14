import React from "react";
import ReactDOM from "react-dom";
import ProjectView from "./projectView";
import { Project } from "../util/project";
import { IFadeProps } from "../hooks/fadeHook";

interface IProjectProps {
    isOpen: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
    fadeProps: IFadeProps;
    projectsList: Project[];
}

const Projects = (props: IProjectProps) => {
    const { isOpen, onClose, fadeProps, projectsList } = props;
    const projectsStyle: React.CSSProperties = { ...fadeProps.style };
    if (isOpen) {
        return ReactDOM.createPortal(
            <div
                className="modal"
                style={projectsStyle}
                onClick={onClose}
                onAnimationEnd={fadeProps.onAnimationEnd}
            >
                <h2>Projects</h2>
                <div >
                    {projectsList.map(project => 
                        <ProjectView
                            key={project.title}
                            projectDetails={project}
                        />
                    )}
                </div>
                <div className="buffer-bottom"/>
            </div>,
            document.body
        )
    } else {
        return null;
    }
};

export default Projects