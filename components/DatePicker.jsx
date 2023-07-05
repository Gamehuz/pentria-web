/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";


const DatePicker = ({ onDayClick }) => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    setSelectedDay(null);
  };

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  // const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    console.log(day)
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    setSelectedDay(selectedDate);
    let year =
      selectedDate.getFullYear() !== new Date().getFullYear()
        ? selectedDate.getFullYear()
        : "";
    let options = { day: "numeric", month: "short" };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(selectedDate);
    let dayValue = parts.find((x) => x.type === "day").value;
    let monthValue = parts.find((x) => x.type === "month").value;
    let formattedDate = `${ordinal_suffix_of(dayValue)} ${monthValue} ${year}`;
    if (onDayClick) {
      onDayClick(formattedDate);
    }
  };

  function ordinal_suffix_of(i) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <div className="lg:w-[500px]">
      <div className=" flex justify-center space-x-2 py-4">
        <div onClick={handlePreviousMonth}>
          {" "}
          <FaCaretLeft className="previous-month-icon cursor-pointer" />
        </div>
        <div className="date-picker__current-month">
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </div>
        <div onClick={handleNextMonth}>
          {" "}
          <FaCaretRight className="next-month-icon cursor-pointer" />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-7 gap-2">
          {currentMonthDays.map((day) => {
            const isPast =
              new Date() > new Date(date.getFullYear(), date.getMonth(), day);
            return (
              <div
                key={day}
                className={`p-1 text-center text-white rounded-md ${
                  isPast
                    ? "bg-[#c1c6d8] cursor-not-allowed"
                    : selectedDay && selectedDay.getDate() === day
                    ? "bg-primaryColor cursor-pointer"
                    : "bg-[rgba(62,33,128,.5)] cursor-pointer"
                }`}
                onClick={() => !isPast && handleDayClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
