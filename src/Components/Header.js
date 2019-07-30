import React from 'react'
import Photo from '../Images/logo.png'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <div className="header">
            <h1>PORTFOLIO</h1>
            <div className="container" id="avatar-wrapper">
            <div className="row media-query-row">
                <div className="col s6 media-query-col-6" id="port-info">
                    <img src={Photo} alt="avatar" className="materialboxed avatar center"/>
                </div>
                <div className="col s6 media-query-col-6">
                    <div className="container avatar-content">
                    <h5 className="avatar-title">Hello!</h5>
                    <p className="avatar-subtitle">I am a web developer.</p>
                    <p>I am sandip satyal, a web developer living at Hattiban, Lalitpur and this is my portfolio.I have a keen understanding of vanilla JavaScript and many of its popular and intuitive libraries like  React, JQuery. My knowledge on other  development  utility tool like git version control comes handy during development.  
                    </p>
                    <div className="button-wrapper">
                    <Link className="btn" to="/hire">Hire Me</Link>
                    <Link className="btn right" to="/projects">View Project</Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header