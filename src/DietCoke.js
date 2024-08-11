import React from 'react';
import { Link } from 'react-router-dom';

const DietCoke = () => {
  return (
    <div>
      <h1>Diet Coke</h1>
      <p>A refreshing zero-calorie cola.</p>
      <img
            src="https://images.unsplash.com/photo-1492558830530-c134e4d828fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZXQlMjBjb2tlfGVufDB8fDB8fHww"
            alt="DietCoke"
            style={{ width: "200px", maxWidth: '200px', height: 'auto' }}
        />
        <br></br>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default DietCoke;
