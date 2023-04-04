import React from "react";
import logo from "../../assets/logo_header_2.png";
export const Header = () => {
  return (
    <div className=" bg-[#004E98]/70 p-4">
      <div className="container m-auto  max-w-7xl">
        <h1 className="font-georama font-semibold text-white text-2xl py-4">
          Welcome to our site!
        </h1>
        <div className=" flex justify-center items-center md:gap-20	">
          <h3 className=" font-georama text-md text-white inline-block my-auto">
            Find the right professional for urgent home repairs after unexpected damage
          </h3>
          <img src={logo} className="xs:m-4 xs:h-28 h-16" />
        </div>
      </div>
    </div>
  );
};
