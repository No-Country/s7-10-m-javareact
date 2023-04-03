import React from "react";
import logo from "../../assets/logo_header.png";
export const Header = () => {
  
  return (
    <div className="bg-blue-500 p-4">
      <div><h1>Welcome to our site!</h1></div>
      <div className="flex justify-center	">
        <h3 className="pt-5">Find the irght professional for urgent home repairs after unexpected damage</h3>
        <img src={logo} className="  h-28 m-auto" />
      </div>
    </div>
  );
};
