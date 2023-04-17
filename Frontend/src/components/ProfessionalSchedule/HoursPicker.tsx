import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const HoursPicker = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <ReactDatePicker
        className="border rounded-md border-gray-500 px-4 py-1"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
        withPortal
      />
    </div>
  );
};

export default HoursPicker;
