import { Outlet } from "react-router-dom";
import {letter2} from "../../assets/shoes image/letter2.svg";
import React from "react";
const AuthLayOut = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <img src={letter2} alt="" className="p-16" />
      <Outlet /> {/* This will render child routes inside AuthLayOut */}
    </div>
  );
};

export default AuthLayOut;
