import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Withdrawal.css";
import { BalanceContext } from "../UserMoney/BalanceContext";

const Withdrawal = () => {
  const { balance, setBalance } = useContext(BalanceContext);

  const [username] = useState(localStorage.getItem("username") || "");
  const [amount, setAmount] = useState("");
  const [accountName, setAccountName] = useState(localStorage.getItem("accountHolder") || "");
  const [accountNumber, setAccountNumber] = useState(localStorage.getItem("accountNumber") || "");
  const [ifscCode, setIfscCode] = useState(localStorage.getItem("ifscCode") || "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAccountName(localStorage.getItem("accountHolder") || "");
    setAccountNumber(localStorage.getItem("accountNumber") || "");
    setIfscCode(localStorage.getItem("ifscCode") || "");
  }, []);

  const handleWithdraw = async () => {
    if (!amount || !accountNumber || !ifscCode) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      console.log("Fetching bank details...");
      const { data } = await axios.get("https://bankdetailsback.onrender.com/api/bank/all");
      // const { data } = await axios.get("http://localhost:5400/api/bank/all");


      console.log("Fetched bank details:", data);

      const bankAccount = data.find(
        (acc) => acc.accountNumber === accountNumber && acc.ifscCode === ifscCode
      );

      if (!bankAccount) {
        setMessage("Invalid account number or IFSC code.");
        return;
      }

      const withdrawalAmount = parseFloat(amount);

      if (bankAccount.withdrawableAmount < withdrawalAmount) {
        setMessage("Insufficient balance.");
        return;
      }

      console.log("Sending withdrawal request...");
      const response = await axios.post("https://bankdetailsback.onrender.com/api/bank/withdraw", {
      // const response = await axios.post("http://localhost:5400/api/bank/withdraw", {
        username,
        accountNumber,
        amount: withdrawalAmount,
      });

      console.log("Withdrawal response:", response.data);

      setMessage(response.data.message);
      setBalance((prevBalance) => prevBalance - withdrawalAmount);
    } catch (error) {
      console.error("Withdrawal Error:", error.response ? error.response.data : error.message);
      setMessage("Error processing withdrawal.");
    }
  };

  return (
    <div className="mainWithdraw">
      <div className="withdrawal-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="back-button">&#8592; Go Back</button>
        </Link>

        <div className="withdrawal-info">
          <p><strong>Balance:</strong> {balance}</p>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} readOnly />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label>Account Name</label>
          <input type="text" value={accountName} readOnly />
        </div>

        <div className="form-group">
          <label>Account Number</label>
          <input type="text" value={accountNumber} readOnly />
        </div>

        <div className="form-group">
          <label>IFSC Code</label>
          <input type="text" value={ifscCode} readOnly />
        </div>

        <button className="withdraw-button" onClick={handleWithdraw}>WITHDRAW</button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Withdrawal;
