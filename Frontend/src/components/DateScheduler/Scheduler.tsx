import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Schedule {
  date: Date;
  time: string;
}

const timeOptions = [
  "00:00 AM",
  "01:00 AM",
  "02:00 AM",
  "03:00 AM",
  "04:00 AM",
  "05:00 AM",
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 HS"
];

const Scheduler = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (startDate && selectedTime) {
      const newSchedule: Schedule = {
        date: startDate,
        time: selectedTime
      };
      setSchedules([...schedules, newSchedule]);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderSchedules = () => {
    return (
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>
            {schedule.date.toDateString()} {schedule.time}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mt-8">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            minDate={new Date()}
            className="rounded-md border-gray-300 border px-4 py-2 text-sm"
          />
        </div>
        <div className="mt-8 mx-auto w-[400px]">
          <p className=" flex justify-center text-2xl font-medium text-gray-700 mb-2">
            Select a time:
          </p>
          <div className="flex flex-wrap justify-center mx-auto">
            {timeOptions.map(time => (
              <div className="mx-auto">
                <button
                  key={time}
                  type="button"
                  className={`${
                    selectedTime === time ? "bg-indigo-500" : "bg-gray-200"
                  } py-2 px-4 text-sm font-medium text-gray-700 rounded-full mr-4 mb-4 focus:outline-none`}
                  onClick={() => handleTimeSelection(time)}>
                  {time}
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">
          Send Request
        </button>
      </form>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Selected Date</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have selected the following date and time:
                    </p>
                    <p className="text-lg font-semibold mt-1">{startDate?.toLocaleString()}</p>
                    <p className="text-lg font-semibold mt-1">{selectedTime.toLowerCase()}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => setShowModal(false)}>
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Scheduler;
