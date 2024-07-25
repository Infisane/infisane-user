/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, FocusEvent } from "react";
import dp from "../../../../assets/dp.png";
import upload from "../../../../assets/upload.svg";

const PersonalInfo = () => {
  const [img, setImg] = useState<any>("");
  const photoInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files.item(0);
      setImg(file);
      // if (file instanceof File) {
      //   try {
      //     const downloadURL = await upload(file);
      //     console.log("File uploaded successfully:", downloadURL);
      //     setImage([downloadURL]);
      //   } catch (error) {
      //     console.error("Error uploading file:", error);
      //   }
      //   if (!file) return;
      // }
      console.log(img);
    }
  };

  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <>
      <div className="pb-[24px] relativez-0">
        <h1 className="text-[#141417] text-[20px] font-[600] ">
          Personal information
        </h1>
        <p className="text-[#4F4E59]">
          Manage and update your personal information
        </p>
      </div>
      <div>
        <p className="text-[#141417] font-[500] pb-3">Basic information</p>

        <div className="flex flex-col items-start">
          <div className="relative z-0">
            <input
              type="file"
              className="hidden"
              ref={photoInput}
              onChange={handleValidChange}
            />
            <img src={dp} alt="" />
            <div className="absolute right-0 top-20 cursor-pointer">
              <img
                src={upload}
                alt=""
                onClick={() => {
                  if (photoInput.current) {
                    photoInput.current.click();
                  }
                }}
              />
            </div>
          </div>

          <form action="">
            <div className="flex flex-col items-start gap-[24px] w-[500px] mt-6">
              <div className="relative w-full">
                <input
                  type={"text"}
                  // value={value}
                  // onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                  placeholder=" "
                />
                <label
                  className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                >
                  Full Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={"text"}
                  // value={value}
                  // onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                  placeholder=" "
                />
                <label
                  className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                >
                  User Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={"text"}
                  // value={value}
                  // onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                  placeholder=" "
                />
                <label
                  className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                >
                  New Email
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={"text"}
                  // value={value}
                  // onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                  placeholder=" "
                />
                <label
                  className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                >
                  New Number
                </label>
              </div>
            </div>

            <div className="flex flex-col items-start w-[500px] mt-6">
              <div className="text-[#141417] font-[500] mb-3">
                Address Information
              </div>
              <div className="flex flex-col items-start gap-[24px] w-full">
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    Street Address
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    City
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    State/Province
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    Postal/ZIP Code{" "}
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    Country{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-[500px] mt-6">
              <div className="text-[#141417] font-[500] mb-3">
                Additional Information
              </div>
              <div className="flex flex-col items-start gap-[24px] w-full">
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    Company/Organization Name{" "}
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type={"text"}
                    // value={value}
                    // onChange={(e) => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
                  >
                    Role/Position{" "}
                  </label>
                </div>
              </div>

              <div className="mt-[24px] flex justify-end items-center w-[500px] gap-[14px] mb-5">
                <button className="w-[80px] h-[40px]">Cancel</button>
                <div className="bg-[#1E1E1E] h-[18px] w-[1px]"></div>
                <button className="h-[40px] text-white bg-dark rounded-[4px] w-[80px]">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
