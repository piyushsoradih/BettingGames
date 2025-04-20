import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import UsersAccount from "../../UsersAccounts/UsersAccount";

const Login = () => {
  const [message, setMessage] = useState("");
  const [money, setMoney] = useState(localStorage.getItem("money") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [user, setUser] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setMessage("Login successful!");
    } else if (user.email && user.password) {
      handleSubmit();
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    try {
      const response = await fetch("https://sohibetbackend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
        localStorage.setItem("money", data.money);

        setUsername(data.username);
        setMoney(data.money);
        setMessage("Login successful!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("money");

    setUsername("");
    setMoney("");
    setUser({ email: "", password: "" });
    setMessage("");
  };

  return (
    <div className="login-container">
      {message ? (
        <UsersAccount username={username} money={money} handleLogout={handleLogout} />
      ) : (
        <div className="login-box">
          <div className="login-header">
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
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

            <button type="submit" className="login-button">LOGIN</button>

            <div className="login-links">
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>

            <div className="divider">-or-</div>

            <div className="social-login">
              <button className="social-button">G</button>
              <button className="social-button">f</button>
            </div>

            <div className="create-link">
              New? <Link to="/signup">Create an account</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
