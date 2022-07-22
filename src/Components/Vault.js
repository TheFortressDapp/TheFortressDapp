import React from "react";

import './App.css';
import NavBarComp from './NavBarComp'
import VaultComp from "./VaultComp";





function Vault() {



  return (
    
    <div className="overlay">
      
      <div className="App">
        <NavBarComp />
        <VaultComp />

        
      </div>
      
      <div className="moving-background"></div>
    </div>
    
  );
}

export default Vault;