import React, { createContext, useState } from 'react';

// Create the context
export const RandomContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(false);
    
    // function generateRandomNumber() {
    //     return Math.floor(Math.random() * 5) + 1;
    // }

    function generateRandomNumber() {
        return +(Math.random() * 4 + 1).toFixed(2);
    }
    
    const [randomNum, setRandomNum] = useState(generateRandomNumber());

    return (
        <RandomContext.Provider value={{ randomNum, setRandomNum,generateRandomNumber,waiting,setWaiting }}>
            {children}
        </RandomContext.Provider>
    );
};
