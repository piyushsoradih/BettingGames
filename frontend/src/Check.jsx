import React, { useState } from 'react';

const Check = () => {
  const [stack, setStack] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleBoxClick = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setStack(prevStack => [randomNumber, ...prevStack]); // Push to top of stack
    setShowAll(prev => !prev); // Toggle between showing all and 5
  };

  const displayedStack = showAll ? stack : stack.slice(0, 5);

  return (
    <div
      onClick={handleBoxClick}
      style={{
        width: '250px',
        minHeight: '100px',
        padding: '10px',
        margin: '20px auto',
        backgroundColor: '#f2f2f2',
        border: '2px solid #888',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'height 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h4>Stack:</h4>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {displayedStack.map((num, idx) => (
          <li key={idx} style={{ padding: '4px 0' }}>
            {num}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '12px', color: '#666' }}>
        (Tap to add number and toggle view)
      </p>
    </div>
  );
};

export default Check;
