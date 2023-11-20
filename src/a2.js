import React from "react";
import logo2 from "../src/components/images/logo2.png";
import ri from "../src/components/images/pyt.jpg";
import sit from "../src/components/images/sit.jpg";
import ggg from "../src/components/images/ggg.jpg";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Form from "./components/compenentpages/form";
import "./components/formstyle.css";
import Header from "./components/compenentpages/header";

function App() {
  return (
    <div className="bg-white">
      {/* <div className="bg-black text-white grid grid-cols-3  justify-between items-center w-full h-16 pb-1 z-50   sticky top-0 shadow-xl ">
        <div className="w-[20%] flex      ">
          <img src={logo2} alt="img" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center text-center text-xs font-thin   ">
          <h2> Destinations </h2>
          <h2 className=""> Honeymoon Destinations </h2>
          <h2> More </h2>
        </div>
        <div className="flex justify-center items-center ">
          <FiSearch />   bn           
        </div>
      </div> */}

      <div className="flex justify-center items-center  bg-black text-white z-50 px-3   sticky top-0 shadow-xl">
        <div className="flex justify-between  items-center  w-full max-w-[1250px] py-6">
          <div className="flex  w-24    ">
            <img src={logo2} alt="img" />
          </div>
          <div className=" justify-center items-center text-center  flex  space-x-4 ">
            <h2> Destinations </h2>
            <h2 className=""> Honeymoon Destinations </h2>
            <h2> More </h2>
          </div>
          <div className="flex justify-center items-center ">
            <FiSearch />
          </div>
        </div>
      </div>
      {/* <Header />  */}

      <div className="flex justify-center items-center mt-12 p-2">
        <div className="flex justify-between  flex-wrap items-start  w-full max-w-[1250px]">
          <div className="lg:w-[58%] ">
            <img
              src={ri}
              alt="img"
              className="image bg-cover bg-center h-[415px] w-full rounded-2xl overflow-hidden "
            />
            <h2 className="py-5 "> Written by Alex on July 31, 2023 </h2>

            <p className="text-3xl font-bold text-black leading-normal ">
              Zero Point in Sikkim – The magnificent road To Heaven and the
              marvel of India.
            </p>

            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-5 font-sans ">
              What is Heaven? A place where you feel the most alive and want to
              never leave and be eternal. That’s the same answer to the
              question, “What it feels like to be at{" "}
              <a
                href="https://pickyourtrail.com/blog/best-places-in-zero-point/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Zero Point in Sikkim (opens in a new tab)"
              >
                Zero Point in Sikkim
              </a>
              “. The place is an amazing work of nature and has impeccable
              beauty. This piece of nature’s art is located on the land of
              magical flora and fauna – Sikkim. Being one of the
              <a
                href="https://pickyourtrail.com/blog/seven-sisters-of-india/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label=" Seven Sisters of North East India (opens in a new tab)"
              >
                Seven Sisters of North East India
              </a>
              , Sikkim is the second smallest state in India. The state is
              perfectly located on the sides of Himalayas and shares its borders
              with China, Bhutan and Nepal. It is one of the hidden and
              unexplored gems in India. There are many places to visit and
              experiences to cherish, Zero Point in{" "}
              <a
                href="https://pickyourtrail.com/blog/places-to-visit-in-sikkim/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sikkim (opens in a new tab)"
              >
                Sikkim
              </a>
              is one such amazing place to experience in this North-Eastern
              State.
            </p>

            <img
              src={sit}
              alt="img"
              className="image bg-cover bg-center h-[500px] w-full rounded-2xl overflow-hidden "
            />

            <h2 className="py-5 "> Photo by Harsh Bhatt on Unsplash </h2>

            <p className="text-3xl font-bold text-black leading-normal ">
              What makes Zero Point in Sikkim Special?
            </p>

            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-4 font-sans">
              The Zero Point in Sikkim or Yumesamdong is a sublime destination
              for all the altitude junkies. Standing at an elevation of 15,300
              feet above mean sea level, the region provides you with beautiful
              sightseeing shots. You can also witness the convergence of three
              beautiful rivers and with all the snow-clad mountains, the Zero
              Point is nothing short of Heaven on earth. The road ends right
              here and you can’t find any civilization further. The oxygen
              levels here are pretty low due to the high altitude. Also, the
              path to ground zero is a bit nasty. But the wonderful reward you
              get at the end of the journey is worth every trouble.
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-1 font-sans">
              Also Read: Lachung Sikkim
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-4 font-sans">
              Zero Point is a prime tourist in Sikkim and the spectacle of the
              yaks grazing in the snow is something not to be missed. The
              natural beauty of the place will absolutely awestruck you. Zero
              Point in Sikkim is the answer to your childhood dream of playing
              with snow in an astonishing atmosphere. The place is covered with
              snow mostly throughout the year. All those rivers and snow-filled
              mountains will show glimpses of Switzerland. If you want to soak
              yourself with a chilling and adventurous encounter, Zero Point is
              Sikkim is just the place for you.
            </p>

            <img
              src={ggg}
              alt="img"
              className="image bg-cover bg-center h-[500px] w-full rounded-2xl overflow-hidden "
            />
            <h2 className="py-5 "> Photo by Harsh Bhatt on Unsplash </h2>

            <h2> Must Read: Best time to Visit Sikkim </h2>

            <p className="text-3xl font-bold text-black leading-normal ">
              How To Reach
            </p>

            <p className="text-black/70 text-xl space-y-4   py-4 font-sans">
              Sikkim is a very popular tourist destination and it is accessible
              from any part of the country. You can reach there by airways,
              railways or roadways from any point in the country. The nearest
              railway station to Gangtok is the New Jalpaiguri (NJP) in
              Siliguri. It connects Sikkim with all the major parts of India.
              You can also take a shared taxi from NJP to Gangtok and the cost
              for the same will be around INR 200-250. Once you reach Gangtok,
              you can start your journey to the amazing Zero Point in Sikkim.
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-1 font-sans">
              Due to the sharing of the border with China, the entry is possible
              only through guided tours which start from Gangtok. You will be
              requested to submit proof of your identity and two photographs.
              Please carry them to ensure a hassle-free and ease travel. You can
              also get yourself an all-inclusive tour of Lachung, Yumthang and
              Zero Point. The place is reachable only by a guided tour from
              Gangtok.
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-4 font-sans">
              The journey to the Zero Point in Sikkim is truly a journey to the
              Paradise and the locals believe that it ends the search of
              spirituality and self-discovery. The high passes and the altitude
              makes the journey tough and only the courageous can pass through
              it and enjoy all the wonders which this lovely locality posses.
              All the tiring and knee-breaking treks throughout the way is
              compensated by a heavenly view. The whole journey and the
              destination provide you with exceeding levels of joy and
              happiness. Start planning your own trip to this utopia and you can
              be certain to be hypnotised by the beauty of nature.
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-4 font-sans">
              {" "}
              Unwrap the World with Pickyourtrail!
            </p>
            <p className="text-black/70 text-xl space-y-4  leading-relaxed py-4 font-sans">
              If you are looking for a perfect international trip, Pickyourtrail
              offers you the best International tour packages where you can
              customize your itinerary.{" "}
            </p>
          </div>

          <div className="bg-[#000000] h-full rounded-xl overflow-hidden lg:w-[35%] p-4  lg:sticky top-20  ">
            <div className="flex ">
              <svg
                className="w-16 h-16 text-white "
                fill="white"
                stroke="currentColor"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7018 0.00253328L12.7748 1.13074C12.1828 1.18447 11.6984 1.56054 11.5908 2.15151L5.02485 24.2322C4.86339 25.0918 5.50922 25.8439 6.37033 25.7902L11.8599 25.5216C12.4519 25.4679 12.9363 26.0051 12.8824 26.5961L8.68455 48.7305C8.52309 49.8587 9.92239 50.4497 10.6759 49.5901L35.4327 21.0087C35.9171 20.4178 35.4865 19.5582 34.733 19.6119L28.49 20.0417C27.7365 20.0954 27.1984 19.2896 27.5751 18.5911L36.9934 1.93661C37.5316 0.754674 37.1549 -0.051191 35.7018 0.00253328Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <h2 className="text-white text-2xl font-bold ">
                Access exciting travel deals at best prices
              </h2>
            </div>
            <div className="py-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
