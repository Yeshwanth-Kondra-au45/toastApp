import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Outlet } from "react-router-dom";
export const ProfileLayout = () => {
  return (
    <>
      <Header />
      <div className="profile-layout container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
