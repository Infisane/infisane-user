/* eslint-disable @typescript-eslint/no-explicit-any */
import bell from "../assets/bell.svg";
import { useState } from "react";
import Modal from "./Notification";
import { getNotifications } from "../lib/useUser";
import { useAPI } from "../lib/useApi";

type Props = {
  title: string;
};
const TopNav = ({ title }: Props) => {
    const { useQuery } = useAPI();

    const { data: notifications } = useQuery({
      queryKey: ["notifications"],
      queryFn: () => getNotifications(),
    });

    console.log(notifications);

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
              {notifications && notifications.length > 0 ? (
                notifications.map((notification: any, i: any) => {
                  const originalDate = notification.createdAt;

                  // Convert to Date object
                  const dateObj = new Date(originalDate);

                  // Get the day, month, and year
                  const day = dateObj.getUTCDate();
                  const month = dateObj.getUTCMonth() + 1; // Months are zero-based
                  const year = dateObj.getUTCFullYear();

                  // Format the date as dd/mm/yyyy
                  const formattedDate = `${day}/${month}/${year}`;
                  return (
                    <>
                      <div
                        className="flex justify-between items-center w-full"
                        key={i}
                      >
                        <div className="flex justify-start gap-5 items-center">
                          <p className="text-[#343A40] font-[500]">
                            {notification.message}
                          </p>
                        </div>
                        <p className="text-[12px] text-[#B9B9B9] font-[500]">
                          {formattedDate}
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
                    </>
                  );
                })
              ) : (
                <p className="text-center w-full font-semibold">
                  No recent activity
                </p>
              )}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default TopNav;
