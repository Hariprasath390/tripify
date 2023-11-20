import React from "react";

import "../styles/detailpage.css";

import dives1 from "../compenentpages/DetailImage/dives1.jpg";
import dives2 from "../compenentpages/DetailImage/dives2.jpg";
import dives3 from "../compenentpages/DetailImage/dives3.jpg";
import dives4 from "../compenentpages/DetailImage/dives4.jpg";
import dives5 from "../compenentpages/DetailImage/dives5.jpg";
import dives6 from "../compenentpages/DetailImage/dives6.jpg";
import dives7 from "../compenentpages/DetailImage/dives7.jpg";
import dives8 from "../compenentpages/DetailImage/dives8.jpg";

import mspot1 from "../compenentpages/DetailImage/mspot1.jpg";
import mspot2 from "../compenentpages/DetailImage/mspot2.jpg";
import mspot3 from "../compenentpages/DetailImage/mspot3.jpg";
import mspot4 from "../compenentpages/DetailImage/mspot4.jpg";
import mspot5 from "../compenentpages/DetailImage/mspot5.jpg";
import mspot6 from "../compenentpages/DetailImage/mspot6.jpg";
import mspot7 from "../compenentpages/DetailImage/mspot7.jpg";
import mspot8 from "../compenentpages/DetailImage/mspot8.jpg";
import mspot9 from "../compenentpages/DetailImage/mspot9.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop2: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1024, min: 750 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 750, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const CustomRight = ({ onClick }) => (
//   <div
//     className="  absolute left-[85%] 2xl:left-[93%]  lg:left-[90%] md:left-[88%] sm:left-[90%] top-0 bg-[#fcf3e9] rounded-full border border-[#e9dbca]  "
//     onClick={onClick}
//   >
//     <svg
//       className="w-8 h-8   text-black svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeLinejoin="arcs"
//     >
//       <path d="M15 18l-6-6 6-6" />
//     </svg>
//   </div>
// );

// const CustomLeft = ({ onClick }) => (
//   <div
//     className=" absolute right-[1%] top-0 bg-[#fcf3e9] rounded-full border border-[#e9dbca] "
//     onClick={onClick}
//   >
//     <svg
//       className="w-8 h-8   text-black svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeLinejoin="arcs"
//     >
//       <path d="M9 18l6-6-6-6" />
//     </svg>
//   </div>
// );

function DetailPage() {
  return (
    <div>
      <div className="flex  justify-center items-center ">
        <div className="w-[1024px]">
          <div className="flex items-center  ">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#0ce3ab">
              <path d="M6.006 3.89A1 1 0 017 3h8a1 1 0 01.961 1.275L14.326 10H18a1 1 0 01.743 1.669l-9 10a1 1 0 01-1.735-.793L8.868 14H6a1 1 0 01-.994-1.11l1-9z"></path>
            </svg>

            <h3 className="font-sans font-semibold text-[16px]">Flash Deals</h3>
          </div>
          <h3 className="text-gray-500 font-sans font-semibold text-[15px] space-x-1 mb-[20px]">
            Limited-time discounts on luxury resorts to add more charm to your
            island getaway
          </h3>

          <div className="flex justify-between flex-wrap  ">
            <div className="mb-[15px]">
              <div className="img-wrapper ">
                <img
                  src={dives1}
                  alt="dives1"
                  className="w-[500px] h-[556px] inner-img"
                />
              </div>
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives2} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives3} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>

            <div className="mb-[15px]">
              <img src={dives4} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives5} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives6} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives7} alt="dives1" className="w-[244px] h-[200px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="mb-[15px]">
              <img src={dives8} alt="dives1" className="w-[244px] h-[200px] " />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="text-[24px]">Honeymoon Friendly</h2>
            <div className="flex justify-between items-center py-[10px]">
              <div>
                <h3 className="font-sans text-[17px]">
                  Experience luxury and comfort with your special one in the
                  tropical honeymoon resorts in the Maldives
                </h3>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <span className="text-[17px] text-[#1895b3]">
                  VIEW ALL RESORT{" "}
                </span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="#1895b3"
                >
                  <path d="M7.192 21.91a1.402 1.402 0 010-1.82L14.384 12 7.192 3.91a1.402 1.402 0 010-1.82 1.055 1.055 0 011.616 0l8 9a1.402 1.402 0 010 1.82l-8 9a1.055 1.055 0 01-1.616 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            // autoPlay={true}
            // autoPlaySpeed={4000}
            // infinite={false}
            removeArrowOnDeviceType={["mobile"]}
            className="  "
          >
            <div className=" w-[323.548px] h-[271.94px] ">
              <img src={mspot1} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500 w-[270px]">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className=" w-[323.548px] h-[271.94px]  ">
              <img src={mspot2} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="  w-[323.548px] h-[271.94px]  ">
              <img src={mspot3} alt="bali " className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="  w-[323.548px] h-[271.94px]  ">
              <img src={mspot4} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>

            <div className=" w-[323.548px] h-[271.94px]  ">
              <img src={mspot5} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>

            <div className="  w-[323.548px] h-[271.94px]  ">
              <img src={mspot6} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>

            <div className=" w-[323.548px] h-[271.94px]  ">
              <img src={mspot7} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
            <div className="  w-[323.548px] h-[271.94px]  ">
              <img src={mspot8} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>

            <div className=" w-[323.548px] h-[271.94px] ">
              <img src={mspot9} alt="bali" className="w-[270px] h-[170px]" />
              <h3 className="font-sans font-bold text-[18px] text-gray-500">
                Paradise resort sanhok
              </h3>
              <h2 className="inline-flex  items-center text-[13px] gap-1 text-gray-600 ">
                4.5
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="rgb(255,201,51)"
                  >
                    <path d="M10.654 2.47c.55-1.117 2.142-1.117 2.692 0l2.419 4.916 5.366.778c1.235.179 1.724 1.701.823 2.566l-3.878 3.723.937 5.384c.212 1.221-1.065 2.159-2.166 1.59L12 18.925l-4.847 2.502c-1.102.569-2.378-.369-2.166-1.59l.937-5.384-3.878-3.723c-.901-.865-.413-2.387.823-2.566l5.366-.778 2.42-4.916z"></path>
                  </svg>
                </span>
                hotel
              </h2>

              <h3 className="text-[17px] gap-1  font-bold text-[#18b0d7] ">
                ₹ 1,88,098
                <span className="text-[13px] font-sans font-semibold text-gray-600  ">
                  for 3 nights
                </span>
              </h3>
              <h3 className="text-[13px] gap-1 text-gray-600 font-sans  ">
                Starting price/couple
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
