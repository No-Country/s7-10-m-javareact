import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
    locale={es}
      dateFormat="dd MMMM, yyyy"
      placeholderText="Select a date with me"
      minDate={new Date()}
      selected={startDate}
      showTimeSelect
      onChange={(date: any) => setStartDate(date)}
    />
  );
};

export default CalendarPicker;
