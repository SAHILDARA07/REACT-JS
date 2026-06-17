import React from "react";
import { Routes, Route } from "react-router";
import Home from "./";
import Signin from "./screens/Signin";
export default function App() {
  const credential = {
    email: "sahil@gmail.com",
    password: "123456",
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin credential={credential}/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Home/> */}
    </>
  );
}