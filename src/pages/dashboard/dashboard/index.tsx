/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import TopNav from "../../../components/TopNav";
import Apex from "../../../components/PieChart";
import resume from "../../../assets/resume.svg";
import pause from "../../../assets/pause.svg";
import submit from "../../../assets/submit.svg";
import { getAllProjects } from "../../../lib/useUser";
import { useAPI } from "../../../lib/useApi";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Dashboard = () => {
  const { useQuery } = useAPI();

  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
  });

  console.log(projects);

  return (
    <>
      <div className="sticky top-0 w-full min-h-screen">
        <div className="sticky top-0">
          <TopNav title={"Dashboard"} />
        </div>

        <div className="p-[32px] flex flex-col w-full gap-[24px]">
          <div className="grid grid-cols-11 gap-[24px] h-full w-full">
            <div className="col-span-8 bg-white rounded-[8px] p-4 flex flex-col items-start justify-between">
              <h1 className="pb-4 font-[600] text-[18px] ">Active Projects</h1>
              <div className="flex justify-between items-center flex-wrap w-full gap-4">
                {projects && projects.data.length > 0 ? (
                  projects.data.slice(0, 3).map((project: any, i: any) => {
                    return (
                      <div
                        key={i}
                        className={`${
                          project.projectType === "Website Design"
                            ? "bg-[#9108A7]"
                            : project.projectType ===
                              "Graphics and Flyer Design"
                            ? "bg-[#0A6708]"
                            : project.projectType === "Logo Design"
                            ? "[#84071D]"
                            : "bg-blue-400"
                        }  texture ${
                          projects.data.length === 1
                            ? "w-[100%] items-center justify-between"
                            : projects.data.length === 2
                            ? "w-[48%] items-center justify-between"
                            : "w-[32%] flex-col items-start justify-center"
                        } rounded-[8px] h-[250px] p-[24px] pb-[10px] flex gap-[36px]`}
                      >
                        <h1
                          className={`${
                            projects.data.length === 1
                              ? " text-[48px]"
                              : projects.data.length === 2
                              ? " text-[40px]"
                              : " text-[24px]"
                          } font-[600] text-white`}
                        >
                          {project.projectType}
                        </h1>
                        <Apex
                          percent={
                            project.status === "Pending"
                              ? 25
                              : project.status === "Ongoing"
                              ? 50
                              : project.status === "Completed"
                              ? 100
                              : 30
                          }
                          color1={
                            project.status === "Pending"
                              ? "#FFB822"
                              : project.status === "Ongoing"
                              ? "#FFB822"
                              : project.status === "Completed"
                              ? "#08FF03"
                              : "#FFB822"
                          }
                          size={
                            projects.data.length === 1
                              ? 150
                              : projects.data.length === 2
                              ? 150
                              : 100
                          }
                          strokeWidth={
                            projects.data.length === 1
                              ? 18
                              : projects.data.length === 2
                              ? 15
                              : 13
                          }
                        />
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center w-full font-semibold">
                    No active project
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-[8px] p-4">
              <h1 className="pb-4 font-[600] text-[18px]">Our Offers</h1>
              <div className="flex flex-col items-start w-full gap-[24px]">
                <div className="border-[1px] border-[#E9E9E9] rounded-[8px] px-[6px] py-5 w-full flex justify-between items-center">
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                      <div className="h-[20px] w-[20px] bg-[#9108A7] rounded-full"></div>
                    </div>
                    <h2 className="font-[600] text-#343A40] text-[13px]">
                      Website Design
                    </h2>
                  </div>
                  <div className="text-right flex flex-col gap-0">
                    <h3 className="text-[12px] text-[#71839B] font-[500]">
                      For enquiries
                    </h3>
                    <Link
                      to="/contact"
                      className="text-[#343A40] underline font-[600] text-[14px]"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="border-[1px] border-[#E9E9E9] rounded-[8px] px-[6px] py-5 w-full flex justify-between items-center">
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                      <div className="h-[20px] w-[20px] bg-[#84071D] rounded-full"></div>
                    </div>
                    <h2 className="font-[600] text-#343A40] text-[13px]">
                      Logo Design{" "}
                    </h2>
                  </div>
                  <div className="text-right flex flex-col gap-0">
                    <h3 className="text-[12px] text-[#71839B] font-[500]">
                      Price range
                    </h3>
                    <Link
                      to="/contact"
                      className="text-[#343A40] underline font-[600] text-[14px]"
                    >
                      $50 - $500
                    </Link>
                  </div>
                </div>
                <div className="border-[1px] border-[#E9E9E9] rounded-[8px] px-[6px] py-5 w-full flex justify-between items-center">
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                      <div className="h-[20px] w-[20px] bg-[#0A6708] rounded-full"></div>
                    </div>
                    <h2 className="font-[600] text-#343A40] text-[13px]">
                      Graphics and Flyer Design{" "}
                    </h2>
                  </div>
                  <div className="text-right flex flex-col gap-0">
                    <h3 className="text-[12px] text-[#71839B] font-[500]">
                      Price range
                    </h3>
                    <Link
                      to="/contact"
                      className="text-[#343A40] underline font-[600] text-[14px]"
                    >
                      $10 - $20
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-[24px] h-full w-full">
            <div className="col-span-5 bg-white rounded-[8px] px-4 pb-4 overflow-y-auto">
              <div className="py-4 sticky top-0 bg-white z-40">
                <h1 className="font-[600] text-[18px] z-40">Tasks</h1>
              </div>

              <div className="pb-[30px] max-h-[400px] relative z-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination
                  navigation={{
                    nextEl: ".custom-nextt",
                    prevEl: ".custom-prevv",
                  }}
                >
                  {projects &&
                    projects.data.map((project: any, i: any) => {
                      return (
                        <SwiperSlide key={i}>
                          <h1 className=" pb-10 text-[#1E1E1E] font-[500]">
                            {project.projectType}
                          </h1>
                          <div className="flex flex-col gap-[24px]  pb-5 items-start w-full">
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex
                                size={64}
                                percent={100}
                                color1="#08FF03"
                                text="#1E1E1E"
                              />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                Research
                              </p>
                            </div>
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex
                                size={64}
                                percent={100}
                                color1="#08FF03"
                                text="#1E1E1E"
                              />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                UI Design
                              </p>
                            </div>{" "}
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex size={64} percent={65} text="#1E1E1E" />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                Frontend
                              </p>
                            </div>{" "}
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex
                                size={64}
                                percent={0}
                                color1="#FF0000"
                                color2="#FF0000"
                                text="#1E1E1E"
                              />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                Backend
                              </p>
                            </div>{" "}
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex
                                size={64}
                                percent={0}
                                color1="#FF0000"
                                color2="#FF0000"
                                text="#1E1E1E"
                              />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                Backend
                              </p>
                            </div>{" "}
                            <div className="flex justify-start items-center gap-4 w-full">
                              <Apex
                                size={64}
                                percent={100}
                                color1="#08FF03"
                                text="#1E1E1E"
                              />
                              <p className="text-[#343A40] text-[16px] font-[500]">
                                Research
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  
                </Swiper>
              </div>
            </div>
            <div className="col-span-5  bg-white rounded-[8px] p-4">
              <div className="flex justify-between items-center pb-[24px]">
                <h1 className="font-[600] text-[18px] h-[15%]">
                  Recent Activity{" "}
                </h1>
                <Link
                  to={"/activities"}
                  className="text-[#888888] text-[12px] font-[600] underline"
                >
                  View All
                </Link>
              </div>
              <div className="flex flex-col gap-[24px] w-full items-start">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={pause} alt="" />

                    <p className="text-[#343A40] font-[500]">Paused Project</p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={submit} alt="" />
                    <p className="text-[#343A40] font-[500]">
                      Submitted a form
                    </p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={resume} alt="" />
                    <p className="text-[#343A40] font-[500]">Resumed Project</p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={submit} alt="" />
                    <p className="text-[#343A40] font-[500]">
                      Submitted a Form
                    </p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={pause} alt="" />

                    <p className="text-[#343A40] font-[500]">Paused Project</p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start gap-5 items-center">
                    <img src={resume} alt="" />
                    <p className="text-[#343A40] font-[500]">Resumed Project</p>
                  </div>
                  <p className="text-[12px] text-[#B9B9B9] font-[500]">
                    19/6/2024
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
