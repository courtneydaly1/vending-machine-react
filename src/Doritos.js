import React from 'react';
import { Link } from 'react-router-dom';

const Doritos = () => {
  return (
    <div>
      <h1>Doritos</h1>
      <p>Crunchy and cheesy tortilla chips.</p>
        <img
            src="https://images.unsplash.com/photo-1583028281359-bdbfd8639b78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9yaXRvc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Doritos"
            style={{ width: "200px", maxWidth: '200px', height: 'auto' }}
        />
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Doritos;
