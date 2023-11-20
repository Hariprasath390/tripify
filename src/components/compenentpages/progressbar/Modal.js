import React, { useState } from "react";

function Modal({ onClose }) {
  const [adults, setAdults] = useState(2);

  const decrementAdults = () => {
    setAdults(adults - 1);
  };

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  return (
    <div>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-[#f7f8fb] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="">
                  <div>
                    <h2 className="font-bold text-gray-700  ">
                      How to configure your rooms?
                    </h2>
                  </div>
                  <div className="bg-white p-5">
                    <h2> ROOM 1 </h2>
                    <div className="flex items-stretch justify-start space-x-2">
                      <span className="text-lg">Adults</span>
                      <div className="flex items-center space-x-2">
                        <button
                          className="p-2 bg-white border rounded-full hover:bg-gray-100 focus:outline-none"
                          onClick={decrementAdults}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
                              clipRule="evenodd"
                              className="w-12 h-12 "
                            />
                          </svg>
                        </button>
                        <span className="text-lg">{adults}</span>
                        <button
                          className="p-2 bg-white border rounded-full hover:bg-gray-100 focus:outline-none"
                          onClick={incrementAdults}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 11a.5.5 0 01-.5.5H7v2a.5.5 0 11-1 0v-2H4a.5.5 0 010-1h2V8a.5.5 0 111 0v2h2a.5.5 0 01.5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <h2>Children -0 to 17 yrs</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
