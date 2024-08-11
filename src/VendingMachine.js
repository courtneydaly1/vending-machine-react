import React from "react";
import {Link} from "react-router-dom";
import './VendingMachine.css';


const VendingMachine = () =>{
    return (
        <div className="vending-machine">
            <div className="vm-greeting">
                <h1> <b>Hello. What snack would you like?</b></h1>
            </div>
            <div className="vm-items">
                <Link to="/dietCoke">Diet Coke</Link>
                <br></br>
                <Link to='/doritos'>Doritos</Link>
                <br></br>
                <Link to="/sweettarts">Sweet Tarts</Link>
            </div>
        </div>
    )
}

export default VendingMachine;
