import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onChangeDateHandler = (value: any) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
  };

  return (
    <>
      <DatePicker
        placeholderText="Select time Availability"
        locale={es}
        dateFormat="dd MMMM, yyyy"
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
        selectsRange={true}
        showTimeSelect
        isClearable
        onChange={onChangeDateHandler}
      />
    </>
  );
};

export default CalendarPicker;
