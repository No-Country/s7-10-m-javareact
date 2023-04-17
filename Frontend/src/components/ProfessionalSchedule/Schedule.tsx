import React from "react";
import CalendarPicker from "./CalendarPicker";

type Props = {};

const Schedule = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center min-h-screen">
        <div className="py-4">
          <div className="py-4 text-2xl flex justify-center">
            <h2>Availability</h2>
          </div>
          <div className="py-8">
            <CalendarPicker />
          </div>
          <div className="py-2 flex justify-center bg-[#5046E5] text-white rounded-md">
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
