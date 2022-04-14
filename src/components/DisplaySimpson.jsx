import React from 'react';

function DisplaySimpson({ person }) {
  return (
    <div className="main">
      
      <h1 className="name">{person[0].character}</h1>
      <div className="image">
        <img src={person[0].image} />
        <div className="quote">{person[0].quote}</div>
      </div>
    </div>
  );
}

export default DisplaySimpson;