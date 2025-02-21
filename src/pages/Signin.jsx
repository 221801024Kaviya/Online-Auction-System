import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [signinSuccess, setSigninSuccess] = useState(false); // State for success message
  const [error, setError] = useState(""); // State for error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      formData.username === storedUser.username &&
      formData.password === storedUser.password
    ) {
      setSigninSuccess(true);
      setError("");

      // Redirect to Dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard"); // Change "/dashboard" to your actual route
      }, 2000);
    } else {
      setError("Invalid credentials, please try again.");
      setSigninSuccess(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {signinSuccess ? (
        <p className="success-message">Sign-in successful! Redirecting...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Signin;
