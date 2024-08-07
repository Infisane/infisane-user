/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, FocusEvent, useEffect } from "react";
import dp from "../../../../assets/dp.png";
import upload from "../../../../assets/upload.svg";
import { useAPI } from "../../../../lib/useApi";
import { getUser, updateProfile, updateAddress } from "../../../../lib/useUser";
import { useAppToast } from "../../../../lib/useAppToast";

const PersonalInfo = () => {
  const [img, setImg] = useState<File | null | string>(null);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);

  const photoInput = useRef<HTMLInputElement | null>(null);


  const { useQuery, useAPIMutation } = useAPI();
  const toast = useAppToast();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  console.log(user);

  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files.item(0);
      console.log("Selected file:", file);
      setImg(file);
    }
  };

  console.log(img);
  
  useEffect(() => {
    setFullName(user && user?.data?.fullName);
    setUserName(user && user?.data?.userName);
    setEmail(user && user?.data?.email);
    setPosition(user && user?.data?.rolePosition);
    setCompanyName(user && user?.data?.company);
    setPhoneNumber(user && user?.data?.phoneNumber);
    setAddress(user && user?.data?.address?.street);
    setCity(user && user?.data?.address?.city);
    setPostalCode(user && user?.data?.address?.postalCode);
    setState(user && user?.data?.address?.state);
    setCountry(user && user?.data?.address?.country);
    setImg(user && user?.data?.profilePicture);
  }, [user]);

  const update = useAPIMutation({
    mutationFunction: (x: any) => updateProfile(x.data),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Application Successful",
      });
      console.log(data);
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const updateUserAddress = useAPIMutation({
    mutationFunction: (x: any) => updateAddress(x.data),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Application Successful",
      });
      console.log(data);
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("userName", userName);
    formData.append("company", companyName);
    formData.append("rolePosition", position);

    if (img) {
      console.log("Appending image:", img);
      formData.append("profilePicture", img);
    } else {
      console.warn("No image to append");
    }

    update.mutate({
      data: formData
    });
  };

    const handleAddressEdit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData();
      formData.append("street", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("country", country);
      formData.append("postalCode", postalCode);

      updateUserAddress.mutate({
        data: formData,
      });
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

   const handleEditBtn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(user && user?.data?.fullName !== fullName || user?.data?.userName !== userName || user?.data?.rolePosition !== position || user?.data?.companyName !== companyName || user?.data?.profilePicture !== img) {
      handleEdit(e)
    }
    if(user && user?.data?.address?.street !== address || user?.data?.address?.city !== city || user?.data?.address?.state !== state || user?.data?.address?.country !== country || user?.data?.address?.postalCode !== postalCode) {
      handleAddressEdit(e)
    }
   }

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
            <img
              src={
                user && user?.data?.profilePicture.length > 4
                  ? user?.data?.profilePicture
                  : dp
              }
              alt=""
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  type={"email"}
                  value={email}
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
                  type={"tel"}
                  value={phoneNumber}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
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
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
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
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
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
                <button
                  onClick={(e) => handleEditBtn(e)}
                  className="h-[40px] text-white flex justify-center items-center gap-2 bg-dark rounded-[4px] w-[80px]"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  )}
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
