import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    navigate("/");
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />

        <br />
        <br />

        <button>Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/">Signin</Link>
      </p>
    </div>
  );
}

export default Signup;