import React from "react";
import {Link} from "react-router-dom";


const VendingMachine = () =>{
    return (
        <div className="vending-machine">
            <div className="vm-greeting">
                <p>Hello. WHat snack would you like?</p>
            </div>
            <div className="vm-items">
                <Link to="/dietCoke">Diet Coke</Link>
                <Link to='/doritos'>Doritos</Link>
                <Link to="/sweettarts">Sweet Tarts</Link>
            </div>
        </div>
    )
}

export default VendingMachine;
