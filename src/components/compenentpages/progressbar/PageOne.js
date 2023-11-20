import React, { useState } from "react";

import "../../styles/PageOne.css";
import { useProcessDataContext } from "./ProcessDataContext";

const PageOne = ({ onButtonClick }) => {
  const monthsData = [
    {
      month: "September",
      temperature: "25 / 31°C",
      description: "Our Pick",
    },
    {
      month: "October",
      temperature: "24 / 31°C",
      description: "Our Pick",
    },
    {
      month: "November",
      temperature: "24 / 31°C",
      description: "Second Best",
    },
    {
      month: "December",
      temperature: "24 / 31°C",
      description: "Too Crowded",
    },
    {
      month: "January",
      temperature: "24 / 31°C",
      description: "Too Crowded",
    },
    {
      month: "February",
      temperature: "25 / 31°C",
      description: "Second Best",
    },
    {
      month: "March",
      temperature: "26 / 32°C",
      description: "Our Pick",
    },
    {
      month: "April",
      temperature: "27 / 30°C",
      description: "Second Best",
    },
    {
      month: "May",
      temperature: "26 / 32°C",
      description: "Our Pick",
    },
  ];

  const { data, setData } = useProcessDataContext();

  console.log(data, "222222222");

  const handleMonthClick = (months) => {
    onButtonClick("pagetwo");
    setData({ ...data, month: months.month });
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-wrap items-center justify-start gap-[8px] pt-10 w-[760px]">
        {monthsData.map((monthData, index) => (
          <div
            key={index}
            className="md:w-[120px] h-[144px] w-[89.98px] flex flex-col items-center justify-center border rounded-2xl border-[#D4D4D4] hover-item"
            onClick={() => handleMonthClick(monthData)}
          >
            <h3 className="font-bold text-gray-900 text-[16.5px] font-sans text-center pb-2 w-full">
              {monthData.month}
            </h3>
            {monthData.description === "Too Crowded" ||
            monthData.description === "Second Best" ? (
              <h3 className=" flex items-center justify-center md:text-[13px] text-[10.9px] rounded-[20px] py-2 mb-[10px] pl-[6px] pr-[7px] text-[#333333] font-semibold realtive leading-[14px]">
                {monthData.description}
              </h3>
            ) : (
              <div className="bg-[#00b277] flex items-center mt-2 justify-center text-[11px] rounded-[20px] mb-[12px] pl-[6px] pr-[7px]  text-white font-semibold realtive leading-[14px]">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="w-[20px] h-[16px]  mt-1"
                >
                  <path d="M3.555 2.118L2 15h2.712l.362-4.126c.281-1.141.908-1.51 1.787-2.013l6.365-2.684c.457-.168.774-.57.774-1.04 0-.47-.316-.872-.774-1.04L5.384 1.111C4.248.843 3.821 1.014 3.555 2.118z"></path>
                </svg>
                OUR PICK
              </div>
            )}
            <h3 className="text-center text-gray-500 font-sans text-sm font-semibold w-full">
              {monthData.temperature}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageOne;

// <main
//   className="pt5 black-80 center"
//   style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
// >
//   <form className="measure">
//     <h2>Welcome! First things first...</h2>
//     <p style={{ color: "#C0C0C0" }}>You can always change them later.</p>
//     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//       <div className="mt3">
//         <label
//           className="db lh-copy f6 mb1"
//           htmlFor="full-name"
//           style={{ textAlign: "left" }}
//         >
//           Full Name
//         </label>
//         <input
//           className="f6 br2 ph3 pv2 mb2 dib black w-100"
//           type="text"
//           name="full-name"
//           id="full-name"
//           size="30"
//           placeholder="Steve Jobs"
//           style={{
//             borderStyle: "solid",
//             borderWidth: "1px",
//             borderColor: "#EAEEF5",
//           }}
//         />
//       </div>
//       <div className="mv3">
//         <label
//           className="db lh-copy f6 mb1"
//           htmlFor="display-name"
//           style={{ textAlign: "left" }}
//         >
//           Display Name
//         </label>
//         <input
//           className="f6 br2 ph3 pv2 mb2 dib black w-100"
//           type="text"
//           name="display-name"
//           id="display-name"
//           placeholder="Steve"
//           style={{
//             borderStyle: "solid",
//             borderWidth: "1px",
//             borderColor: "#EAEEF5",
//           }}
//         />
//       </div>
//     </fieldset>
//     <div>
//       <input
//         className="f6 grow br2 ph3 pv2 mb2 dib white"
//         style={{
//           borderStyle: "none",
//           width: "100%",
//           backgroundColor: "#664DE5",
//         }}
//         type="submit"
//         value="Create Workspace"
//         onClick={() => onButtonClick("pagetwo")}
//       />
//     </div>
//   </form>
// </main>
