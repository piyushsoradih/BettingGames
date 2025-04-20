import { useState } from "react";
import './Check.css'

export default function Check() {
  const [user, setUser] = useState({
    name: "Alice",
    username: "alice123",
    balance: 1000,
  });

  const withdraw = () => {
    if (user.balance >= 100) {
      setUser({ ...user, balance: user.balance - 100 });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="profile-icon">{user.name.charAt(0)}</div>
        <h2>{user.name}</h2>
        <p>@{user.username}</p>
        <p className="balance">Balance: ${user.balance}</p>
        <button className="withdraw-button" onClick={withdraw}>Withdraw $100</button>
      </div>
    </div>
  );
}


