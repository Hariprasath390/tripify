import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import image from "./components/images/zivame.png";
import "./components/styl.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://myunde.com/base/api/categories");
      const jsonData = await response.json();
      setCategories(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,

    watch,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: { categories: [] } });

  const checkedCategories = watch("categories", []);
  console.log(checkedCategories);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const onClear = () => {
    reset();
  };

  const handleCheckboxChange = (event, field, checked) => {
    if (checked) {
      field.onChange([...field.value, event.target.value]);
    } else {
      field.onChange(
        field.value.filter((value) => value !== event.target.value)
      );
    }
  };

  return (
    <div className="bg-[#fce4e1] p-5 flex-1">
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
          <h2 className="bg-[#c4ce5a] w-full h-2.5 rounded-tr-2xl rounded-tl-3xl"></h2>
          <div className="bg-white p-5 border border-[#c4ce5a]">
            <h2 className="font-medium text-2xl text-[#202124] py-3">
              Myunde Seller
            </h2>

            <h2 className="pb-5 text-md font-light">
              Speak about our target audience, Only platform focused on intimate
              wear sell
            </h2>
            <h2 className="pb-5 text-md font-light">Some metrics on Myunde </h2>
            <h2 className=" text-md font-light">- 200+ happy sellers </h2>
            <h2 className=" text-md font-light">- 500000+ monthly orders </h2>
            <h2 className=" text-md font-light">
              - 15 million+ happy shoppers{" "}
            </h2>
          </div>

          <div className="sm:flex justify-between items-center bg-white border-[#c4ce5a] border ">
            <div className=" p-5 ">
              <h2 className="pb-5 text-[#5f636d] font-semibold text-md ">
                hp612669@gmail.com
                <span className="text-blue-600"> Switch account </span>
              </h2>
              <div className="flex items-center justify-between w-28 -my-3  ">
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
            <div className="flex items-center justify-between w-28  sm:mr-10  ml-5 ">
              <div className=" w-7 h-7  ">
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

          <div className="bg-white  border border-[#c4ce5a] rounded-br-xl rounded-bl-xl">
            <h2 className=" text-md  p-5 text-[#d93025] py-3">
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
              className="border border-cyan-950 outline-none"
              placeholder="Your Answer"
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
              className="border border-cyan-950 outline-none "
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
              className="border border-cyan-950 outline-none"
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
            className="border border-cyan-950 outline-none"
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
              <FormControl>
                <h2 className="font-bold "> Categories</h2>
                <FormGroup>
                  {categories.length > 0 ? (
                    <Controller
                      name="categories"
                      control={control}
                      rules={{
                        required: "Please select at least one category",
                      }}
                      render={({ field }) => (
                        <>
                          {categories.map((category, index) => (
                            <FormControlLabel
                              key={index}
                              control={
                                <Checkbox
                                  value={category.id}
                                  checked={field.value.includes(
                                    String(category.id)
                                  )}
                                  onChange={(event, checked) =>
                                    handleCheckboxChange(event, field, checked)
                                  }
                                />
                              }
                              label={category.name}
                            />
                          ))}
                        </>
                      )}
                    />
                  ) : null}
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
              className="border border-cyan-950 outline-none"
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
                <Controller
                  name="are_you"
                  control={control}
                  rules={{ required: "Please select at least one category" }}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      {...field}
                      label="you"
                    >
                      <MenuItem value="Manufacturer">Manufacturer</MenuItem>
                      <MenuItem value="Distributor">Distributor</MenuItem>
                      <MenuItem value="Brand Representative">
                        Brand Representative
                      </MenuItem>
                      <MenuItem value="Retailer">Retailer</MenuItem>
                    </Select>
                  )}
                />
                {errors.are_you && <p>{errors.are_you.message}</p>}
              </FormControl>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="bg-white p-5 border border-gray-400 rounded-xl">
            <h2 className="py-5 font-bold"> Who Can Sell?</h2>
            <h2 className="">
              A manufacturer, brand owner, distributor with NOC from the brand
              can sell on Myunde
            </h2>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-5 border border-gray-400 rounded-xl">
            <h2 className="py-5 font-bold"> Why Sell on Myunde?</h2>
            <h2 className="">
              - Build you brand by selling on an Women only platform
            </h2>
            <h2>- You can opt for 1 of 3 Business Models available</h2>
            <h2>- TPL managed by Myunde</h2>
            <h2>- Seamless Payment</h2>
            <h2>- Only platform focused on Intimate wear </h2>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button type="submit"> submit</button>
          <button
            onClick={onClear}
            className="bg-pink-500 text-white uppercase border-none mt-40px py-3 px-10 text-sm font-thin tracking-wider hover:bg-pink-700 "
          >
            c l e a r
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
