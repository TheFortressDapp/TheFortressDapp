import React from "react";

import './App.css';
import RoadmapComp from './RoadmapComp';
import NavBarComp from './NavBarComp'





function Roadmap() {



  return (
    
    <div className="overlay">
      
      <div className="App">
        <NavBarComp />
        <RoadmapComp />

        
      </div>
      
      <div className="moving-background"></div>
    </div>
    
  );
}

export default Roadmap;