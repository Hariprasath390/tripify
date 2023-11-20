import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rd1 from "../compenentpages/Roomdetailsimage/rd1.jpg";
import rd2 from "../compenentpages/Roomdetailsimage/rd2.jpg";
import rd3 from "../compenentpages/Roomdetailsimage/rd3.jpg";
import rd4 from "../compenentpages/Roomdetailsimage/rd4.jpg";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const rooDetail = [
  {
    image: rd1,
    roomname: "split stay",
  },
  {
    image: rd1,
    roomname: "split stay",
  },
  {
    image: rd2,
    roomname: "split stay",
  },
  {
    image: rd2,
    roomname: "split stay",
  },
  {
    image: rd3,
    roomname: "Beach Bungalow",
  },
  {
    image: rd4,
    roomname: "Beach Bungalow",
  },
];

const facil = [
  {
    facility: "Free Wifi",
  },
  {
    facility: "Baby Sitting",
  },
  {
    facility: "Water Sports",
  },
  {
    facility: "Gym",
  },
  {
    facility: "Restaurant",
  },
  {
    facility: "Indoor Games",
  },
  {
    facility: "Boutique",
  },
  {
    facility: "Mini Bar",
  },
  {
    facility: "Diving Centre",
  },
  {
    facility: "Spa",
  },
  {
    facility: "Laundry",
  },
  {
    facility: "Beach Towel",
  },
];

function Roomdetails() {
  return (
    <div className="relative ">
      <div className="flex justify-center items-center sticky top-0 z-20 bg-white border border-gray-200 w-full h-[69px] overflow-x-auto">
        <div className="flex lg:w-[1152px] md:w-[736px] sm:w-[409px] w-[304px] h-[44px] text-[13px] font-sans gap-7 text-gray-600 py-2 bg-white ">
          <h2 className="w-[90px] ">Room Details</h2>
          <h2 className="w-[77.4px]">Water Sports</h2>
          <h2>Highlights</h2>
          <h2>Amenties</h2>
          <h2>Overview</h2>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center    ">
          <div className="lg:ml-14 md:ml-2 max-w-[735.98px] w-full ">
            <div className="md:px-0 px-[16px] w-full">
              <div className="max-w-[735.98px] w-full flex flex-wrap gap-1 justify-center">
                <h3 className="max-w-[735.98px] w-full h-[32px] md:text-start text-center  lg:w-[735.98px]  md:w-[563.33px]  ">
                  Amaya Kuda Rah Room Options
                </h3>
                {rooDetail.map((roomDetail, index) => (
                  <div key={index} className="">
                    <img
                      src={roomDetail.image}
                      alt={roomDetail.roomname}
                      className="  object-cover w-[140px]  h-[168px]  lg:w-[241.3px] lg:h-[240.3px] md:w-[184.4px] md:h-[240px] sm:w-[261px] sm:h-[168px]"
                    />
                    <p className="h absolute pl-[12px] sm:text-[15px] text-[12px] font-[700] -mt-8 text-white ">
                      {roomDetail.roomname}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:px-0 px-[16px] w-full">
              <div className="max-w-[735.98px] w-full flex flex-wrap gap-1 justify-center">
                <h3 className="max-w-[735.98px] w-full h-[32px] md:text-start text-center   lg:w-[735.98px] md:w-[563.33px]  ">
                  Water Sports Activities
                </h3>
                {rooDetail.map((roomDetail, index) => (
                  <div key={index} className="">
                    <img
                      src={roomDetail.image}
                      alt={roomDetail.roomname}
                      className="  object-cover w-[140px]  h-[168px]  lg:w-[241.3px] lg:h-[240.3px] md:w-[184.4px] md:h-[240px] sm:w-[261px] sm:h-[168px]"
                    />
                    <p className="h absolute pl-[12px] sm:text-[15px] text-[12px]  font-[700] -mt-8 text-white ">
                      {roomDetail.roomname}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:px-0 px-[16px] w-full">
              <div className="max-w-[735.98px] w-full flex flex-wrap gap-1 justify-center">
                <h3 className="max-w-[735.98px] w-full h-[32px] md:text-start text-center  lg:w-[735.98px] md:w-[563.33px]  ">
                  Additional Property Highlights
                </h3>
                {rooDetail.map((roomDetail, index) => (
                  <div key={index} className="">
                    <img
                      src={roomDetail.image}
                      alt={roomDetail.roomname}
                      className="  object-cover w-[140px]  h-[168px]  lg:w-[241.3px] lg:h-[240.3px] md:w-[184.4px] md:h-[240px] sm:w-[261px] sm:h-[168px]"
                    />
                    <p className="absolute pl-[12px] sm:text-[15px] text-[12px]  font-[700] -mt-8 text-white ">
                      {roomDetail.roomname}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" md:px-0 px-[20px]">
              <div>
                <h2 className="font-sans text-gray-900 text-[20px] mb-[10px] ">
                  Amenties
                </h2>
                <ul className="grid grid-cols-3 ">
                  {facil.map((facility, index) => (
                    <li className="flex items-center gap-2 width-[fit-content] sm:text-[13px] text-[11px] text-gray-700 py-[10px] ">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="PJLV PJLV-iPJLV-css"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.774 5.367a1 1 0 01-.14 1.407c-2.657 2.173-4.848 4.846-6.383 6.995a44.211 44.211 0 00-1.764 2.665 31.758 31.758 0 00-.572.976l-.027.05-.006.012-.002.002a1 1 0 01-1.48.326l-4-3a1 1 0 011.2-1.6l3.1 2.325.079-.131a46.181 46.181 0 011.845-2.788c1.59-2.226 3.899-5.053 6.743-7.38a1 1 0 011.407.14z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {facility.facility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="py-[20px] text-[20px] font-[300]">
                  Amaya Kuda Rah Maldives Resort
                </h3>
                <h3 className="text-[#333333] text-[24px] py-[10px] font-[500] ">
                  Amaya Kuda Rah Resort, Maldives
                </h3>
                <p className="font-sans texrt-[16px] text-[#333333] font-[400]">
                  With its immaculate white sandy beaches, translucent turquoise
                  waters, and opulent resorts, Maldives tourism presents an
                  idyllic tropical haven, attracting beach enthusiasts and
                  individuals in pursuit of serenity and rejuvenation. The Amaya
                  Kuda Rah resort is a captivating destination in the Maldives.
                  Experience the sheer luxury and natural beauty of this resort,
                  with our Maldives tour packages and Maldives water villa
                  packages. Indulge in exquisite dining, relax in stunning
                  villas with panoramic views, and immerse yourself in the
                  paradise of the Maldives at Amaya Amaya Kuda Rah resort
                </p>
                <h3 className="text-[#333333] text-[24px] py-[10px] font-[500] ">
                  All Inclusive Resort/Water Villa
                </h3>
                <p className="font-sans texrt-[16px] text-[#333333] font-[400]">
                  With its immaculate white sandy beaches, translucent turquoise
                  waters, and opulent resorts, Maldives tourism presents an
                  idyllic tropical haven, attracting beach enthusiasts and
                  individuals in pursuit of serenity and rejuvenation. The Amaya
                  Kuda Rah resort is a captivating destination in the Maldives.
                  Experience the sheer luxury and natural beauty of this resort,
                  with our Maldives tour packages and Maldives water villa
                  packages. Indulge in exquisite dining, relax in stunning
                  villas with panoramic views, and immerse yourself in the
                  paradise of the Maldives at Amaya Amaya Kuda Rah resort
                </p>
                <h3 className="text-[#333333] text-[24px] py-[10px] font-[500]">
                  Basic Things to Know about Amaya Kuda Rah Resort
                </h3>

                <div class="font-arial flex items-center gap-4 text-[#333333]">
                  <h1 className="bg-black w-1 h-1 rounded-full"></h1>
                  <strong className="text-[14px] ">
                    Location and Address:
                  </strong>
                  Kuda Rah Island, South Ari Atoll, Maldives
                </div>

                <h3 className="text-[#333333] text-[21px] py-[10px] font-[500]">
                  Restaurants Near Amaya Kuda Rah Resort
                </h3>
                <div className="pl-5 mb-[20px]">
                  <span class="font-arial font-[400] text-[14px] text-[#333333]">
                    1.&nbsp;
                    <strong>Indian Pavilion</strong> - This restaurant
                    specializes in Indian cuisine and is known for its flavorful
                    curries, tandoori dishes, and aromatic spices.
                  </span>
                </div>

                <h3 className="text-[#333333] text-[21px] py-[10px] font-[500]">
                  Alternative Resorts near Amaya Kuda Rah Resort
                </h3>

                <div class="font-arial flex items-center gap-4 text-[#333333] mb-[10px]">
                  <h1 className="bg-black w-1 h-1 rounded-full"></h1>
                  Centara Grand Island Resort & Spa Maldives
                </div>
                <p className="font-[500] text-[14px] ">
                  Do not forget to check out Maldives honeymoon packages from
                  India to get the best deals for your honeymoon trip.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:ml-14  md:ml-1">
            <div className=" h-[90px] p-[24px]  border border-gray-200 fixed flex justify-center  bottom-0  w-full lg:w-auto  md:sticky md:top-16 z-50 right-0  bg-white  ">
              <button className="text-white bg-[#26CF96] h-[40px] lg:w-[360px] md:w-[190px]  w-[360px] rounded-md md:text-md text-sm  ">
                check availability and price
              </button>
            </div>
            <div className="border border-gray-200 lg:w-[410.86px] md:w-[240px]   lg:h-[246px] md:h-[400px] fixed mt-[50px]">
              <Slider {...sliderSettings}>
                <div>
                  <h3 className="text-[15px] font-[600] text-gray-[#2c2f42] font-sans  text-center p-5 ">
                    Why book with Pickyourtrail
                  </h3>
                  <h3 className="text-[13px] font-[500] text-gray-600 font-sans  text-center px-5 pb-5">
                    Completely satisfied with the trip organised by the PYT team
                    for my Srilanka & Maldives vacay
                  </h3>

                  <div className="flex items-center justify-start gap-3 px-5 pb-3">
                    <div className="flex items-center justify-center">
                      <div className="w-[64px] h-[64px] rounded-full relative bg-[#80e3c2] items-center flex justify-center">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          className="fill-current text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 12a9 9 0 1115.987 5.674A4 4 0 0015 14H9a4 4 0 00-3.987 3.674A8.962 8.962 0 013 12zm4 7.485A8.959 8.959 0 0012 21c1.85 0 3.57-.558 5-1.515V18a2 2 0 00-2-2H9a2 2 0 00-2 2v1.485zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a2 2 0 100 4 2 2 0 000-4zM8 9a4 4 0 118 0 4 4 0 01-8 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px]  font-sans font-[600]  text-gray-[#2c2f42]  ">
                        Prashant Mor
                      </span>
                      <span className="text-[15px]">
                        Jul 2018. Honeymoon Trip
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[15px] font-[600] text-gray-[#2c2f42] font-sans  text-center p-5">
                    Why book with Pickyourtrail
                  </h3>
                  <h3 className="text-[13px] font-[500] text-gray-600 font-sans  text-center px-5 pb-5">
                    They are the CSK of the travel industry. Great work with the
                    Maldives trip planning guys!
                  </h3>
                  <div className="flex items-center justify-start gap-3 px-5 pb-3">
                    <div className="flex items-center justify-center">
                      <div className="w-[64px] h-[64px] rounded-full relative bg-[#80e3c2] items-center flex justify-center">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          className="fill-current text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 12a9 9 0 1115.987 5.674A4 4 0 0015 14H9a4 4 0 00-3.987 3.674A8.962 8.962 0 013 12zm4 7.485A8.959 8.959 0 0012 21c1.85 0 3.57-.558 5-1.515V18a2 2 0 00-2-2H9a2 2 0 00-2 2v1.485zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a2 2 0 100 4 2 2 0 000-4zM8 9a4 4 0 118 0 4 4 0 01-8 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span cclassName="text-[15px]  font-sans font-[600]  text-gray-[#2c2f42]  ">
                        Prashant Mor
                      </span>
                      <span className="text-[15px]">
                        Jul 2018. Honeymoon Trip
                      </span>
                    </div>
                  </div>
                </div>
                {/* Add more slides as needed */}
                <div>
                  <h3 className="text-[15px] font-[600] text-gray-[#2c2f42] font-sans  text-center p-5">
                    Why book with Pickyourtrail
                  </h3>
                  <h3 className="text-[13px] font-[500] text-gray-600 font-sans  text-center px-5 pb-5 ">
                    Our stay at Vilu Reef Beach And Spa Resort was amazing. Our
                    trip planner did a great job recommending Maldives to us
                  </h3>
                  <div className="flex items-center justify-start gap-3 px-5  pb-3 ">
                    <div className="flex items-center justify-center">
                      <div className="w-[64px] h-[64px] rounded-full relative bg-[#80e3c2] items-center flex justify-center">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          className="fill-current text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 12a9 9 0 1115.987 5.674A4 4 0 0015 14H9a4 4 0 00-3.987 3.674A8.962 8.962 0 013 12zm4 7.485A8.959 8.959 0 0012 21c1.85 0 3.57-.558 5-1.515V18a2 2 0 00-2-2H9a2 2 0 00-2 2v1.485zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a2 2 0 100 4 2 2 0 000-4zM8 9a4 4 0 118 0 4 4 0 01-8 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px]  font-sans font-[600]  text-gray-[#2c2f42]  ">
                        Prashant Mor
                      </span>
                      <span className="text-[15px]">
                        Jul 2018. Honeymoon Trip
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomdetails;
