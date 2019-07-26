import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navbar = ({caller})=>{
    return(
        <nav class="blue">
            <ul class="right">
                <li><NavLink to="/">Home</NavLink></li>             
                <li><NavLink to="/projects">Projects</NavLink></li>             
                <li><NavLink to="/hire">Contact</NavLink></li>             
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)