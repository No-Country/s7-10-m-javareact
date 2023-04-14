import React from "react";
import { BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const EditSchedule = (props: Props) => {
  return (
    <div>
      <div className="py-2 w-[300px]">
        <div className="py-8 flex justify-center align-content-center align-content-center border-[3px] border-solid border-[#FF9A1F] rounded-md">
          <Link to="/" className="flex place-content-center">
            <BiCalendar className="text-5xl mr-7" />
            <span className="mx-4 text-2xl mt-3">Edit Schedule</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditSchedule;
