import React from 'react'

const ProjectBox = ({id, name, url, desc,storage, deploy})=>{
    return (
        <div className="custom-content-project-box">
            <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="post card">
            <div className="card-content">
            <h5 className="project-name">{name}</h5>
            <p className="project-desc">{desc}</p>
            <p className="project-storage">{storage}</p>
            <p className="deploy-bool">Deployed: {deploy ? (<a href={url} target="_blank" rel="noopener noreferrer">&#10004;</a>) : (<span>&#x2715;</span>)}</p>
        </div>
        </div>
        </a>
        </div>
    )
}

export default ProjectBox 