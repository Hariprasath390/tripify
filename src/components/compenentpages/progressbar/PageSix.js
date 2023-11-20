import React, { useState } from "react";
import "../../styles/search6.css";
import { useProcessDataContext } from "./ProcessDataContext";

// import "./PageThree.css";
const predefinedSuggestions = [
  "Ubud, Indonesia",
  "Kuta, Indonesia",
  "Seminyak, Indonesia",
  "Nusa Dua, Indonesia",
  "Jimbaran, IndonesiaM",
  "tulamben, Indonesia",
  "batan, Indonesia",
  "canguu, Indonesia",
  "candi dasa, Indonesia",
  "legia, Indonesia",
  "Gili air, Indonesia",
  "Yogyakarta, Indonesia",
  "labuan Bajo, Indonesia",
  "Jakarta, Indonesia",
  "singaraja, Indonesia",
  "sukawati, Indonesia",
  "uluwatu,  Indonesia",
  "Munduk, Indonesia",
  "sanar, Indonesia",
  "bora budur, Indonesia",
  "Gila Trawangan, Indonesia",
];
function fetchSuggestions(query) {
  const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
  return filteredSuggestions;
}

const PageSix = ({ onButtonClick }) => {
  const { data, setData } = useProcessDataContext();

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(predefinedSuggestions);

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    const newSuggestions = fetchSuggestions(newInputValue);
    setSuggestions(newSuggestions);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-[768px] ">
          <div className="wrapper  ">
            <div className="search-input ">
              <a href="" target="_blank" hidden></a>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Find a city"
                className=""
              />
              <div className="autocom-box"></div>
              <div className="icon ">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="PJLV PJLV-ijvuWzD-css"
                  fill=" #9ca3af"
                >
                  <g clipPath="url(#prefix__clip0_327_16)">
                    <path
                      fillRule="evenodd"
                      d="M12 7A5 5 0 112 7a5 5 0 0110 0zm-2.197 5.306a6 6 0 11.846-.543l2.741 3.425a.5.5 0 01-.78.624l-2.807-3.506z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0_327_16">
                      <path d="M0 0h16v16H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="font-semibold text-gray-900  sm:text-[18px] text-[17px] font-sans text-center pt-4   ">
            Or, start with these popular choices
          </div>

          <ul className=" mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  setData({ ...data, airport: suggestion });
                  onButtonClick("pageseven");
                }}
                className="px-4 hover:fill-[#008b5c]  flex items-center justify-between py-5 text-xl cursor-pointer hover:bg-[#e5f9f3] font-semibold text-[#4b4c4c] font-sans hover:border-[#00b277] hover:border hover:rounded-xl hover:text-[#008b5c]"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PageSix;
