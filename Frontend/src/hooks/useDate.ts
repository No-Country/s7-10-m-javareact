import { useState } from "react";

export const useDate = (initialDate: any) => {
  const [date, setDate] = useState(initialDate);

  const formatDate = (dateString: any) => {
    const fechaSeleccionada = new Date(dateString);
    const year = fechaSeleccionada.getFullYear();
    const month = fechaSeleccionada.getMonth() + 1;
    const day = fechaSeleccionada.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  };

  const handleDateChange = (date: any) => {
    const formattedDate = formatDate(date);
    setDate(formattedDate);
  };

  return [date, handleDateChange];
};
