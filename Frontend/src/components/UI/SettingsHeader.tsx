import React, { PropsWithChildren } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SettingsHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-start p-1">
      <Link to={"/"}>
        <FaArrowLeft className="text-gray-600  h-6 w-6 ml-4 absolute" />
      </Link>
      <div className="w-full text-center font-georama font-semibold text-xl">
        <h1>{children}</h1>
      </div>
    </div>
  );
};
