/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useNavigate } from "react-router-dom";
import google from "../../../assets/google.svg";
import login from "../../../assets/login.svg";
import { useState } from "react";
import { useAPI } from "../../../lib/useApi";
import { useAppToast } from "../../../lib/useAppToast";
import { userLogin } from "../../../lib/useAuth";

const SignIn = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const update = useAPIMutation({
    mutationFunction: (x: any) => userLogin(x.email, x.password),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Login Successful",
      });
      navigate("/dashboard");
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast({
        status: "error",
        description: "Please input your email and password",
      });
      return;
    }
    setLoading(true);
    update.mutate({
      email,
      password,
    });
  };

  return (
    <>
      <div className="text-white text-center">
        <div className="flex justify-center items-center mb-4">
          <img src={login} alt="" />
        </div>
        <h1 className="text-[18px] font-[600] mb-1">Sign in to your account</h1>
        <p className="text-[14px] font-[500]">
          Welcome back! Please enter your details.
        </p>

        <div className="mt-4 w-full flex flex-col items-start gap-4 z-50 relative">
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
          <fieldset className="flex flex-col items-start gap-[6px] w-full">
            <label htmlFor="">Password*</label>
            <input
              type="password"
              className="bg-[#1E1E1E] w-full h-[50px] rounded-[16px] px-4 text-[14px] font-[500]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>{" "}
          <div className="flex justify-between w-full items-center">
            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p className="text-[14px] font-[500]">Remember for 7 days</p>
            </div>

            <Link
              to={"/auth/forgot-password"}
              className="text-[14px] font-[500]"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          className="flex justify-center gap-2 w-full items-center px-[32px] h-[50px] bg-white rounded-[4px] font-[600] text-black mt-[32px] relative z-50"
          onClick={(e) => onSubmit(e)}
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
              <rect width="2.8" height="12" x="10.6" y="6" fill="currentColor">
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
              <rect width="2.8" height="12" x="15.4" y="6" fill="currentColor">
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
              <rect width="2.8" height="12" x="20.2" y="6" fill="currentColor">
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
          Sign In
        </button>
        <div className="flex w-full justify-between items-center gap-2 mt-[32px] mb-[20px]">
          <div className="w-full h-[1px] bg-[white]"></div>
          <p className="text-[#71839B] text-[14px] font-[500]">OR</p>
          <div className="w-full h-[1px] bg-[white]"></div>
        </div>

        <button className="flex justify-center w-full items-center px-[32px] h-[44px] bg-[#111111] rounded-[4px] font-[600] text-white gap-2 border-[#D0D5DD] border-[2px] mt-[32px] relative z-50">
          <img src={google} alt="" />
          Log in with Google
        </button>
      </div>
    </>
  );
};

export default SignIn;
