import { Link } from "react-router-dom";
import bell from "../assets/bell.svg";

type Props = {
    title:string
}
const TopNav = ({title}: Props) => {
  return (
    <>
      <div className="bg-[#1E1E1E] h-[64px] py-10 w-full lg:flex justify-between items-center hidden px-[32px]">
        <p className="text-[white] font-[600] text-[20px]">{title}</p>
        <Link to="/">
          <img src={bell} alt="" />
        </Link>
      </div>
    </>
  );
};

export default TopNav;
