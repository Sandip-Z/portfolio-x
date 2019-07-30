import React, { Component } from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
export default class Hire extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>CONTACT</h1>
                <div className="container">
                <div className="post card">
                <div className="card-content">
                   <i className="Medium material-icons">check_circle</i><span className="padding-left-15">I am available for work.</span>
                   <a href='https://www.pdfhost.net/index.php?Action=Download&File=1f68886d130300464fee18ee7789905d' className="btn right" target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
                </div>
                </div>
                <Contact />
            </div>
        )
    }
}
