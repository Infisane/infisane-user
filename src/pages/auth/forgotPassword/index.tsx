/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import passwordd from "../../../assets/password.svg";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useAppToast } from "../../../lib/useAppToast";
import { useAPI } from "../../../lib/useApi";
import { requestPasswordResetOTP, resetPassword } from "../../../lib/useAuth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const toast = useAppToast();
  const { useAPIMutation } = useAPI();
  const [step, setStep] = useState(2);
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  const update = useAPIMutation({
    mutationFunction: (x: any) => requestPasswordResetOTP(x.email),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Email sent Successful",
      });
      setStep(2);
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    update.mutate({
      email,
    });
  };

  const passwordUpdate = useAPIMutation({
    mutationFunction: (x: any) =>
      resetPassword(x.otp, x.newPassword, x.confirmPassword),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Password reset Successful",
      });
      navigate("/auth/sign-in");
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const onPasswordSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "") {
      toast({
        status: "error",
        description: "Please input your email and password",
      });
      return;
    }
    if (password !== confirmPassword ) {
      toast({
        status: "error",
        description: "Passwords does not match",
      });
      return;
    }
    setLoading(true);
    passwordUpdate.mutate({
      otp,
      "newPassword": password,
      confirmPassword,
    });
  };

  const handleNext = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (step === 1) {
      if (email === "") {
        toast({
          description: "Please fill all your credentials",
          status: "error",
        });
        return;
      }
      onSubmit(e);
    } else if (step === 2) {
      if (otp === "") {
        toast({
          description: "Please enter otp sent to your email",
          status: "error",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (password === "" || confirmPassword === "") {
        toast({
          description: "Please fill all fields",
          status: "error",
        });
        return;
      }
      if (password !== confirmPassword) {
        toast({
          description: "Password and confirm password must be the same",
          status: "error",
        });
        return;
      }
      onPasswordSubmit(e);
    }
  };

  return (
    <>
      <div className="text-white text-center">
        <div className="flex justify-center items-center mb-4">
          <img src={passwordd} alt="" />
        </div>
        <h1 className="text-[18px] font-[600] mb-1">
          {step !== 2 ? "Account recovery" : "Create a new password"}
        </h1>
        <p className="text-[14px] font-[500]">
          {step !== 2
            ? "Enter your email address to reset your password"
            : "Enter your new password to make this change."}
        </p>

        {step === 1 && (
          <div className="mt-4 w-full flex flex-col items-start gap-4 relative z-50">
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="w-full z-50 relative">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              inputStyle={{
                width: "100%",
                height: "72px",
                fontSize: "48px",
                fontWeight: "500",
                color: "white",
                backgroundColor: "#1E1E1E",
              }}
              renderSeparator={<div className="ml-3"></div>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-[20%] border-[2px] px-[16px] outline-none border-[#FFFFFF] rounded-[10px] h-[72px] mt-[16px] mb-[16px]"
                />
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="mt-4 w-full flex flex-col items-start gap-4 z-50 relative">
            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Password*</label>
              <input
                type="password"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <fieldset className="flex flex-col items-start gap-[6px] w-full">
              <label htmlFor="">Confirm Password*</label>
              <input
                type="password"
                className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </fieldset>
          </div>
        )}

        <div className="flex justify-between w-full items-center gap-[24px] z-50 relative">
          <button
            className="flex justify-center w-1/2 items-center px-[32px] h-[50px] bg-transparent border-white border-[3px] rounded-[4px] font-[600] text-white mt-[32px]"
            // onClick={handleNext}
          >
            Cancel
          </button>
          <button
            className="flex justify-center gap-2 w-1/2 items-center px-[32px] h-[50px] bg-white rounded-[4px] font-[600] text-black mt-[32px]"
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
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
