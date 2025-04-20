import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BankForm.css";
import { BalanceContext } from "../../UserMoney/BalanceContext";

const BankForm = () => {
  const { balance } = useContext(BalanceContext);

  const [token] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [formData, setFormData] = useState({
    username: username,
    accountHolder: "",
    accountNumber: "",
    ifscCode: "",
    withdrawableAmount: balance,  
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (!token || storedUsername !== username) {
      localStorage.removeItem("accountHolder");
      localStorage.removeItem("accountNumber");
      localStorage.removeItem("ifscCode");

      setFormData({
        username: storedUsername || "",
        accountHolder: "",
        accountNumber: "",
        ifscCode: "",
        withdrawableAmount: balance, 
      });

      setUsername(storedUsername || "");
    }
  }, [token, username, balance]);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "withdrawableAmount") { 
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!String(formData[key]).trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("https://bankdetailsback.onrender.com/api/bank/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("Success!");
          localStorage.setItem("accountHolder", formData.accountHolder);
          localStorage.setItem("accountNumber", formData.accountNumber);
          localStorage.setItem("ifscCode", formData.ifscCode);
          setFormData({ ...formData, withdrawableAmount: balance });
          setErrors({});
        } else {
          setMessage(data.error || "Error");
        }
      } catch (error) {
        setMessage("Server error: Unable to submit");
      }
    }
  };

  return (
    <div className="mainbankForm">
      <div className="form-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="back-button" style={{ color: "green" }}>&#8592; Go Back</button>
        </Link>
        <h2>Bank Details Form</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-groupBank">
              <label>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:</label>
              <input
                type={key === "withdrawableAmount" ? "number" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                disabled={key === "username" || key === "withdrawableAmount"}
              />
              {errors[key] && <span className="error">{errors[key]}</span>}
            </div>
          ))}
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BankForm;

