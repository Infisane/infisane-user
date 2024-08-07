/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FocusEvent } from "react";
import { changePassword } from "../../../../lib/useUser";
import { useAPI } from "../../../../lib/useApi";
import { useAppToast } from "../../../../lib/useAppToast";

const Security = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

  const update = useAPIMutation({
    mutationFunction: (x: any) =>
      changePassword(x.currentPassword, x.newPassword, x.confirmPassword),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Password reset Successful",
      });
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (newPassword !== confirmPassword) {
      toast({
        status: "error",
        description: "Passwords do not match",
      });
      setNewPassword("");
      setConfirmPassword("");
      return;
    }
    if (newPassword.length < 7) {
      toast({
        status: "error",
        description: "Password should be at least 7 characters long",
      });
      setNewPassword("");
      setConfirmPassword("");
      return;
    }

    update.mutate({
      currentPassword,
      newPassword,
      confirmPassword,
    });
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
                type={"password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
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
                type={"password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`block px-2 pb-1 h-[52px] pt-4 w-full text-[#141417] text-[14px] outline-none bg-transparent border-2 border-gray-300 rounded-[4px] appearance-none focus:outline-none focus:ring-0 peer bg-white`}
                placeholder=" "
              />
              <label
                className={`absolute text-base text-[#83818E] text-[12px] font-[500] duration-300 transform -translate-y-4 top-[18px] left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#83818E] peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2`}
              >
                Confirm Password{" "}
              </label>
            </div>
            <div className="relative w-full">
              <input
                type={"password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            <button
              onClick={(e) => handleEdit(e)}
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
      </div>
    </>
  );
};

export default Security;
