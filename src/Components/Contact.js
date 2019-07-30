import React, { Component } from 'react'

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : null,
            companyName: null,
            email: null,
            message : null
        }
    }
    handleChange = (e)=>{
        const {id, value} = e.target;
        this.setState({
            [id] : value
        })
    }

    handleClick= (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className="container contact-wrapper">
                <div className="post card">
                    <div className="card-content">
                        <div className="container-custom">
                        <h5>Lets Talk!</h5>
                        <p>I would love to hear some feedback on this site, or maybe anything you would like to share with me. I've been told i am a good ears.</p>
                        </div>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                        <input placeholder="First Name" id="name" type="text" className="validate" onChange={this.handleChange}/>
                                        </div>
                                        <div className="input-field col s6">
                                        <input id="companyName" type="text" placeholder="Company Name" className="validate" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" placeholder="Your Valid Email" onChange={this.handleChange}/>
                                    <span className="helper-text" data-error="wrong" data-success="right">Enter Valid Email</span>
                                    </div>
                                </div>
                                <div className="row">
                                        <div className="input-field col s12">
                                        <textarea id="message" className="materialize-textarea" placeholder="Your Message" onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn right" onClick={this.handleClick}/>
                                    </form>
                                </div>
                    </div>
                </div>
            
            </div>
        )
    }
}