import React from 'react'
import Facebook from '../Images/001-facebook.png'
import Gitlab from '../Images/gitlab.svg'
import Github from '../Images/003-cat.png'
import Instagram from '../Images/002-instagram.png'

const Info = ()=>{
    return(
        <div className="container">
        <div className="post card">
            <div className="row card-content media-query-row">
                <div className="col s4 avatar-info">
                    <p className="bold">PERSONAL INFORMATION</p>
                    <p>Sandip Satyal</p>
                    <p>Hattiban, Lalitpur</p>
                    <p>sandipsatyal25@gmail.com</p>
                </div>
                <div className="col s4 avatar-skills">
                    <p className="bold">SKILLS</p>
                    <p>
                    <span className="chip">HTML5</span>
                    <span className="chip">CSS3</span>
                    <span className="chip">JavaScript</span>
                    <span className="chip">React</span>
                    <span className="chip">ReactNative</span>
                    <span className="chip">JQuery</span>
                    </p>
                </div>
                <div className="col s4 avatar-social">
                    <p className="bold">SOCIAL MEDIA</p>
                    <ul className="social-list">
                        <li><img src={Github} alt="github" className="social-logo" /></li>
                        <li><img src={Gitlab} alt="gitlab" className="social-logo" /></li>
                        <li><img src={Facebook} alt="facebook" className="social-logo" /></li>
                        <li><img src={Instagram} alt="instagram" className="social-logo" /></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Info