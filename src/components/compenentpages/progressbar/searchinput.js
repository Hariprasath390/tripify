import React, { useState } from "react";
// import "../styles/search.css";
import "../../styles/search.css";
import { Link, useNavigate } from "react-router-dom";
import { useProcessDataContext } from "./ProcessDataContext";

const predefinedSuggestions = [
  "Maldives",
  "Bali",
  "Mauritius",
  "Australia",
  "Europe",
  "Dubai",
  "Africa",
  "Singapore",
  "Thailand",
  "Europe",
  "USA",
  "Cuba",
  "Laos",
  "Qatar",
  "Kenya",
  "italy",
  "japan",
  "chana",
  "spain",
  "malta",
  "Rwanda",
  "Serbia",
  "Canada",
  "Africa",
  "Russia",
  "Latvia",
  "Poland",
  "Norway",
  "France",
  "Bahamas",
  "Bahrain",
  "Georgia",
  "England",
  "Ukraine",
  "Eurasia",
  "Belarus",
  "Estonia",
  "Finland",
  "Austria",
  "Iceland",
  "Germany",
  "Bali",
  "Mauritius",
  "Australia",
  "Europe",
  "Dubai",
  "Africa",
  "Singapore",
  "Thailand",
  "Europe",
  "USA",
  "Cuba",
  "Laos",
  "Qatar",
  "Kenya",
  "italy",
  "japan",
  "chana",
  "spain",
  "malta",
  "Rwanda",
  "Serbia",
  "Canada",
  "Africa",
  "Russia",
  "Latvia",
  "Poland",
  "Norway",
  "France",
  "Bahamas",
  "Bahrain",
  "Georgia",
  "England",
  "Ukraine",
  "Eurasia",
  "Belarus",
  "Estonia",
  "Finland",
  "Austria",
  "India",
];

function fetchSuggestions(query) {
  const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
  return filteredSuggestions;
}

function Searchinput({ setIndex }) {
  const { data, setData } = useProcessDataContext();

  // console.log(data);

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(predefinedSuggestions);

  // const navigate = useNavigate();
  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    const newSuggestions = fetchSuggestions(newInputValue);
    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    // setSelectedSuggestion(suggestion);
    console.log(suggestion);
    setData({ ...data, place: suggestion });
    console.log(data);
    setIndex("process");
  };

  return (
    <div className="bg-white">
      <section id="one" className="bg-white ">
        <div className="flex justify-center items-center  ">
          <div className="p-5  flex pt-12">
            <h5 className="text-xl  md:text-2xl font-serif text-black  flex justify-center items-center  flex-wrap">
              𝑤ℎ𝑎𝑡'𝑠 &nbsp;
              <div className="text-[#0fb56b] font-['Amithen'] mt-1 text-3xl ">
                your pick &nbsp;
              </div>
              𝑓𝑜𝑟 𝑦𝑜𝑢𝑟 𝑛𝑒𝑥𝑡 𝑣𝑎𝑐𝑎𝑡𝑖𝑜𝑛? &nbsp;
            </h5>
          </div>
        </div>

        <div className="wrapper">
          <div className="search-input ">
            <a href="" target="_blank" hidden></a>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Pick your destination.."
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
                <g>
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

        <div className="max-h-[590px] overflow-y-scroll scrollbar-hide -mt-12">
          {/* <Link to="/process" state={selectedSuggestion} > */}
          <ul className="wrapper2 ">
            {suggestions.slice(0, 9).map((suggestion, index) => (
              <li
                key={index}
                className="px-4 hover:fill-[#008b5c]  flex items-center justify-between py-5 text-xl cursor-pointer hover:bg-[#e5f9f3] font-semibold text-[#4b4c4c] font-sans hover:border-[#00b277] hover:border hover:rounded-xl hover:text-[#008b5c] "
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Searchinput;
