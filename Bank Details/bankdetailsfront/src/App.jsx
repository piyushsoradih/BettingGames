import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [bankDetails, setBankDetails] = useState([]);

 
  const fetchBankDetails = async () => {
    try {
      // const response = await fetch("http://localhost:5400/api/bank/all");
      const response = await fetch("https://bankdetailsback.onrender.com/api/bank/all");
      const data = await response.json();
      setBankDetails(data.map((bank) => ({ ...bank, withdrawAmount: 0 }))); 
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  useEffect(() => {
    fetchBankDetails();
  }, []);

  
  const handleInputChange = (id, value) => {
    setBankDetails((prev) =>
      prev.map((bank) =>
        bank._id === id ? { ...bank, withdrawAmount: Number(value)} : bank
      )
    );
  };

 
  const handleWithdraw = async (id, amount) => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }

    try {
      // const response = await fetch(`http://localhost:5400/api/bank/withdraw/${id}`, {
        const response = await fetch(`https://bankdetailsback.onrender.com/api/bank/withdraw/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Withdrawal request of $${amount} submitted!`);
        
        setBankDetails((prev) =>
          prev.map((bank) =>
            bank._id === id
              ? { ...bank, withdrawAmount: 0, requestedMoney: data.requestedMoney }
              : bank
          )
        );
      } else {
        alert(data.error || "Error processing withdrawal");
      }
    } catch (error) {
      console.error("Error processing withdrawal:", error);
    }
  };

  return (
    <div className="container">
      <h2>Stored Bank Details</h2>
      {bankDetails.length === 0 ? (
        <p className="no-data">No bank details found.</p>
      ) : (
        <div className="bank-list">
          {bankDetails.map((bank) => (
            <div key={bank._id} className="bank-card">
              <p><strong>User Name:</strong> {bank.username}</p>
              <p><strong>Account Holder:</strong> {bank.accountHolder}</p>
              <p><strong>Account Number:</strong> {bank.accountNumber}</p>
              <p><strong>Bank Name:</strong> {bank.bankName}</p>
              <p><strong>IFSC Code:</strong> {bank.ifscCode}</p>
              <p><strong>Branch Name:</strong> {bank.branchName}</p>
              <p><strong>Total Balance:</strong> ₹{bank.withdrawableAmount}</p>
              <p><strong>Requested Withdraw Amount:</strong> ₹{bank.requestedMoney}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

