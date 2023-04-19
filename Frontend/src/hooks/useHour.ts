import { useState } from "react";

export const useHour = (initialTime: any) => {
  const [time, setTime] = useState(initialTime);

  const formatTime = (timeString: any) => {
    const timeArray = timeString.split(" ");
    const timeSection = timeArray[0].split(":");
    let hour = parseInt(timeSection[0]);
    const minute = timeSection[1];
    const second = timeSection[2];

    if (timeArray[1] === "PM" && hour !== 12) {
      hour += 12;
    } else if (timeArray[1] === "AM" && hour === 12) {
      hour = 0;
    }

    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute}:00`;

    return formattedTime;
  };

  const handleTimeChange = (time: any) => {
    const formattedTime = formatTime(time);
    setTime(formattedTime);
  };

  return [time, handleTimeChange];
};
