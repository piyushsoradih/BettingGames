import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoney = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Unauthorized: No token found");
                    return;
                }

                // const response = await axios.get("http://localhost:5000/money", {
                const response = await axios.get("https://sohibetbackend.onrender.com/money", {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                });

                setBalance(response.data.money);
            } catch (error) {
                setError(error.response?.data?.message || "Internal Server Error");
            }
        };

        fetchMoney();
    }, []);



    useEffect(() => {
        const updateMoney = async () => {
            try {
                const token = localStorage.getItem("token");
                const username = localStorage.getItem("username");
                console.log("username ", username)
                if (!token) {
                    setError("Unauthorized: No token found");
                    return;
                }

                if (!username) {
                    setError("Email not found in localStorage");
                    return;
                }

                const response = await axios.put(
                    // "http://localhost:5000/update-money",
                        "https://sohibetbackend.onrender.com/update-money",
                    { username, balance: balance }, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                setBalance(response.data.balance);
            } catch (error) {
                setError(error.response?.data?.message || "Internal Server Error");
            }
        };
        updateMoney();
    }, [balance]);

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};
