import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logoo.svg";
import colors from "../../assets/colors.svg";

const Auth = () => {
  return (
    <>
      <div className="p-[20px] pb-[50px] lg:p-[50px] auth">
        <Link to={'/'}><img src={logo} alt="" /></Link>

        <div className="flex justify-center items-center mt-[5%]">
          <div className="w-full lg:w-[30%] border-[4px] border-[#004A99] bg-[#0D0D0D80] gradient-border lg:pt-[57px] py-[24px] px-[24px] rounded-[32px] flex justify-center items-center relative flex-col overflow-hidden">
            <img src={colors} alt="" className="absolute top-0 left-0 z-0 " />
            <div className="w-full">
                <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
