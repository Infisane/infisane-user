import bell from "../assets/bell.svg";
import { useState } from "react";
import Modal from "./Notification";

type Props = {
  title: string;
};
const TopNav = ({ title }: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-[#1E1E1E] h-[64px] py-10 w-full lg:flex justify-between items-center hidden px-[32px]">
        <p className="text-[white] font-[600] text-[20px]">{title}</p>
        <img
          src={bell}
          alt=""
          onClick={handleShow}
          className="cursor-pointer"
        />
        {show && (
          <Modal isOpen={show} onClose={handleClose}>
            <div className="bg-white ">
              <h1 className="text-[20px] text-[#1E1E1E] font-[600]">
                Notifications
              </h1>
            </div>

            <div className="flex flex-col gap-[20px] pt-[40px] w-full items-start">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start gap-5 items-center">
                  <p className="text-[#343A40] font-[500]">
                    Your website design has been completed
                  </p>
                </div>
                <p className="text-[12px] text-[#B9B9B9] font-[500]">
                  19/6/2024
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start gap-5 items-center">
                  <p className="text-[#343A40] font-[500]">
                    Your website design has been completed
                  </p>
                </div>
                <p className="text-[12px] text-[#B9B9B9] font-[500]">
                  19/6/2024
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#E9E9E9]"></div>{" "}
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start gap-5 items-center">
                  <p className="text-[#343A40] font-[500]">
                    Your website design has been completed
                  </p>
                </div>
                <p className="text-[12px] text-[#B9B9B9] font-[500]">
                  19/6/2024
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default TopNav;
