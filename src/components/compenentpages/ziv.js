import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import image from "./components/images/zivame.png";

import "./components/styl.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormLabel } from "@mui/material";

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="bg-[#fce4e1] p-5">
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="flex justify-center  items-center">
          <div className="py-5 ">
            <img
              className="w-full h-full border border-gray-400 rounded-md"
              src={image}
              alt="img"
            />
          </div>
        </div>

        <div className=" ">
          <h2 className="bg-[#ea4e3a] w-full h-2.5 rounded-tr-2xl rounded-tl-3xl"></h2>
          <div className="bg-white p-5 border border-gray-400 ">
            <h2 className="font-medium text-2xl text-[#202124] py-3">
              Zivame Seller
            </h2>

            <h2 className="pb-5">
              Speak about our target audience, Only platform focused on intimate
              wear sell
            </h2>
            <h2 className="pb-5">Some metrics on Zivame </h2>
            <h2>- 200+ happy sellers </h2>
            <h2>- 500000+ monthly orders </h2>
            <h2>- 15 million+ happy shoppers </h2>
          </div>

          <div className="flex justify-between items-center bg-white border-gray-400 border ">
            <div className=" p-5 ">
              <h2 className="pb-5 text-[#5f636d] font-semibold text-md ">
                hp612669@gmail.com
                <span className="text-blue-600"> Switch account </span>
              </h2>
              <div className="flex items-center justify-between w-28  ">
                <div className=" w-6 h-6  ">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M44 24V9H24H4V24V39H24"
                        stroke="#8c9093"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M40 31L32 39"
                        stroke="#8c9093"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M32 31L40 39"
                        stroke="#8c9093"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M4 9L24 24L44 9"
                        stroke="#8c9093"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2 className="text-sm font-bold text-black">Not shared</h2>
              </div>
            </div>
            <div className="flex items-center justify-between w-28 mr-10  ">
              <div className=" w-6 h-6  ">
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#5f636d"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect x="0" fill="none" width="20" height="20"></rect>
                    <g>
                      <path d="M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16h10c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5zm-6.3 5.9l-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h2 className="text-sm font-bold text-black">Not shared</h2>
            </div>
          </div>

          <div className="bg-white  border border-gray-400  rounded-br-xl rounded-bl-xl">
            <h2 className="font-medium text-sm p-5 text-[#d93025] py-3">
              * Indicates required question
            </h2>
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl  ">
            <label className="text-black font-bold  ">Your Name*</label>
            <input
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="border border-cyan-950 "
              placeholder="Your Answer"
              onCh
            />
            {errors?.firstName?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl ">
            <label className="text-black font-bold  ">Phone Number*</label>
            <input
              {...register("PhoneNumber", {
                required: true,
                pattern: /^\d{10}$/,
              })}
              className="border border-cyan-950"
              placeholder="Your Answer"
              maxLength={10}
            />
            {errors?.PhoneNumber?.type === "pattern" && (
              <p>Please enter a valid 10-digit phone number</p>
            )}
            {errors?.PhoneNumber?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl   ">
            <label className="text-black font-bold  ">E-mail*</label>
            <input
              {...register("Email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="border border-cyan-950"
              placeholder="Your Answer"
            />
            {errors?.Email?.type === "pattern" && (
              <p>Please enter a valid email address</p>
            )}
            {errors?.Email?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
        </div>

        <div className="bg-white p-5 border border-gray-400 rounded-xl  ">
          <label className="text-black font-bold  ">Brand Name*</label>
          <input
            {...register("BrandName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="border border-cyan-950"
            placeholder="Your Answer"
          />
          {errors?.BrandName?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          {errors?.BrandName?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl">
            <div>
              <FormControl error={true}>
                <FormLabel>Category *</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Lingerie"
                      />
                    }
                    label="Lingerie"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Nightwear"
                      />
                    }
                    label="Nightwear"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Swimwear"
                      />
                    }
                    label="Swimwear"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Jewellery"
                      />
                    }
                    label="Jewellery"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Beauty"
                      />
                    }
                    label="Beauty"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("categories", {
                          required: "Please select at least one category",
                        })}
                        value="Others"
                      />
                    }
                    label="Others"
                  />
                </FormGroup>
                {errors.categories && <p>{errors.categories.message}</p>}
              </FormControl>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl ">
            <label htmlFor="name" className="text-gray-800 font-bold py-2 ">
              Share sample URL of your product
            </label>

            <input
              {...register("URL", {
                required: true,
                pattern: /^(ftp|http|https):\/\/[^ "]+$/,
              })}
              className="border border-cyan-950"
              placeholder="Your Answer"
            />
            {errors?.URL?.type === "pattern" && <p>Please enter a valid URL</p>}
            {errors?.URL?.type === "required" && <p>This field is required</p>}
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl ">
            <h2 className="py-5 font-bold"> You Are *</h2>
            <div className="w-64">
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small-label">You</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  // {...register("you", { required: true })}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Manufacturer</MenuItem>
                  <MenuItem value={20}>Distributor</MenuItem>
                  <MenuItem value={30}>Brand Representative</MenuItem>
                  <MenuItem value={30}>Retailer</MenuItem>
                </Select>
                {/* {errors.you && <p>Please select an option</p>} */}
              </FormControl>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl">
            <h2 className="py-5 font-bold"> Who Can Sell?</h2>
            <h2 className="">
              A manufacturer, brand owner, distributor with NOC from the brand
              can sell on Zivame
            </h2>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-5 border border-gray-400 rounded-xl">
            <h2 className="py-5 font-bold"> Why Sell on Zivame?</h2>
            <h2 className="">
              - Build you brand by selling on an Women only platform
            </h2>
            <h2>- You can opt for 1 of 3 Business Models available</h2>
            <h2>- TPL managed by Zivame</h2>
            <h2>- Seamless Payment</h2>
            <h2>- Only platform focused on Intimate wear </h2>
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
