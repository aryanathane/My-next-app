"use client";
import React from "react";
import { logout } from "../actions/auth";
const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Logout failed :", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 active:bg-red-800 transition-all font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
