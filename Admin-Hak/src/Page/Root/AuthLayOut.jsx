import { Outlet } from "react-router-dom";
import React from "react";
const AuthLayOut = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet /> {/* This will render child routes inside AuthLayOut */}
    </div>
  );
};

export default AuthLayOut;
