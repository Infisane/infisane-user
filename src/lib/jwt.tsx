import { JwtPayload, jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

interface MyTokenPayload extends JwtPayload {
  sub: string;
  name: string;
  email: string;
}

export const DecodeToken = (token: string): MyTokenPayload | null => {
  try {
    const decoded = jwtDecode<MyTokenPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const IsTokenExpired = (token: string): boolean => {
  const decoded = DecodeToken(token);
  if (!decoded || !decoded.exp) {
    return true;
  }

  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
};

export const HandleExpiredToken = () => {
  // const navigate = useNavigate();
  Cookies.remove("jwtToken");
  // navigate("/login");
};
