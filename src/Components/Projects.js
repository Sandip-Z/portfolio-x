import React from 'react'
import Navbar from './Navbar'

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : [
                {id:1, projectName: 'live-stream-mockup', desc: 'upcoming live streaming application using RTC socket', storage:'https://github.com/Sandip-Z/live-stream-mockup', deploy:true, URL: 'https://mockup-live-stream.herokuapp.com/'},
                {id:2, projectName: 'react blog application', desc:'React blog application using JSONPLACEHOLDER', storage:'https://github.com/Sandip-Z/dummy-react-app', deploy:true, URL:'https://dummy-react-app.herokuapp.com/'},
                {id:3, projectName: 'shadow-following-mouse-movement', desc:'Responsive UI element whose background changes according to mouse movement', storage:'https://gitlab.com/sandipsatyal25/shadow-following-mouse-movement-ui-element', deploy:false, URL:null},
                {id:4, projectName: 'image-comparison', desc:'Compares images on the top of each other', storage:'https://gitlab.com/sandipsatyal25/image-comparison', deploy:false, URL:null},
                {id:5, projectName: 'Firebase-note-application', desc:'Logs event into real-time firebase database', storage:'https://gitlab.com/sandipsatyal25/e-commerce', deploy:false, URL:null},
                {id:6, projectName: 'Calorie_meter_frontend', desc:'Mobile Application which helps its user visualize the calory intake', storage:'https://gitlab.com/ikushum/calorie_meter_frontend', deploy:false, URL:null}
            ]
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