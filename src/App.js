import React from "react";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
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
  
    <Routes>
    <Route path="/" element={<MintingSoon/>}/>
    <Route path="/roadmap" element={<RoadmapComp/>}/>
    <Route path="/team" element={<TeamComp/>}/>
    <Route path="/fort" element={<FortComp/>}/>
    <Route path="/about" element={<AboutComp/>}/>
    </Routes>

    <div className="moving-background"></div>
  </div>



  
);
}

export default App;




      
      