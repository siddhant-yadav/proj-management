import React from 'react'

const ProjectDetails = (props) => {
    
    const id = props.match.params.id;
    
    return (
        <div className = "container project-details section">
            <div className = "card z-depth-0" >
                <div className = "card-content">
                    <span className = "card-title" > Project Title -{id} </span>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div className = "card-action grey lighten-3" >
                    <div>Posted By Siddhant Yadav @ Seniyr</div>
                    <div> 16th June,2021 | 9:23 A.M. </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
