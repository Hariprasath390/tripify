import React, { useRef, useState } from "react";
// Import Swiper React components
// Import Swiper styles
// import "./styles.css";
// import required modules
// import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import bali from "../caroimage/bali.jpg";
import maldives from "../caroimage/maldives.jpg";
import greece from "../caroimage/greece.jpg";
import singapore from "../caroimage/singapore.jpg";
import switzerland from "../caroimage/switzerland.jpg";
import thailand from "../caroimage/thailand.jpg";
import turkey from "../caroimage/turkey.jpg";
import europe from "../caroimage/europe.jpg";

import mauritius from "../caroimage/mauritius.jpg";
import vietnam from "../caroimage/vietnam.jpg";
import srilanka from "../caroimage/srilanka.jpg";
import dubai from "../caroimage/dubai.jpg";

import maldives2 from "../caroimage/maldives2.jpg";
import thailand2 from "../caroimage/thailand2.jpg";
import singapore2 from "../caroimage/singapore2.jpg";
import bali2 from "../caroimage/bali2.jpg";

import malvid1 from "../videos/maldives.mp4";
import malvid2 from "../videos/maldives2.mp4";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop2: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 4,
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

const CustomRight = ({ onClick }) => (
  <div
    className="  absolute left-[85%] 2xl:left-[93%]  lg:left-[90%] md:left-[88%] sm:left-[90%] top-0 bg-[#fcf3e9] rounded-full border border-[#e9dbca]  "
    onClick={onClick}
  >
    <svg
      className="w-8 h-8   text-black svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="arcs"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </div>
);

const CustomLeft = ({ onClick }) => (
  <div
    className=" absolute right-[1%] top-0 bg-[#fcf3e9] rounded-full border border-[#e9dbca] "
    onClick={onClick}
  >
    <svg
      className="w-8 h-8   text-black svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="arcs"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </div>
);

function SwiperComp() {
  return (
    <div className=" select-none">
      <div className="pt-16  ">
        {/* <>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            navigation={true} // Add navigation prop
            // modules={[Navigation]}
            modules={[Navigation]}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[FreeMode, Pagination]}
            className="mySwiper sm:w-[78%] p-10 "
          >
            <SwiperSlide>
              <img src={singapore} alt="bali" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={thailand} alt="bali" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={greece} alt="bali" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={turkey} alt="bali" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bali} alt="bali" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={switzerland} alt="bali" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={maldives} alt="bali" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={europe} alt="bali" />
            </SwiperSlide>
          </Swiper>
        </> */}

        <div className="flex justify-center items-center m-5">
          <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-[1000px] 2xl:max-w-[1250px]">
            <h3 className="  font-bold text-lg text-center xs:text-start text-[#263140] -mb-10 ">
              LONG WEEKEND SPOTLIGHT
            </h3>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={4000}
              infinite={true}
              customLeftArrow={<CustomRight />}
              customRightArrow={<CustomLeft />}
              removeArrowOnDeviceType={["mobile"]}
              className=" select-none"
            >
              <div className="pt-16 p-1 flex justify-center w-full select-none">
                <img src={singapore} alt="bali" className=" select-none " />
              </div>
              <div className="pt-16 p-1 flex justify-center w-full select-none">
                <img src={thailand} alt="bali" />
              </div>

              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={greece} alt="bali" />
              </div>

              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={turkey} alt="bali" />
              </div>
              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={bali} alt="bali" />
              </div>
              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={switzerland} alt="bali" />
              </div>
              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={maldives} alt="bali" />
              </div>

              <div className="pt-16 p-1 flex justify-center w-full">
                <img src={europe} alt="bali" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flex justify-center items-center pt-24 ">
          <div className="flex flex-wrap justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-[1000px] 2xl:max-w-[1250px]  ">
            <div className="w-full md:w-1/2 p-4">
              <video
                autoPlay
                muted
                loop
                className="w-full rounded-2xl "
                style={{ maxWidth: "100%" }}
                preload="auto"
              >
                <source src={malvid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <video
                autoPlay
                muted
                loop
                className="w-full rounded-2xl "
                style={{ maxWidth: "100%" }}
                preload="auto"
              >
                <source src={malvid2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="pt-24 ">
          <>
            {/* <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={true}
              navigation={true} // Add navigation prop
              // modules={[Navigation]}
              modules={[Navigation]}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[FreeMode, Pagination]}
              className="mySwiper sm:w-[78%]  "
            >
              <SwiperSlide>
                <img src={bali2} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={maldives2} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thailand2} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={singapore2} alt="bali" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={srilanka} alt="bali" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={vietnam} alt="bali" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={dubai} alt="bali" />
              </SwiperSlide>
            </Swiper> */}
            <div className="flex justify-center items-center m-5">
              <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-[1000px] 2xl:max-w-[1250px]">
                <h3 className="  font-bold text-lg text-center xs:text-start text-[#263140] -mb-10 ">
                  LONG WEEKEND SPOTLIGHT
                </h3>
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  infinite={true}
                  customLeftArrow={<CustomRight />}
                  customRightArrow={<CustomLeft />}
                  removeArrowOnDeviceType={["mobile"]}
                  className="  "
                >
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={bali2} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={maldives2} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={thailand2} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={singapore2} alt="bali" />
                  </div>

                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={srilanka} alt="bali" />
                  </div>

                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={vietnam} alt="bali" />
                  </div>

                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={dubai} alt="bali" />
                  </div>
                </Carousel>
              </div>
            </div>
          </>
        </div>

        <div className="pt-24 ">
          <>
            {/* <div className="flex justify-center">
              <h3 className=" sm:w-[78%]  font-bold text-lg text-[#263140] pt-5 pb-5 ">
                VISA ON ARRIVAL DESTINATIONS
              </h3>
            </div> */}

            {/* <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={true}
              navigation={true} // Add navigation prop
              // modules={[Navigation]}
              modules={[Navigation]}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[FreeMode, Pagination]}
              className="mySwiper sm:w-[78%]  "
            >
              <SwiperSlide>
                <img src={mauritius} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dubai} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={maldives2} alt="bali" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={vietnam} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bali2} alt="bali" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={thailand2} alt="bali" />
              </SwiperSlide>
            </Swiper> */}

            <div className="flex justify-center items-center m-5">
              <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-[1000px] 2xl:max-w-[1250px]  ">
                <h3 className="  font-bold text-lg text-center xs:text-start text-[#263140] -mb-10 ">
                  VISA ON ARRIVAL DESTINATIONS
                </h3>
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  infinite={true}
                  customLeftArrow={<CustomRight />}
                  customRightArrow={<CustomLeft />}
                  removeArrowOnDeviceType={["mobile"]}
                  className="  "
                >
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={mauritius} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={dubai} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={maldives2} alt="bali" />
                  </div>
                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={bali2} alt="bali" />
                  </div>

                  <div className="pt-16 p-1 flex justify-center w-full ">
                    <img src={thailand2} alt="bali" />
                  </div>
                </Carousel>
              </div>
            </div>
          </>
        </div>
      </div>

      <div className=" pt-5 ">
        <div className="bg-[#fcf3e9]">
          <div className="flex justify-center">
            <h3 className=" sm:w-[78%]  font-bold text-lg text-[#263140] pt-10  ">
              QUICK GETAWAY DESTINATIONS
            </h3>
          </div>
          <div className="flex justify-center">
            <h3 className=" sm:w-[78%]   text-[#263140] pt-1   font-line pb-5 ">
              Ideal for 3-5 days trip
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperComp;
