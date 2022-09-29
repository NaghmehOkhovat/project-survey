import React from 'react';

const Summary = ({ name, characterGroup, workAlternative }) => {
  return (
    <div className="summary-container">
      <p className="summary-answer">Your name is: {name}</p>
      <p className="summary-answer">You would like to work with: {characterGroup}</p>
      <p className="summary-answer">Your favorit place to work: {workAlternative}</p>
      <h2 className="end">Thanks for your answers! Hope you enjoy your work environment! 😝</h2>
    </div>
  );
}

export default Summary;