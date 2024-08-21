/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosWithToken, AxiosWithoutToken } from "./axios";
import Cookies from "js-cookie";

type AddressProps = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type SignUpProp = {
  fullName: string;
  email: string;
  userName: string;
  phoneNumber: string;
  password: string;
  address: AddressProps;
  company?: string;
  rolePosition?: string;
};

export const userLogin = async (email: string, password: string) => {
  try {
    const response = await AxiosWithoutToken.post("/auth/log-in", {
      email,
      password,
    });
    console.log(response?.data?.data);
    const { token } = response?.data?.data;
    Cookies.set("jwtToken", token);
    return response.data;
  } catch (error: any) {
    console.error("Sign-in error:", error.response.data.message);
    throw new Error(error.response.data.message); // Throw an error with the specific message
  }
};

export const userSignUp = async (data: SignUpProp) => {
  try {
    const response = await AxiosWithoutToken.post("/auth/signup", data,);
    console.log(response?.data?.data);
    const { token } = response?.data?.data?.accessToken;
    Cookies.set("jwtToken", token);
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.error("Sign-up error:", error.response.data.message);
    throw new Error(error.response.data.message); // Throw an error with the specific message
  }
};

export async function resendEmailOTP() {
  const response = await AxiosWithToken().get(`/auth/forgot-password`);

  return response.data;
}

export async function verifyEmail(otp: string) {
  const response = await AxiosWithToken().patch(`/auth/verify-email`, {otp});

  return response.data;
}

export async function requestPasswordResetOTP(email: string) {
  const response = await AxiosWithoutToken.post(`/auth/forgot-password`, {email});

  return response.data;
}

export async function resetPassword(
  otp: string,
  newPassword: string,
  confirmPassword:string
) {
  const response = await AxiosWithoutToken.post(`/auth/reset-password`, {
    otp,
    newPassword,
    confirmPassword,
  });

  return response.data;
}
