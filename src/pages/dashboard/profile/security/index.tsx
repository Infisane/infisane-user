import { useState, FocusEvent } from "react";

const Security = () => {
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
        <h1 className="text-[#141417] text-[20px] font-[600] ">Security </h1>
        <p className="text-[#4F4E59]">Manage your account security </p>
      </div>

      <div>
        <p className="text-[18px] font-[500] text-[#141417] mb-4">
          Change your password{" "}
        </p>

        <div className="flex flex-col items-start w-[500px] mt-6">
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
                Current Password{" "}
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
                New Passowrd{" "}
              </label>
            </div>
          </div>
          <div className="mt-[24px] flex justify-end items-center w-[500px] gap-[14px] mb-5">
            <button className="w-[80px] h-[40px]">Cancel</button>
            <div className="bg-[#1E1E1E] h-[18px] w-[1px]"></div>
            <button className="h-[40px] text-white bg-dark rounded-[4px] w-[80px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
