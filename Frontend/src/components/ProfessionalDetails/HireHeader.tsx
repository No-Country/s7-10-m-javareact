import React from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {};

const HireHeader = (props: Props) => {
  return (
    <Link to={""}>
      <div className="flex justify-around py-4">
        <div className="bg-blue-700 rounded-full mr-12 px-8 py-2 text-center align-content-center">
          <span className="mx-6 text-white text-center font-inter_italic">Hire</span>
        </div>
        <div className="flex justify-end text-2xl mx-10">
          <HiChatAlt2 className="text-blue-700" />
        </div>
      </div>
    </Link>
  );
};

export default HireHeader;
