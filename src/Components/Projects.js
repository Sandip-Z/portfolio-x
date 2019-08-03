import React from 'react'
import Navbar from './Navbar'
import ProjectsFile from './ProjectsFile'
import ProjectBox from './ProjectBox'

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : ProjectsFile
        }
    }
    render(){
        const template = this.state.projects.map(project=>{
            return(
            <div className="custom-col" key={project.id}>
                <ProjectBox 
                id={project.id} 
                name={project.projectName} 
                desc={project.desc} 
                deploy={project.deploy} 
                storage={project.storage} 
                url={project.URL}/>
            </div>
            )
        })
    return(
        <div>
        <Navbar caller="projects"/>
        <h1>PROJECTS</h1>
        <div className="custom-container">
            <div className="custom-row">
                {template}
            </div>
        </div>
        </div>
    )
}
}
export default Projects