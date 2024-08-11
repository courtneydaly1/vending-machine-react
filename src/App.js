import React from "react";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Doritos from "./Doritos";
import DietCoke from "./DietCoke";
import SweetTarts from "./SweetTarts";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path ='/' element= {<VendingMachine/>}/>
        <Route exact path ='/dietCoke' element= {<DietCoke/>}/>
        <Route exact path ='/doritos' element= {<Doritos/>}/>
        <Route exact path ='/sweettarts' element= {<SweetTarts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
