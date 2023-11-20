import React, { useState } from "react";
import "../../styles/search3.css";
import { useProcessDataContext } from "./ProcessDataContext";

// import "./PageThree.css";
const predefinedSuggestions = [
  "Bengaluru, BLR",
  "Trivandrum, TRV",
  "Delhi, DEL",
  "Kolkata, CCU",
  "Mumbai, BOM",
  "Chennai, MAA",
  "Hyderabad, HYD",
  "Jaipur, JAI",
  "Pune, PNQ",
  "Bhubaneshwar, BBI",
  "Patna, PAT",
  "Lucknow, LKO",
  "Aurangabad, IXU",
  "Kozhikode, CCJ",
  "Nagpur, NAG",
  "Kochi, COK",
  "Amritsar, ATQ",
  "Coimbatore, CJB",
  "Trichy, TRZ",
  "Indore, IDR",
  "Varanasi, VNS",
  "Madurai, IXM",
  "Guwahati, GAU",
  "Mangalore, IXE",
  "Vadodara, BDQ",
  "Visakhapatnam, VTZ",
  "Ahmedabad, AMD",
  "Raipur, RPR",
  "Chandigarh, IXC",
  "Udaipur, UDR",
  "Goa, GOI",
  "Ranchi, IXR",
  "Jodhpur, JDH",
  "Bikaner, BKB",
  "Kishangarh, KQH",
  "Kovalam, TRV",
  "Tirupati, TIR",
  "Jaisalmer, JSA",
  "Kannur, CNN",
  "Tezpur, TEZ",
  "Siliguri, IXB",
  "Imphal, IMF",
  "Aizwal, AJL",
  "Mysore, MYQ",
  "Jorhat, JRH",
  "Dibrugarh, DIB",
  "Agartala, IXA",
  "Shillong, SHL",
  "Agra, AGR",
  "Dehradun, DED",
  "Kullu, KUU",
  "Port Blair, IXZ",
  "Nashik, ISK",
  "Leh, IXL",
  "Srinagar, SXR",
  "Bhuj, BHJ",
  "Jammu, IXJ",
  "Fatehpur, KNU",
  "Kadapa, CDP",
  "Surat, STV",
  "Vijayawada, VGA",
  "Kandla, IXY",
  "Jamnagar, JGA",
  "Porbandar, PBD",
  "Rajkot, RAJ",
  "Bokaro, BKR",
  "Jabalpur, JLR",
  "Jamshedpur, IXW",
  "Bellary, BEP",
  "Belgaum, IXG",
  "Kalaburagi, GBI",
  "Hubli, HBX",
  "Satna, TNI",
  "Jabalpur, JLR",
  "Yavatmal, YTL",
  "Nanded, NDC",
  "Kolhapur, KLH",
  "Solapur, SSL",
  "Jalgaon, JLG",
  "Akola, AKD",
  "Aizawl, AJL",
  "Dimapur, DMU",
  "Jharsuguda, JRG",
  "Jeypore, PYB",
  "Pantnagar, PGH",
  "Ludhiana, LUH",
  "Kota, KTU",
  "Kanpur, KNU",
  "Gorakhpur, GOP",
  "Pithoragarh, NNS",
  "Rajahmundry, RJA",
  "Pasighat, IXT",
  "Bilaspur, PAB",
  "Diu, DIU",
  "Hisar, HSS",
  "Bokaro, BKR",
  "Jalandhar, AIP",
  "Shirdi, SAG",
  "Yavatmal, YTL",
  "Ajmer, KQH",
  "Solapur, SSL",
  "Jeypore, PYB",
  "Bathinda, BUP",
  "Pathankot, IXP",
  "Gangtok, PYG",
  "Balurghat, RGH",
  "Pithoragarh, NNS",
  "Ghaziabad, HDX",
  "Salem, SXV",
];
function fetchSuggestions(query) {
  const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
  return filteredSuggestions;
}

const PageThree = ({ onButtonClick }) => {
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
          <div className="flex justify-center items-center sm:pb-[36px] p-4">
            <div className="font-semibold text-gray-900  sm:text-[18px] text-[17px] font-sans text-center  ">
              Where are you travelling from?
            </div>
          </div>

          <div className="wrapper  ">
            <div className="search-input ">
              <a href="" target="_blank" hidden></a>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search airports"
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

          <ul className="wrapper2 ">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  setData({ ...data, airport: suggestion });
                  onButtonClick("pagefour");
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

export default PageThree;
