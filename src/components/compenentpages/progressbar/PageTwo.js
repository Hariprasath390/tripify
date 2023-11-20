import React, { useState, useEffect } from "react";
import { useProcessDataContext } from "./ProcessDataContext";
// import "./PageTwo.css";

const PageTwo = ({ onButtonClick }) => {
  // console.log("Selected Month Data in PageTwo:", selectedMonth.month);

  const { data, setData } = useProcessDataContext();

  const handleDateClick = (current_day) => {
    const selectedMonth = months[currentMonth];
    setData({ ...data, day: current_day, month: selectedMonth });
    onButtonClick("pagethree");
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectedMonthIndex = months.indexOf(data.month);

  const [currentMonth, setCurrentMonth] = useState(selectedMonthIndex); // October is the 10th month (0-based index)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initialize with the current year
  const [dateCells, setDateCells] = useState([]);

  console.log(currentMonth, "9999999");

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newYear = currentYear;
      if (prevMonth === 0) {
        newYear = currentYear - 1;
        return 11; // December
      } else {
        return prevMonth - 1;
      }
    });

    setCurrentYear((prevYear) => {
      if (currentMonth === 0) {
        return prevYear - 1;
      }
      return prevYear;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newYear = currentYear;
      if (prevMonth === 11) {
        newYear = currentYear + 1;
        return 0; // January
      } else {
        return prevMonth + 1;
      }
    });

    setCurrentYear((prevYear) => {
      if (currentMonth === 11) {
        return prevYear + 1;
      }
      return prevYear;
    });
  };

  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const newDateCells = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const isToday =
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear() &&
        day === new Date().getDate();
      return (
        <div
          key={day}
          className={`text-center hover:bg-gray-300 hover:rounded-full  p-2 ${
            isToday ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    });
    setDateCells(newDateCells);
  }, [currentMonth, currentYear]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[768px] ">
          <div className="flex justify-center items-center sm:pb-[36px] p-4">
            <div className="font-semibold text-gray-900  sm:text-[18px] text-[17px] font-sans text-center  ">
              When is your departure date?
            </div>
          </div>

          <div className="flex justify-center items-center p-[20px]">
            <div className="flex justify-center items-center border border-slate-200 bg-white shadow-lg   sm:h-[378px]  sm:w-[460px]  w-[280px]  ">
              <div className="flex flex-col sm:p-0 p-2">
                <div className="flex justify-between mb-4 items-center  ">
                  <button className="p-2" onClick={handlePrevMonth}>
                    &lt;
                  </button>
                  <h2 className="text-lg font-semibold font-sans text-[20px] text-gray-900">
                    {months[currentMonth]} {currentYear}
                  </h2>
                  <button className="p-2" onClick={handleNextMonth}>
                    &gt;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-[#888888]  text-[16px] ">
                  <div className="text-center font-semibold  ">Sun</div>
                  <div className="text-center font-semibold">Mon</div>
                  <div className="text-center font-semibold">Tue</div>
                  <div className="text-center font-semibold">Wed</div>
                  <div className="text-center font-semibold">Thu</div>
                  <div className="text-center font-semibold">Fri</div>
                  <div className="text-center font-semibold">Sat</div>
                  {/* Generate date cells */}
                  {dateCells}

                  {/* You can use currentMonth and currentYear to generate the correct date cells */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
