/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosWithImageToken, AxiosWithToken } from "./axios";

type AddressProps = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type SignUpProp = {
  fullName: string;
  userName: string;
  company?: string;
  rolePosition?: string;
  profilePicture: any;
};

export async function getUser() {
  const response = await AxiosWithToken().get(`/users/user/profile`);

  return response.data;
}

export const updateProfile = async (data: SignUpProp) => {
  try {
    const response = await AxiosWithImageToken().put(
      `/users/update-profile`,
      data
    );
    console.log(response?.data?.data);
    return response.data;
  } catch (error: any) {
    console.error("Sign-up error:", error.response.data.message);
    throw new Error(error.response.data.message); // Throw an error with the specific message
  }
};

export const updateAddress = async (data: AddressProps) => {
  try {
    const response = await AxiosWithToken().put(`/users/update-address`, data);
    console.log(response?.data?.data);
    return response.data;
  } catch (error: any) {
    console.error("Sign-up error:", error.response.data.message);
    throw new Error(error.response.data.message); // Throw an error with the specific message
  }
};

export async function getAllProjects() {
  const response = await AxiosWithToken().get(`/project/user/projects`);

  return response.data;
}

export async function getSingleProject(id: string) {
  const response = await AxiosWithToken().get(`/project/user/${id}`);

  return response.data;
}

export async function createWebsite(data: any) {
  const response = await AxiosWithImageToken().post(
    `/project/add-website-design`,
    data
  );

  return response.data;
}

export async function createGraphics(data: any) {
  const response = await AxiosWithImageToken().post(
    `/project/add-graphics-flyer-design`,
    data
  );

  return response.data;
}

export async function createLogo(data: any) {
  const response = await AxiosWithImageToken().post(
    `/project/add-logo-design`,
    data
  );

  return response.data;
}

export async function changePassword(
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
) {
  const response = await AxiosWithToken().put(`/users/change-password`, {
    currentPassword,
    newPassword,
    confirmPassword,
  });

  return response.data;
}

export async function pauseProject(id: string) {
  const response = await AxiosWithImageToken().post(`project/${id}/pause`);

  return response.data;
}

export async function resumeProject(id: string) {
  const response = await AxiosWithImageToken().post(`project/${id}/resume`);

  return response.data;
}

export async function getRecentActivities() {
  const response = await AxiosWithToken().post(`/project/recent-activities`);

  return response.data;
}

export async function getNotifications() {
  const response = await AxiosWithToken().get(`/notifications`);

  return response.data;
}

export async function getSingleRecentActivities(id: string) {
  const response = await AxiosWithToken().get(
    `/project/${id}/recent-activities`
  );

  return response.data;
}

export async function selectNotification(emailNotifications: boolean) {
  const response = await AxiosWithToken().patch(
    `/users/notification-preferences`,
    {
      emailNotifications,
    }
  );

  return response.data;
}

export async function readNotification(id: string) {
  const response = await AxiosWithToken().patch(
    `/notifications/${id}/read`
  );

  return response.data;
}
