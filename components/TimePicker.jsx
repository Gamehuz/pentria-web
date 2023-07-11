/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { message } from 'antd';

import { addStartTime, addEndTime, updateTotal, updateDuration } from "@/store/slices/cartSlice.js"

const TimePicker = ({ activityId, duration, price, timeList }) => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [selectedTime, setSelectedTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null)

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (!startTime) {
      setStartTime(time)
      dispatch(addStartTime({ time, activityId }))
    }else {
      const [startHours, startMinutes] = startTime.split(':')
      const [endHours, endMinutes] = time.split(':')

      if (parseInt(startHours) > parseInt(endHours)) {
        messageApi.open({
          type: 'error',
          content: 'Start time should be earlier',
        });
        return
      }

      setEndTime(time)
      const increment = duration; // minutes

      const startTimeInMinutes = parseInt(startHours, 10) * 60 + parseInt(startMinutes, 10);
      const endTimeInMinutes = parseInt(endHours, 10) * 60 + parseInt(endMinutes, 10);

      const timeDiffInMinutes = endTimeInMinutes - startTimeInMinutes;
      const numIncrements = Math.floor(timeDiffInMinutes / increment);
      // console.log(numIncrements)


      const total = price * numIncrements
      const durationVal = duration * numIncrements
      dispatch(addEndTime({ time, activityId }))
      dispatch(updateDuration({ durationVal, activityId }))
      dispatch(updateTotal({ total, activityId }))
    }
  };

  const cancleTime = () => {
    setSelectedTime(null)
    setStartTime(null)
    setEndTime(null)
  }

  return (
    <div className="lg:w-[500px]">
      {contextHolder}
      {
        endTime ? '' : (
          <>
            <p className="text-center py-3">
        {
          startTime && !endTime ? 'Select end time' : 'Select start time'
        }
      </p>
          </>
        )
      }

      { startTime && (
        <>
          <div className="flex space-x-4 my-10">
        <div className="flex space-x-4">
          <p className="">Start</p>
          <div
            className={`${'py-1 px-3 cursor-pointer text-center text-white rounded-md bg-primaryColor'}` }
          >
            {startTime}
          </div>
        </div>
        <div className="flex space-x-4">
          {
            endTime && (
              <>
                <p>End</p>
          <div
          className={`${'py-1 px-3 cursor-pointer text-center text-white rounded-md bg-primaryColor'}`}
        >
         {endTime}
        </div>
              </>
            )
          }
          
        </div>

        <div
          className={`${'py-1 px-3 cursor-pointer text-center text-white rounded-md bg-primaryColor'}`}
          onClick={() => cancleTime()}
        >
         Cancel
        </div>

      </div>
        </>
      )

      }
      {
        endTime ? '' : (
          <>

<div className='grid grid-cols-6 gap-2'>
        {timeList.map(({ label, value }) => (
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

          </>
        )
      }
    </div>
  );
};

export default TimePicker;
