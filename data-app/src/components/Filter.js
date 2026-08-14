"use client";

export default function Filter({ city, setCity }) {
  return (
    <select value={city} onChange={(e) => setCity(e.target.value)}>
      <option value="All">All Cities</option>
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Ranchi">Ranchi</option>
      <option value="Kolkata">Kolkata</option>
      <option value="Patna">Patna</option>
    </select>
  );
}