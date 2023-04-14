import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState(null);
  const addDays = new Date();

  return (
    <DatePicker
      //   dateFormat="dd / MM / yyyy"
      placeholderText="Select a date with me"
      minDate={new Date()}
      //   maxDate={addDays}
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
    />
  );
};

export default CalendarPicker;
