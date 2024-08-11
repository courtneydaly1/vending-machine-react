import React from "react";
import {Link} from "react-router-dom";
import "./SweetTart.css";


const SweetTart = () => {
    return (
        <div>
            <h1>Sweet Tarts</h1>
            <p>Sour and sweet candy.</p>
            <img
            src="https://media.istockphoto.com/id/471712776/photo/macro-detail-of-pile-of-colored-smarties.webp?b=1&s=170667a&w=0&k=20&c=vmIGFmNetd3F3ANEthAsxX_Z2sgJztHwj90SmdM3mSw="
            alt="SweetTarts"
            style={{ width: "200px", maxWidth: '200px', height: 'auto' }}
            />
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default SweetTart;