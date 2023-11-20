import React, { useState } from "react";

import bali from "../components/caroimage/bali.jpg";
import maldives from "../components/caroimage/maldives.jpg";
import greece from "../components/caroimage/greece.jpg";
import singapore from "../components/caroimage/singapore.jpg";
import switzerland from "../components/caroimage/switzerland.jpg";
import thailand from "../components/caroimage/thailand.jpg";
import turkey from "../components/caroimage/turkey.jpg";
import europe from "../components/caroimage/europe.jpg";

const images = [
  bali,
  maldives,
  greece,
  singapore,
  switzerland,
  thailand,
  turkey,
  europe,
];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToFirstImage = () => {
//     setCurrentIndex(0);
//   };

//   const goToLastImage = () => {
//     setCurrentIndex(images.length - 1);
//   };

//   const goToNextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPreviousImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto">
//       <div
//         className="absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer"
//         onClick={goToPreviousImage}
//       >
//         &lt;
//       </div>
//       <div className="relative">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={`absolute w-40  transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>
//       <div
//         className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer"
//         onClick={goToNextImage}
//       >
//         &gt;
//       </div>
//     </div>
//   );
// };

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToLastImage = () => {
    setStartIndex(images.length - 5);
  };

  const goToNextImages = () => {
    if (startIndex + 5 < images.length) {
      setStartIndex(startIndex + 1);
    } else {
      goToLastImage();
    }
  };

  const goToPreviousImages = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute top-2 right-2 flex space-x-2">
        <div className="cursor-pointer" onClick={goToPreviousImages}>
          &lt;
        </div>
        <div className="cursor-pointer" onClick={goToNextImages}>
          &gt;
        </div>
      </div>
      <div className="flex space-x-2 overflow-hidden">
        {images.slice(startIndex, startIndex + 5).map((image, index) => (
          <div key={index} className="w-1/5">
            <img
              src={image}
              alt={`Image ${index + startIndex + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
