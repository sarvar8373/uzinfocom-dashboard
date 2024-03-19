import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendar } from "react-icons/fa";
const Calendar = ({ darkMode }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={`border-0 ${
        darkMode ? "bg-light text-secondary" : "bg-dark-light text-light"
      }`}
      showIcon
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon={<FaRegCalendar style={{ color: "#A3AED0" }} />}
    />
  );
};

export default Calendar;
