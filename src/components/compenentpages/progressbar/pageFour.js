import React from "react";

import britmoon from "../../caroimage/britmoon.jpg";
import moon from "../../caroimage/moon.jpg";
import halfmoon from "../../caroimage/halfmoon.jpg";
import glowmoon from "../../caroimage/glowmoon.jpg";
import { useProcessDataContext } from "./ProcessDataContext";

const PageFour = ({ onButtonClick }) => {
  const { data, setData } = useProcessDataContext();
  // Create an array of objects representing the data
  const holidayData = [
    {
      label: "3-5 Days",
      imageSrc: britmoon,
    },
    {
      label: "6-8 Days",
      imageSrc: moon,
    },
    {
      label: "9-11 Days",
      imageSrc: halfmoon,
    },
    {
      label: "12-15 Days",
      imageSrc: glowmoon,
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        <div className="w-[768px]">
          <div className="font-semibold text-gray-900 sm:text-[18px] text-[17px] font-sans text-center pt-2">
            What's the duration of your holiday?
          </div>

          <div className="flex flex-wrap items-center sm:justify-start justify-center gap-[12px] pt-10">
            {holidayData.map((item, index) => (
              <div
                key={index}
                className="md:w-[181px] h-[272px] w-[89.98px] flex flex-col items-center justify-center border rounded-2xl border-[#D4D4D4] hover-item"
                onClick={() => {
                  setData({ ...data, days: item.label });
                  onButtonClick("pagefive");
                }}
              >
                <img
                  src={item.imageSrc}
                  alt="moon"
                  className="w-[128px] h-[128px] rounded-full"
                />
                <h3 className="w-[65.08px] h-[70px] flex justify-center items-center text-center text-[12px] font-[600]">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
