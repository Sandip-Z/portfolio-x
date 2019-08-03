import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navbar = ({caller})=>{
    return(
        <nav className="teal">
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>             
                <li><NavLink to="/projects">Projects</NavLink></li>             
                <li><NavLink to="/hire">Contact</NavLink></li>             
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)