"use client";

import { useState, useMemo } from "react";

import usersData from "../data/users.json";

import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

export default function Home() {
  const [users, setUsers] = useState(usersData);
  const [editingUser, setEditingUser] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [page, setPage] = useState(1);

  function addUser(user) {
    setUsers([...users, user]);
    setPage(1);
  }

  function updateUser(updatedUser) {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );

    setEditingUser(null);
  }

  function deleteUser(id) {
    if (!window.confirm("Delete this user?")) {
      return;
    }

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    const newTotalPages = Math.max(
      1,
      Math.ceil(updatedUsers.length / 5)
    );

    if (page > newTotalPages) {
      setPage(newTotalPages);
    }
  }

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchMatch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const cityMatch =
        city === "All" || user.city === city;

      return searchMatch && cityMatch;
    });
  }, [users, search, city]);

  const usersPerPage = 5;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / usersPerPage)
  );

  const currentUsers = filteredUsers.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">

          <h1 className="text-2xl font-bold text-gray-800">
            User Data App
          </h1>



        </div>


        {/* USER FORM */}

        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">

          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            {editingUser ? "Edit User" : "Add User"}
          </h2>

          <UserForm
            addUser={addUser}
            updateUser={updateUser}
            editingUser={editingUser}
          />

        </div>


        {/* SEARCH AND FILTER */}

        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">

          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Search Users
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <SearchBar
              search={search}
              setSearch={(value) => {
                setSearch(value);
                setPage(1);
              }}
            />

            <Filter
              city={city}
              setCity={(value) => {
                setCity(value);
                setPage(1);
              }}
            />

          </div>

        </div>


        {/* USER TABLE */}

        <div className="rounded-lg bg-white p-6 shadow-sm">

          <div className="mb-4 flex items-center justify-between">

            <div>


              <p className="text-sm text-gray-500">
                {filteredUsers.length} users found
              </p>

            </div>

          </div>

          <div className="overflow-x-auto">

            <UserTable
              users={currentUsers}
              editUser={setEditingUser}
              deleteUser={deleteUser}
              page={page}
            />

          </div>


          {/* PAGINATION */}

          <div className="mt-5 border-t pt-5">

            <Pagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />

          </div>

        </div>


        {/* FOOTER */}



      </div>

    </div>
  );
}