import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <h2>User Data</h2>

      <p>Name: {user.name}</p>

      <p>Email: {user.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;