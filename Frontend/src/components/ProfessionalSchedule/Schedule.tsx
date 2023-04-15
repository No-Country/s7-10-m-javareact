import React from "react";
import CalendarPicker from "./CalendarPicker";

type Props = {};

const Schedule = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center min-h-screen">
        <div className="py-4">
          <div className="py-4">
            <h2>Availability</h2>
          </div>
          <div>
            <CalendarPicker />
          </div>
          <div>
            <span>Buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
