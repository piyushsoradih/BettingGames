import React from "react";
import { Link } from "react-router-dom";
import "./UsersAccount.css";

export default function UsersAccount({ username, money, handleLogout }) {
  return (
    <div className="user-container">
      <div className="user-card">
        <Link to="/" className="back-link">
          <button className="back-button">&#8592; Go Back</button>
        </Link>

        <div className="profile-icon">{username.charAt(0).toUpperCase()}</div>

        <h2 className="username">{username}</h2>
        <p className="money">💰 Balance: ₹{money}</p>

        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
}
