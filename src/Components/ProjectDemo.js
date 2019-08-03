import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import FourOFour from './Demo/FourOFour'
import MapComponents from './MapComponents'
class ProjectDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mapComponents : MapComponents,
            expectedComponent : null,
            LazyComponent : null
        }
    }

    componentDidMount(){
        const importComponent = this.state.mapComponents.filter(ThatComponent => {
            return ThatComponent.name === this.props.match.params.project_id 
        })[0].component;
          
        this.setState({
            expectedComponent : importComponent
        }, ()=>{lazyload(this.state.expectedComponent)})


        const lazyload = async(name)=>{
            try{
                // console.log(name);
                let myLazyLoad = await import('./Demo/' + name);
                // console.log(myLazyLoad)
                if(myLazyLoad){
                    this.setState({
                        LazyComponent : React.createElement(myLazyLoad.default)
                    })
                }
                else{
                    this.setState({
                        LazyComponent : React.createElement(FourOFour.default)
                    })
                }
            } 
            catch(err){
                this.setState({
                    LazyComponent : React.createElement(FourOFour)
                })
            }
        }
    }

    render(){
        // console.log(this.props.match.params.project_id);
    return(
        <div>
        <Navbar />
        <div className="container">
        <div className="custom-breadcrumb">
        <p><Link to="/projects">go back to projects</Link></p>
        </div>
        <div className="post card">
        <div className="card-content">
        <h5 className="demo-project-name">{this.props.match.params.project_id}</h5>
        {this.state.LazyComponent}
        </div>
        </div>
        </div>
        </div>
    )
}
}

export default ProjectDemo