import React from 'react'

import './ProjectSummary.css'

const ProjectSummary = ({project}) =>
{
    return(
        <div className = "card z-depth-1 project-summary">

        <div className = "card-content grey-text text-darken-3 inside-card">
            <span className = "card-title" > {project.id}. {project.title} </span>
            <p> {project.content} </p>
            <p className = "grey-text" >16/6/21</p>
        </div>
    
    </div>
    )
}

export default ProjectSummary;