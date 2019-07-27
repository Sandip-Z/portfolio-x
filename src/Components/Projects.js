import React from 'react'
import Navbar from './Navbar'
import ProjectsFile from './ProjectsFile'

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
                <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.projectName}</td>
                    <td>{project.desc}</td>
                    <td>{project.storage}</td>
                    <td>{project.deploy ? (<a href={project.URL} target="_blank" rel="noopener noreferrer">&#10004;</a>) : (<span>&#x2715;</span>)}</td>
                </tr>
            )
        })
    return(
        <div>
        <Navbar caller="projects"/>
        <h1>PROJECTS</h1>
        <div className="container">
        <table className="centered responsive-table striped">
        <thead>
            <tr>
                <th>Sn</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Storage</th>
                <th>Deployed</th>
            </tr>
        </thead>            
        <tbody>
        {template}
        </tbody>
        </table>
        </div>
        </div>
    )
}
}
export default Projects