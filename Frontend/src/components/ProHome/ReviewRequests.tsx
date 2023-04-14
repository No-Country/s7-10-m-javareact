import React from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {};

const ReviewRequests = (props: Props) => {
  return (
    <div>
      <div className="py-2 w-[300px]">
        <div className="py-8 flex justify-center align-content-center align-content-center border-[3px] border-solid border-[#FF9A1F] rounded-md">
          <Link to="/" className="flex place-content-center">
            <HiOutlineClipboardList className="text-5xl" />
            <span className="mx-4 text-2xl mt-3">Review Request</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewRequests;
