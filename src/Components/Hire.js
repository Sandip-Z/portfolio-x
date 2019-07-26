import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
export default class Hire extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>CONTACT</h1>
                <div className="container">
                <div className="post card">
                <div className="card-content">
                <p>I AM AVAILABLE FOR WORK</p>
                <Link to="" className="btn right">download cv</Link>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
