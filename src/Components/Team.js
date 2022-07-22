import React from "react";

import './App.css';
import TeamComp from './TeamComp';
import NavBarComp from "./NavBarComp";





function Team() {



  return (
    
    <div className="overlay">
      
      <div className="App">
        
        <NavBarComp />
        <TeamComp />

        
      </div>
      
      <div className="moving-background"></div>
    </div>
    
  );
}

export default Team;