import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("user"));

    if (
      data &&
      data.email === email &&
      data.password === password
    ) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Signin</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button>Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Signin;