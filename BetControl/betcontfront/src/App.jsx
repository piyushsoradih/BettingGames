import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
   const [number, setNumber] = useState('');
   const [storedNumber, setStoredNumber] = useState(null);

   const sendNumber = async () => {
      if (!number) return;
      try {
         const response = await axios.post('https://betcontback-kug4.onrender.com/send', { number: parseInt(number) });
         setStoredNumber(response.data.number);
      } catch (error) {
         console.error(error);
      }
   };

   const fetchNumber = async () => {
      try {
         const response = await axios.get('https://betcontback-kug4.onrender.com/fetch');
         setStoredNumber(response.data.value);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      fetchNumber();
   }, []);

   return (
      <div>
         <h2>Enter a Number</h2>
         <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
         <button onClick={sendNumber}>Send</button>
         <h3>Stored Number: {storedNumber !== null ? storedNumber : "No number stored"}</h3>
      </div>
   );
}

export default App;
