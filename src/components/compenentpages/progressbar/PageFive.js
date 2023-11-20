import React, { useState } from "react";

import heart from "../../caroimage/heart.jpg";
import family from "../../caroimage/family.jpg";
import cele from "../../caroimage/cele.jpg";
import solo from "../../caroimage/solo.jpg";
import { useProcessDataContext } from "./ProcessDataContext";

import Modal from "./Modal";

function PageFive({ onButtonClick }) {



  const { data, setData } = useProcessDataContext();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  // Create an array of objects representing the data
  const travelerData = [
    {
      label: "Couples",
      imageSrc: heart,
    },
    {
      label: "Family",
      imageSrc: family,
    },
    {
      label: "Friends",
      imageSrc: cele,
    },
    {
      label: "Solo",
      imageSrc: solo,
    },
  ];



  const openModal = (label) => {
    setData({ ...data, type: label });
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  }; 

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-[768px]">
          <div className="font-semibold text-gray-900 sm:text-[18px] text-[17px] font-sans text-center pt-2">
            Who is traveling with you?
          </div>

          <div className="flex flex-wrap items-center sm:justify-start justify-center gap-[12px] pt-10">
            {travelerData.map((item, index) => (
              <div
                key={index}
                className="md:w-[181px] h-[272px] w-[89.98px] flex flex-col items-center justify-center border rounded-2xl border-[#D4D4D4] hover-item"
                // onClick={() => {
                //   setData({ ...data, type: item.label });
                //   onButtonClick("pagesix");
                // }} 
                onClick={() => openModal()}
              >
                <img
                  src={item.imageSrc}
                  alt="traveler"
                  className="w-[128px] h-[128px] rounded-full"
                />
                <h3 className="w-[54.42px] h-[74px] flex justify-center items-center text-center text-[16px] font-[600]">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Modal content here */}
          {/* You can pass data and additional content to your modal */}
        </Modal>
      )}
    </div>
  );
}

export default PageFive;
