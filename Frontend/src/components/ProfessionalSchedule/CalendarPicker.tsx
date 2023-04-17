import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import HoursPicker from "./HoursPicker";

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onChangeDateHandler = (value: any) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
  };

  return (
    <>
      <div className="py-4">
        <DatePicker
          className="border rounded-md border-gray-500 px-4 py-1"
          placeholderText="Select time Availability"
          locale={es}
          dateFormat="dd MMMM, yyyy"
          onChange={onChangeDateHandler}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          selected={startDate}
          selectsRange={true}
          withPortal
          isClearable
        />
      </div>
      <HoursPicker />
    </>
  );
};

export default CalendarPicker;
