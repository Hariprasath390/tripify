import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import MultiStepProgressBar from "../../compenentpages/progressbar/MultiStepProgressBar";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./pageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import { useProcessDataContext } from "./ProcessDataContext";
import Chips from "./Chips";
import Searchinput from "./searchinput";

function Process() {
  const { data, setData } = useProcessDataContext();

  // console.log(data);

  const [page, setPage] = useState("pageone");

  const [index, setIndex] = useState("search");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive");
        break;
      case "6":
        setPage("pagesix");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <>
      {index === "search" && <Searchinput setIndex={setIndex} />}

      {index === "process" && (
        <div className=" p-[16px] absolute bg-white top-0 w-full z-50 h-screen  ">
          <div className="">
            <div className="flex justify-center items-center ">
              <div className="w-[760px]  ">
                <div className="flex items-center">
                  <h3 className="text-[#999899] font-semibold text-md mt-14 text-[14px] hidden sm:block pb-3">
                    ɴᴏᴡ ᴘʟᴀɴɴɪɴɢ ʏᴏᴜʀ ʜᴏʟɪᴅᴀʏ ᴛᴏ
                  </h3>
                </div>

                <div className="sm:flex grid grid-cols-3 justify-center sm:justify-start items-center">
                  <div className="">
                    <div className="border bg-slate-300 rounded-full w-8 h-8 flex items-center justify-center sm:hidden ">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="PJLV PJLV-ikzWdJT-css"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.22 3.702l-.334.376.334-.376a.933.933 0 00-1.318.078l-3.2 3.6a.933.933 0 000 1.24l3.2 3.6a.933.933 0 101.396-1.24L7.648 8l2.65-2.98a.933.933 0 00-.078-1.318z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <Chips index={setIndex} page={setPage} />

                  <div className="sm:hidden"></div>
                </div>
              </div>
            </div>
          </div>

          <MultiStepProgressBar
            page={page}
            onPageNumberClick={nextPageNumber}
            style={{ position: "relative " }}
          />
          {
            {
              pageone: <PageOne onButtonClick={nextPage} />,
              pagetwo: <PageTwo onButtonClick={nextPage} />,
              pagethree: <PageThree onButtonClick={nextPage} />,
              pagefour: <PageFour onButtonClick={nextPage} />,
              pagefive: <PageFive onButtonClick={nextPage} />,
              pagesix: <PageSix onButtonClick={nextPage} />,
              pageseven: <PageSeven />,
            }[page]
          }
        </div>
      )}
    </>
  );
}

export default Process;
