import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { HandleExpiredToken, IsTokenExpired } from "../../lib/jwt";

const Landing = () => {
  // useEffect(() => {
  //   const token = Cookies.get("jwtToken");
  //   if (!token) {
  //     window.location.href = "/auth/sign-in";
  //   } else if (IsTokenExpired(token)) {
  //     HandleExpiredToken();
  //   }
  // }, []);

  return (
    <>
      <div className="lg:overflow-hidden lg:h-screen relative">
        <div className="hidden lg:grid grid-cols-12 w-full">
          <div className={`col-span-2 h-[85vh]`}>
            <SideNav />
          </div>
          <div
            className={`col-span-10 max-h-[100vh] overflow-y-auto bg-[#E9E9E9]`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
