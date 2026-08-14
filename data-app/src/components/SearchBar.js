"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by Name or Email"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}