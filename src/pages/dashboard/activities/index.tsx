/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TopNav from "../../../components/TopNav";
import { useNavigate, useLocation } from "react-router-dom";
import activity1 from "../../../assets/activity1.svg";
import arrouDown from "../../../assets/arrow-down.svg";
import resume from "../../../assets/resume.svg";
import pause from "../../../assets/pause.svg";
import submit from "../../../assets/submit.svg";
import { useAPI } from "../../../lib/useApi";
import { getNotifications } from "../../../lib/useUser";

const Activities = () => {
  const { useQuery } = useAPI();
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState<string | null>("");
  const [type, setType] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFilter(searchParams.get("filter"));
  }, [location.search]);

  const updateURLParams = (newParams: { [key: string]: string }) => {
    const searchParams = new URLSearchParams(location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    if (filter) {
      if (filter === "all") {
        setType("All");
      } else if (filter === "paid") {
        setType("Made Payment");
      } else if (filter === "paused") {
        setType("Paused Project");
      } else if (filter === "resumed") {
        setType("Resumed Project");
      }
      console.log(filter);
    }
  }, [filter]);

  const options = [
    {
      label: "All",
      onClick: () => updateURLParams({ filter: "all" }),
      id: 1,
    },
    {
      label: "Made Payment",
      onClick: () => updateURLParams({ filter: "paid" }),
      id: 2,
    },
    {
      label: "Paused Project",
      onClick: () => updateURLParams({ filter: "paused" }),
      id: 3,
    },
    {
      label: "Resumed Project",
      onClick: () => updateURLParams({ filter: "resumed" }),
      id: 4,
    },
  ];

  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  });

  console.log(notifications);

  console.log(filter);

  const pauseProject =
    notifications &&
    notifications.filter((project: any) => project.title === "Project Paused");
  const resumedProject =
    notifications &&
    notifications.filter((project: any) => project.title === "Project Resumed");
  const paidProject =
    notifications &&
    notifications.filter((project: any) => project.title === "Made Payment");

  return (
    <>
      <div className="sticky top-0 w-fill">
        <TopNav title={"Activities"} />
      </div>

      <div className="p-[32px]">
        <div className="flex justify-start items-center gap-1">
          <img src={activity1} alt="" />
          <p className="text-dark font-[500] text-[16px]">Recent Activities</p>
        </div>

        <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
          <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
            <h1 className="text-[32px] text-dark font-[600]">
              Recent Activities
            </h1>
            <div className="flex justify-end items-center gap-4">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2 px-[32px] h-[32px] border-dark border-[2px] rounded-[4px] text-[12px] font-[600] text-dark"
                    onClick={handleToggle}
                  >
                    {type}
                    <img src={arrouDown} alt="" />
                  </button>
                </div>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            option.onClick();
                            setIsOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start">
          {(filter === "all" || filter === null) &&
            notifications &&
            notifications.map((item: any, i: any) => {
              const originalDate = item.createdAt;

              // Convert to Date object
              const dateObj = new Date(originalDate);

              // Get the day, month, and year
              const day = dateObj.getUTCDate();
              const month = dateObj.getUTCMonth() + 1; // Months are zero-based
              const year = dateObj.getUTCFullYear();

              // Format the date as dd/mm/yyyy
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div
                  className="pt-4 pb-6 border-y-[1px] border-y-[#B9B9B9] w-full flex justify-between items-start"
                  key={i}
                >
                  <div className="flex justify-start items-start gap-5">
                    <img
                      src={
                        item.title === "Project Paused"
                          ? pause
                          : item.title === "Project Resumed"
                          ? resume
                          : submit
                      }
                      alt=""
                    />
                    <div>
                      <h1 className="text-[#343A40] text-[16px] font-[500]">
                        {item.type}
                      </h1>
                      <p className="text-[#343A4080] text-[16px] font-[500]">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B9B9B9] text-[12px] font-[500]">
                    {formattedDate}
                  </p>
                </div>
              );
            })}
          {filter === "paid" &&
            paidProject.map((item: any, i: any) => {
              const originalDate = item.createdAt;

              // Convert to Date object
              const dateObj = new Date(originalDate);

              // Get the day, month, and year
              const day = dateObj.getUTCDate();
              const month = dateObj.getUTCMonth() + 1; // Months are zero-based
              const year = dateObj.getUTCFullYear();

              // Format the date as dd/mm/yyyy
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div
                  className="pt-4 pb-6 border-y-[1px] border-y-[#B9B9B9] w-full flex justify-between items-start"
                  key={i}
                >
                  <div className="flex justify-start items-start gap-5">
                    <img src={submit} alt="" />

                    <div>
                      <h1 className="text-[#343A40] text-[16px] font-[500]">
                        {item.type}
                      </h1>
                      <p className="text-[#343A4080] text-[16px] font-[500]">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B9B9B9] text-[12px] font-[500]">
                    {formattedDate}
                  </p>
                </div>
              );
            })}
          {filter === "paused" &&
            pauseProject.map((item: any, i: any) => {
              const originalDate = item.createdAt;

              // Convert to Date object
              const dateObj = new Date(originalDate);

              // Get the day, month, and year
              const day = dateObj.getUTCDate();
              const month = dateObj.getUTCMonth() + 1; // Months are zero-based
              const year = dateObj.getUTCFullYear();

              // Format the date as dd/mm/yyyy
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div
                  className="pt-4 pb-6 border-y-[1px] border-y-[#B9B9B9] w-full flex justify-between items-start"
                  key={i}
                >
                  <div className="flex justify-start items-start gap-5">
                    <img src={pause} alt="" />

                    <div>
                      <h1 className="text-[#343A40] text-[16px] font-[500]">
                        {item.type}
                      </h1>
                      <p className="text-[#343A4080] text-[16px] font-[500]">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B9B9B9] text-[12px] font-[500]">
                    {formattedDate}
                  </p>
                </div>
              );
            })}

          {filter === "resumed" &&
            resumedProject.map((item: any, i: any) => {
              const originalDate = item.createdAt;

              // Convert to Date object
              const dateObj = new Date(originalDate);

              // Get the day, month, and year
              const day = dateObj.getUTCDate();
              const month = dateObj.getUTCMonth() + 1; // Months are zero-based
              const year = dateObj.getUTCFullYear();

              // Format the date as dd/mm/yyyy
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div
                  className="pt-4 pb-6 border-y-[1px] border-y-[#B9B9B9] w-full flex justify-between items-start"
                  key={i}
                >
                  <div className="flex justify-start items-start gap-5">
                    <img src={resume} alt="" />

                    <div>
                      <h1 className="text-[#343A40] text-[16px] font-[500]">
                        {item.type}
                      </h1>
                      <p className="text-[#343A4080] text-[16px] font-[500]">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B9B9B9] text-[12px] font-[500]">
                    {formattedDate}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Activities;
