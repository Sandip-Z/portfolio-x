import React from 'react';
import Landingpage from './Components/Landingpage'
import Projects from './Components/Projects'
import Hire from './Components/Hire'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return ( 
    <div>
    <BrowserRouter>
      <Route exact path="/" component={Landingpage}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/hire" component={Hire}/>
      </BrowserRouter>
      </div>
    
   );
}

export default App;
