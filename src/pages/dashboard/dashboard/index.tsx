import { Link } from "react-router-dom";
import TopNav from "../../../components/TopNav";
import Apex from "../../../components/PieChart";
import resume from '../../../assets/resume.svg'
import pause from "../../../assets/pause.svg";
import submit from "../../../assets/submit.svg";


const Dashboard = () => {
  return (
    <>
      <div className="sticky top-0 w-full bg-[#E9E9E9] min-h-screen">
        <div className="sticky top-0">
          <TopNav title={"Dashboard"} />
        </div>

        <div className="p-[32px] flex flex-col w-full gap-[24px]">
          <div className="grid grid-cols-11 gap-[24px] h-full w-full">
            <div className="col-span-8 bg-white rounded-[8px] p-4">
              <h1 className="pb-4 font-[600] text-[18px] h-[15%]">
                Active Projects
              </h1>
              <div className="flex justify-between flex-wrap items-center w-full h-[85%] gap-4">
                <div className="bg-[#9108A7] w-[32%] rounded-[8px] h-full p-[24px] flex justify-center items-start flex-col gap-[36px]">
                  <h1 className="text-[24px] font-[600] text-white">
                    Website Design
                  </h1>
                  <Apex />
                </div>
                <div className="bg-[#84071D] w-[32%] rounded-[8px] h-full p-[24px] flex justify-center items-start flex-col gap-[36px]">
                  <h1 className="text-[24px] font-[600] text-white">
                    Logo Design
                  </h1>
                  <Apex />
                </div>
                <div className="bg-[#0A6708] w-[32%] rounded-[8px] h-full p-[24px] flex justify-center items-start flex-col gap-[36px]">
                  <h1 className="text-[24px] font-[600] text-white">
                    Graphics Design
                  </h1>
                  <Apex />
                </div>
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
            <div className="col-span-5  bg-white rounded-[8px] p-4 overflow-y-auto">
              <h1 className="font-[600] text-[18px]">Tasks</h1>

              <div className="pt-[24px]">
                <h1 className="pb-[40px] text-[#1E1E1E] font-[500]">
                  Website Design
                </h1>

                <div className="flex flex-col gap-[24px] items-start w-full">
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
                      percent={100}
                      color1="#08FF03"
                      text="#1E1E1E"
                    />
                    <p className="text-[#343A40] text-[16px] font-[500]">
                      Research
                    </p>
                  </div>
                </div>
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
