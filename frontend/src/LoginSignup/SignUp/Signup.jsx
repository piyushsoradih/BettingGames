import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sohibetbackend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
        localStorage.setItem("token", data.token);
        localStorage.setItem("money", data.money);

        setMessage("Signup successful!");
        navigate("/login"); // Optional: navigate to login after signup
      } else {
        alert(data.message);
      }
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-button">SIGN UP</button>

          <div className="login-redirect">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
