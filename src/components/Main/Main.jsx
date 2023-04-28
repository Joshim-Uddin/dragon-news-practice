/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import TextScroll from "../TextScroll/TextScroll";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <TextScroll />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
