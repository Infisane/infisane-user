import TopNav from "../../../components/TopNav";
import { NavLink, Outlet } from "react-router-dom";

type Props = {
  isActive: boolean;
};

const Profile = () => {
    // const location = useLocation();
  const navLinkStyle = ({ isActive }: Props) => {
    return {
      background: isActive ? "#B9B9B9" : "",
      borderRadius: isActive ? "4px" : "",
    };
  };
    return (
      <>
        <div className="sticky top-0 w-fill z-40">
          <TopNav title={"Profile"} />
        </div>

        <div className="flex justify-between items-start w-full p-[32px] gap-[48px]">
          <div className="w-[16%] flex flex-col items-start text-[#394150] font-[500] gap-1">
            <NavLink
              style={navLinkStyle}
              to="/profile/personal-information"
              className="w-full px-3 py-2 rounded-[6px] text-[14px] font-[500]"
            >
              Personal information
            </NavLink>
            <NavLink
              style={navLinkStyle}
              to={"/profile/notification-preference"}
              className="w-full px-3 py-2 rounded-[6px] text-[14px] font-[500]"
            >
              Notification preference{" "}
            </NavLink>
            <NavLink
              style={navLinkStyle}
              to={"/profile/security"}
              className="w-full px-3 py-2 rounded-[6px] text-[14px] font-[500]"
            >
              Security
            </NavLink>
          </div>

          <div className="w-[84%]">
            <Outlet />
          </div>
        </div>
      </>
    );
}
 
export default Profile;