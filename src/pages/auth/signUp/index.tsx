/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import google from "../../../assets/google.svg";
import { useAppToast } from "../../../lib/useAppToast";
import { userSignUp } from "../../../lib/useAuth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useAppToast();
  const [step, setStep] = useState(1);
  const [btn, setBtn] = useState("Next");

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [rolePosition, setRolePosition] = useState("");
  const [second, setSecond] = useState(false)

  const [loading, setLoading] = useState(false);

  const data = {
    fullName,
    email,
    userName,
    phoneNumber,
    password,
    address: {
      street,
      city,
      state,
      postalCode,
      country,
    },
    country,
    rolePosition,
    company: companyName
  };

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userSignUp(data);
      setLoading(false);
      navigate("/");
      toast({
        status: "success",
        description: response?.message || "Success",
      });
    } catch (error: any) {
      console.error("Sign Up Error", error.message);
      setLoading(false);
      toast({
        description: error.message || "Sign Up Error",
        status: "error",
      });
    }
  };

  const handleNext = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (step === 1) {
      if (
        userName === "" ||
        fullName === "" ||
        email === "" ||
        phoneNumber === "" ||
        password === ""
      ) {
        toast({
          description: "Please fill all your credentials",
          status: "error",
        });
        return;
      }
      if (password.length < 7) {
        toast({
          description:
            "Please ensure your password is greater than 7 characters",
          status: "error",
        });
        return;
      }
      setStep(2);
      setSecond(true)
    } else if (step === 2) {
      if (
        street === "" ||
        city === "" ||
        state === "" ||
        postalCode === "" ||
        country === ""
      ) {
        toast({
          description: "Please fill all your credentials",
          status: "error",
        });
        return;
      }
      setStep(3);
      setBtn("Submit");
    } else if (step === 3) {
      handleSignUp(e);
    }
  };

  return (
    <div className="text-white text-center">
      <div className="flex justify-between items-center gap-[14px]">
        <div>
          <div
            className={`h-[36px] w-[36px] rounded-full achieveGradient flex justify-center items-center`}
          >
            <div className="h-[24px] w-[24px] rounded-full bg-black flex justify-center items-center text-white text-[16px] font-[800]">
              1
            </div>
          </div>
        </div>
        <p className="font-[500] text-[14px] hidden lg:block">Basic Information</p>
        <div className="bg-white h-[2px] w-[10%]"></div>
        <div>
          <div
            className={`h-[36px] w-[36px] rounded-full ${
              second === true ? "achieveGradient" : "bg-[#808080]"
            } flex justify-center items-center`}
          >
            <div className="h-[24px] w-[24px] rounded-full bg-black flex justify-center items-center text-white text-[16px] font-[800]">
              2
            </div>
          </div>
        </div>
        <p className="font-[500] text-[14px] hidden lg:block">Address Information</p>
        <div className="bg-white h-[2px] w-[10%]"></div>
        <div>
          <div
            className={`h-[36px] w-[36px] rounded-full ${
              step === 3 ? "achieveGradient" : "bg-[#808080]"
            } flex justify-center items-center`}
          >
            <div className="h-[24px] w-[24px] rounded-full bg-black flex justify-center items-center text-white text-[16px] font-[800]">
              3
            </div>
          </div>
        </div>
        <p className="font-[500] text-[14px] hidden lg:block">Additional Information</p>
      </div>

      <div className="pt-[24px] lg:p-[24px]">
        <div className="flex w-full flex-col items-start">
          <h1 className="text-[18px] font-[600] mb-1">Sign up</h1>
          <p className="text-[14px] font-[500]">
            {step === 1 ? "Basic" : step === 2 ? "Address" : "Additional"}{" "}
            Information
          </p>
        </div>
        {step === 1 && (
          <div className="mt-4 w-full flex flex-col items-start gap-4 z-50 relative">
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Full Name*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </fieldset>
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">User Name*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your user name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Phone Number*</label>
              <input
                type="tel"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Password*</label>
              <input
                type="password"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-[14px]">Must be at least 8 characters</p>
            </fieldset>
          </div>
        )}
        {step === 2 && (
          <div className="mt-4 w-full flex flex-col items-start gap-4 z-50 relative">
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Street Address*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your street address"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </fieldset>
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">City*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">State/Province*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your state/province"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Postal/ZIP Code *</label>
              <input
                type="tel"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your postal/street code "
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </fieldset>{" "}
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Country*</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </fieldset>
          </div>
        )}
        {step === 3 && (
          <div className="mt-4 w-full flex flex-col items-start gap-4 z-50 relative">
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Company/Organization Name ( Optional )</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your company/organization name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </fieldset>
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Role/Position ( Optional )</label>
              <input
                type="text"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your role/position"
                value={rolePosition}
                onChange={(e) => setRolePosition(e.target.value)}
              />
            </fieldset>{" "}
          </div>
        )}
        <div className="flex justify-between items-center gap-[32px]">
          {step !== 1 && <button
            className="flex justify-center w-full gap-2 items-center px-[32px] h-[50px] border-white border-[2px] rounded-[4px] font-[600] text-white mt-[32px] z-50 relative"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </button>}
          <button
            className="flex justify-center w-full gap-2 items-center px-[32px] h-[50px] bg-white rounded-[4px] font-[600] text-black mt-[32px] z-50 relative"
            onClick={handleNext}
          >
            {loading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
                  <animate
                    id="svgSpinnersBarsScale0"
                    attributeName="y"
                    begin="0;svgSpinnersBarsScale1.end-0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="6;1;6"
                  />
                  <animate
                    attributeName="height"
                    begin="0;svgSpinnersBarsScale1.end-0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="12;22;12"
                  />
                </rect>
                <rect width="2.8" height="12" x="5.8" y="6" fill="currentColor">
                  <animate
                    attributeName="y"
                    begin="svgSpinnersBarsScale0.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="6;1;6"
                  />
                  <animate
                    attributeName="height"
                    begin="svgSpinnersBarsScale0.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="12;22;12"
                  />
                </rect>
                <rect
                  width="2.8"
                  height="12"
                  x="10.6"
                  y="6"
                  fill="currentColor"
                >
                  <animate
                    attributeName="y"
                    begin="svgSpinnersBarsScale0.begin+0.2s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="6;1;6"
                  />
                  <animate
                    attributeName="height"
                    begin="svgSpinnersBarsScale0.begin+0.2s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="12;22;12"
                  />
                </rect>
                <rect
                  width="2.8"
                  height="12"
                  x="15.4"
                  y="6"
                  fill="currentColor"
                >
                  <animate
                    attributeName="y"
                    begin="svgSpinnersBarsScale0.begin+0.3s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="6;1;6"
                  />
                  <animate
                    attributeName="height"
                    begin="svgSpinnersBarsScale0.begin+0.3s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="12;22;12"
                  />
                </rect>
                <rect
                  width="2.8"
                  height="12"
                  x="20.2"
                  y="6"
                  fill="currentColor"
                >
                  <animate
                    id="svgSpinnersBarsScale1"
                    attributeName="y"
                    begin="svgSpinnersBarsScale0.begin+0.4s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="6;1;6"
                  />
                  <animate
                    attributeName="height"
                    begin="svgSpinnersBarsScale0.begin+0.4s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                    values="12;22;12"
                  />
                </rect>
              </svg>
            )}
            {btn}
          </button>
        </div>
        {step === 1 && (
          <>
            <div className="flex w-full justify-between items-center gap-2 mt-[32px] mb-[20px]">
              <div className="w-full h-[1px] bg-[white]"></div>
              <p className="text-[#71839B] text-[14px] font-[500]">OR</p>
              <div className="w-full h-[1px] bg-[white]"></div>
            </div>
            <button className="flex justify-center w-full items-center px-[32px] h-[44px] bg-[#111111] rounded-[4px] font-[600] text-white gap-2 border-[#D0D5DD] border-[2px] mt-[32px] z-50 relative">
              <img src={google} alt="" />
              Log in with Google
            </button>
          </>
        )}
        <p className="text-[14px] font-[600] pt-[24px] text-center">
          Already have an account? <Link to="/auth/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
