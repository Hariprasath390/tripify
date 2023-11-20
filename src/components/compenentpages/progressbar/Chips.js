import React from "react";
import { useProcessDataContext } from "./ProcessDataContext";

function Chips({ index, page }) {
  const { data, setData } = useProcessDataContext();

  return (
    <div className="flex gap-2 ">
      <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555] text-[600] max-w-[fit-content]">
        {data?.place && (
          <>
            <div>
              <p>{data?.place}</p>
            </div>

            <button
              className="p-1 text-xs "
              onClick={() => {
                setData(null);
                index("search");
                page("pageone");
              }}
            >
              <svg className="w-4 h-4 " viewBox="0 0 16 16">
                <path
                  className="fill-current"
                  d="M8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM1 8a7 7 0 1114 0A7 7 0 011 8zm9.78-2.78a.75.75 0 010 1.06L9.06 8l1.72 1.72a.75.75 0 11-1.06 1.06L8 9.06l-1.72 1.72a.75.75 0 11-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 011.06-1.06L8 6.94l1.72-1.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
            </button>
          </>
        )}
      </div>

      {(data?.month || data?.day) && (
        <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555]  text-[600] max-w-[fit-content]  ">
          <div>
            <h3 className="text-black">
              {data?.month} {data?.day && data?.day}
            </h3>
          </div>
        </div>
      )}
      {data?.airport && (
        <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555]  text-[600] max-w-[fit-content]  ">
          <div>
            <h3 className="text-black">{data?.airport.split(", ")[1]}</h3>
          </div>
        </div>
      )}
      {data?.days && (
        <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555]  text-[600] max-w-[fit-content]  ">
          <div>
            <h3 className="text-black">{data?.days}</h3>
          </div>
        </div>
      )}
      {data?.type && (
        <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555]  text-[600] max-w-[fit-content]  ">
          <div>
            <h3 className="text-black">{data?.type}</h3>
          </div>
        </div>
      )}
      {data?.city && (
        <div className="  flex bg-white border border-[#c3c3c3] pl-[16px] pr-[12px]  pt-[6px] pb-[6px] text-[16px] rounded-[8px] text-[#555555]  text-[600] max-w-[fit-content]  ">
          <div>
            <h3 className="text-black">{data?.city}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chips;
