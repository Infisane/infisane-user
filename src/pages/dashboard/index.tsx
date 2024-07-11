import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";

const Landing = () => {
  return (
    <>
      <div className="lg:overflow-hidden lg:h-screen relative">
        <div className="hidden lg:grid grid-cols-12 w-full">
          <div className={`col-span-2 h-[85vh]`}>
            <SideNav />
          </div>
          <div className={`col-span-10 max-h-[85vh] overflow-y-auto`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
