import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import malvid2 from "../videos/video.mp4";
import "../styles/dd.css";

import "../styles/sb.css";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" relative  w-full ">
          <header className=" absolute w-full">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-6 w-auto"
                    src="https://pyt-images.imgix.net/images/web_app/logo/pickyourtrail-logo-white.svg"
                    alt="PickYourTrail Logo"
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Popover.Group className="hidden lg:flex lg:gap-x-4">
                {/* <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"  >
                International Holidays
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover> */}
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-x-1 dropdown "
                >
                  International Holidays
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <ul className="dropdown-menu ">
                    <div className="grid grid-cols-3 text-center w-96 p-2 ">
                      <div className="text-start text-[14px] ">
                        <li className="">Bali</li>
                        <li>Dubai</li>
                        <li>Europe</li>
                        <li>Australia</li>
                        <li>Maldives</li>
                        <li>Mauritius</li>
                        <li>Australia</li>
                        <li>greece</li>
                      </div>

                      <div className="text-start text-[14px]  ">
                        <li>Sri Lanka Tour Packages</li>
                        <li>Thailand</li>
                        <li>Turkey</li>
                        <li>Switzerland</li>
                        <li>Spain</li>
                        <li>Italy</li>
                        <li>UK Tour Packages</li>
                      </div>

                      <div className="text-[14px] "> vietnam</div>
                    </div>
                  </ul>
                </a>

                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-x-1  dropdown"
                >
                  Honeymoon Getaways
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <ul className="dropdown-menu">
                    <div className="grid grid-cols-3 text-center  w-[650px]  p-2 ">
                      <div className="text-start text-[14px]">
                        <li>Ball Honeymoon</li>
                        <li>Dubai Honeymoon Packages</li>
                        <li>Europe Honeymoon Packages </li>
                        <li>Australia Honeymoon </li>
                        <li>Maldives Honeymoon </li>
                        <li>Mauritius Honeymoon Packages</li>
                        <li>Greece Honeymoon Packages </li>
                      </div>

                      <div className="text-start text-[14px]">
                        <li>Sri Lanka Honeymoon Packages</li>
                        <li>Thailand Honeymoon Packages</li>
                        <li>Turkey Honeymoon Packages</li>
                        <li>Switzerland Honeymoon Packages</li>
                        <li>Spain Honeymoon Packages</li>
                        <li>Italy Honeymoon Packages</li>
                        <li>UK Honeymoon Packages </li>
                      </div>

                      <div> vietnam Honeymoon Packages</div>
                    </div>
                  </ul>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-x-1  dropdown"
                >
                  Packages by Interest
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <ul className="dropdown-menu ">
                    <div className="w-60 h-64 p-2 text-start text-[14px]">
                      <li className="text-[14px]">
                        <h2 href="#">International Tour Packages</h2>
                      </li>
                      <li>
                        <h2 href="#">International Honeymoon</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages</h2>
                      </li>
                      <li>
                        <h2 href="#">Family Packages</h2>
                      </li>
                      <li>
                        <h2 href="#">Budget Packages</h2>
                      </li>
                      <li>
                        <h2 href="#">Luxury Packages</h2>
                      </li>
                    </div>
                  </ul>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold  text-white flex items-center gap-x-1  dropdown "
                >
                  Packages by City
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <ul className="dropdown-menu">
                    <div className="w-60 p-2 text-start">
                      <li>
                        <h2 href="#">Packages from Chennai</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Mumbai</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Delhi</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Bangalore</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Pune</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Ahmedabad</h2>
                      </li>
                      <li>
                        <h2 href="#">Packages from Hyderabad</h2>
                      </li>
                    </div>
                  </ul>
                </a>

                <div className="flex justify-center items-center dropdown left-2 ">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    id="radix-22-trigger-radix-6"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-22-content-radix-6"
                    className="PJLV PJLV-iPJLV-css atom-web-c-kVqlLw atom-web-c-kVqlLw-ikdUdtc-css dropdown"
                    data-radix-collection-item=""
                    style={{ fill: "white" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 11a1 1 0 100 2 1 1 0 000-2zm3 1a3 3 0 11-6 0 3 3 0 016 0zm4-1a1 1 0 100 2 1 1 0 000-2zm3 1a3 3 0 11-6 0 3 3 0 016 0zm4-1a1 1 0 100 2 1 1 0 000-2zm3 1a3 3 0 11-6 0 3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <ul className="dropdown-menu ">
                    <div className="w-36 p-2 text-start text-[14px]">
                      <li className="text-[14px]">
                        <h2 href="#">Testimonials</h2>
                      </li>
                      <li>
                        <h2 href="#">Visa</h2>
                      </li>
                      <li>
                        <h2 href="#">FAQ</h2>
                      </li>
                      <li>
                        <h2 href="#">Contact Us</h2>
                      </li>
                      <li>
                        <h2 href="#">Blog</h2>
                      </li>
                      <li>
                        <h2 href="#">About Us</h2>
                      </li>
                    </div>
                  </ul>
                </div>

                <div className="flex justify-center items-center dropdown left-2">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    id="radix-22-trigger-radix-5"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-22-content-radix-5"
                    className="PJLV PJLV-iPJLV-css atom-web-c-kVqlLw atom-web-c-kVqlLw-ikdUdtc-css"
                    data-radix-collection-item=""
                    style={{ fill: "white" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.132 4.432c.35-.333.641-.432.868-.432.227 0 .518.1.868.432.354.337.719.872 1.047 1.61.561 1.263.958 2.991 1.06 4.958h-5.95c.102-1.967.499-3.695 1.06-4.958.328-.738.693-1.273 1.047-1.61zM7.023 11c.103-2.204.545-4.218 1.235-5.77.06-.136.123-.269.188-.399A8.007 8.007 0 004.062 11h2.961zm-2.961 2h2.961c.103 2.204.545 4.218 1.235 5.77.06.136.123.269.188.399A8.006 8.006 0 014.062 13zm4.964 0h5.948c-.101 1.966-.498 3.695-1.06 4.958-.327.738-.692 1.273-1.046 1.61-.35.333-.641.432-.868.432-.227 0-.518-.1-.868-.432-.354-.337-.719-.872-1.047-1.61-.561-1.263-.958-2.991-1.06-4.958zm7.95 0c-.102 2.204-.544 4.218-1.234 5.77-.06.136-.123.269-.188.399A8.006 8.006 0 0019.938 13h-2.961zm2.962-2a8.006 8.006 0 00-4.384-6.169c.065.13.128.263.188.399.69 1.552 1.132 3.566 1.235 5.77h2.961zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <ul className="dropdown-menu">
                    <div className="w-60 p-2 text-start">
                      <li>
                        <h2 href="#">PYT - India</h2>
                      </li>
                      <li>
                        <h2 href="#">PYT - United Arab Emirates</h2>
                      </li>
                      <li>
                        <h2 href="#">PYT - United States</h2>
                      </li>
                    </div>
                  </ul>
                </div>

                {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                id="radix-22-trigger-radix-5"
                data-state="closed"
                aria-expanded="false"
                aria-controls="radix-22-content-radix-5"
                className="PJLV PJLV-iPJLV-css atom-web-c-kVqlLw atom-web-c-kVqlLw-ikdUdtc-css"
                data-radix-collection-item=""
              >
                <path
                  fillRule="evenodd"
                  d="M11.132 4.432c.35-.333.641-.432.868-.432.227 0 .518.1.868.432.354.337.719.872 1.047 1.61.561 1.263.958 2.991 1.06 4.958h-5.95c.102-1.967.499-3.695 1.06-4.958.328-.738.693-1.273 1.047-1.61zM7.023 11c.103-2.204.545-4.218 1.235-5.77.06-.136.123-.269.188-.399A8.007 8.007 0 004.062 11h2.961zm-2.961 2h2.961c.103 2.204.545 4.218 1.235 5.77.06.136.123.269.188.399A8.006 8.006 0 014.062 13zm4.964 0h5.948c-.101 1.966-.498 3.695-1.06 4.958-.327.738-.692 1.273-1.046 1.61-.35.333-.641.432-.868.432-.227 0-.518-.1-.868-.432-.354-.337-.719-.872-1.047-1.61-.561-1.263-.958-2.991-1.06-4.958zm7.95 0c-.102 2.204-.544 4.218-1.234 5.77-.06.136-.123.269-.188.399A8.006 8.006 0 0019.938 13h-2.961zm2.962-2a8.006 8.006 0 00-4.384-6.169c.065.13.128.263.188.399.69 1.552 1.132 3.566 1.235 5.77h2.961zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a> */}
              </Popover.Group>
              {/*  <div className="group relative z-50   text-white">
              <p className="flex items-center gap-x-1">
                dropdown{" "}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </p>
              <div className="bg-white hidden group-hover:block absolute text-black p-2  ">
                <a href="#" className="text-sm font-semibold leading-6    ">
                  International Holidays
                </a>

                <a
                  href="#"
                  className="text-sm font-semibold leading-6  flex items-center gap-x-1  "
                >
                  Honeymoon Getaways
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6  flex items-center gap-x-1  "
                >
                  Packages by Interest
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6  flex items-center gap-x-1  "
                >
                  Packages by City
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div> */}

              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-10" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              Product
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {[...products, ...callsToAction].map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {item.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Marketplace
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          <div className="  bg-cover  bg-repeat bg-position-stable  ">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              style={{ width: "100%", height: "480px", objectFit: "cover" }}
            >
              <source src={malvid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="  absolute   ">
          <div className="flex justify-center items-center ">
            <div className="p-5 ">
              <h5 className="white text-xl  md:text-4xl italic font-bold text-white">
                Plan your next &nbsp;
                <strong className="text-[#94f952] font-serif italic">
                  Hassle - free&nbsp;
                </strong>
                Holidays&nbsp;
              </h5>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/input">
              <div className="relative p-6 sm:p-12 w-full sm:max-w-2xl sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-full relative p-3">
                  <form
                    role="form"
                    className="relative flex flex-col sm:flex-row items-center z-50 bg-white rounded-full"
                  >
                    <input
                      type="text"
                      placeholder="Search countries, cities..."
                      className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none mb-3 sm:mb-0 sm:mr-3"
                    />
                    <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                      Search
                    </button>
                  </form>
                  <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
                  <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
                  <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                  <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
