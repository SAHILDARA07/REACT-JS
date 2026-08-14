"use client";

import { useState, useEffect } from "react";

export default function UserForm({ addUser, updateUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setCity(editingUser.city);
    } else {
      setName("");
      setEmail("");
      setCity("");
    }
  }, [editingUser]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !city) {
      alert("Please fill all fields.");
      return;
    }

    const user = {
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email,
      city,
    };

    editingUser ? updateUser(user) : addUser(user);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Ranchi</option>
        <option>Kolkata</option>
        <option>Patna</option>
      </select>

      <button className="add-btn">
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}