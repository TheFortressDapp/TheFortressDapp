import React from "react";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMint from './MainMint';
import NavBar from "./NavBar";
import RoadmapComp from "./RoadmapComp";
import TeamComp from "./TeamComp";
import FortComp from "./FortComp";
import AboutComp from './AboutComp'
import MintingSoon from "./MintingSoon"




function App() {
  const [accounts, setAccounts] = useState([]);


  return (


    <div className="App">

        <NavBar accounts={accounts} setAccounts={setAccounts} />
        {/*<MainMint accounts={accounts} setAccounts={setAccounts}/>*/}
        <MintingSoon/>
        
        <AboutComp/>
        <RoadmapComp/>
        <TeamComp/>
        <FortComp/>
        
  
        

      

      <div className="moving-background"></div>


    </div>




  );
}

export default App;





