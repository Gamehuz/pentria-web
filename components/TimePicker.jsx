/* eslint-disable react/prop-types */
import { useState } from "react";

const TimePicker = ({ onTimeClick }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeOptions, setTimeOptions] = useState([
    {
      label: "09:00",
      value: "09:00",
    },
    {
      label: "09:30",
      value: "09:30",
    },
    {
      label: "10:00",
      value: "10:00",
    },
    {
      label: "10:30",
      value: "10:30",
    },
    {
      label: "11:00",
      value: "11:00",
    },
    {
      label: "11:30",
      value: "11:30",
    },
    {
      label: "12:00",
      value: "12:00",
    },
    {
      label: "12:30",
      value: "12:30",
    },
    {
      label: "13:00",
      value: "13:00",
    },
    {
      label: "13:30",
      value: "13:30",
    },
    {
      label: "14:00",
      value: "14:00",
    },
    {
      label: "14:30",
      value: "14:30",
    },
    {
      label: "15:00",
      value: "15:00",
    },
    {
      label: "15:30",
      value: "15:30",
    },
    {
      label: "16:00",
      value: "16:00",
    },
    {
      label: "16:30",
      value: "16:30",
    },
    {
      label: "17:00",
      value: "17:00",
    },
    {
      label: "17:30",
      value: "17:30",
    },
    {
      label: "18:00",
      value: "18:00",
    },
    {
      label: "18:30",
      value: "18:30",
    },
    {
      label: "19:00",
      value: "19:00",
    },
    {
      label: "19:30",
      value: "19:30",
    }
  ]);

  // useEffect(() => {
  //   const currentDate = new Date();
  //   const currentTime = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth(),
  //     currentDate.getDate(),
  //     currentDate.getHours(),
  //     currentDate.getMinutes()
  //   );
  //   const endTime = new Date(currentTime.getTime() + 6 * 60 * 60 * 1000);
  //   const options = [];
  //   let time = currentTime;
  //   while (time < endTime) {
  //     const label = time.toLocaleTimeString([], {
  //       hour: "numeric",
  //       minute: "2-digit",
  //     });
  //     options.push({
  //       label,
  //       value: label,
  //       isPast: time < currentTime,
  //     });
  //     time.setTime(time.getTime() + 30 * 60 * 1000);
  //   }
  //   setTimeOptions(options);
  // }, []);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (onTimeClick) {
      onTimeClick(time);
    }
  };

  return (
    <div className="lg:w-[500px]">
      <p className="py-4 text-center">Start Time</p>
      <div className='grid grid-cols-6 gap-2'>
        {timeOptions.map(({ label, value }) => (
          <div
            key={value}
            className={`${'p-1 cursor-pointer text-center text-white rounded-md'} ${
              selectedTime === value ? "bg-primaryColor cursor-pointer" : "bg-[rgba(62,33,128,.5)]"
            }`}
            onClick={() => handleTimeClick(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
