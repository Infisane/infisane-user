/* eslint-disable @typescript-eslint/no-unused-vars */
import TopNav from "../../../components/TopNav";
import img from "../../../assets/img.svg";
import arrow from "../../../assets/arrow-right.svg";
import send from "../../../assets/send.svg";
import Apex from "../../../components/PieChart";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleProject } from "../../../lib/useUser";
import { useAPI } from "../../../lib/useApi";
const ProjectDetails = () => {
  const [image, setImage] = useState<File | null>();
  const { id } = useParams();

  console.log(id);

  const { useQuery } = useAPI();

  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: () => getSingleProject(id ? id : '1'),
  });

  console.log(project);

  const photoInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files.item(0);
      setImage(file);
      // if (file instanceof File) {
      //   try {
      //     const downloadURL = await upload(file);
      //     console.log("File uploaded successfully:", downloadURL);
      //     setImage([downloadURL]);
      //   } catch (error) {
      //     console.error("Error uploading file:", error);
      //   }
      //   if (!file) return;
      // }
    }
  };

  const single = project ? project.data : []

  const stagesArray = single.progress ? Object.entries(single.progress) : [];

  return (
    <>
      <div className="min-h-screen pb-[10%]">
        <div className="sticky top-0 w-fill">
          <TopNav title={"Projects"} />
        </div>

        <div className="p-[32px]">
          <div className="flex justify-start items-center gap-1">
            <Link
              to={"/project"}
              className="flex justify-start items-center gap-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91699 15.0003V5.83366C2.91699 2.50033 3.75033 1.66699 7.08366 1.66699H12.917C16.2503 1.66699 17.0837 2.50033 17.0837 5.83366V14.167C17.0837 14.2837 17.0837 14.4003 17.0753 14.517"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66699 5.83301H13.3337"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66699 8.75H10.8337"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#808080] font-[500] text-[16px]">Projects</p>
            </Link>
            <img src={arrow} alt="" />
            <p className="text-dark font-[500] text-[16px]">
              {single.projectType}
            </p>
          </div>
          <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
            <h1 className="text-[32px] text-dark font-[600]">
              {single.projectType}
            </h1>
            <div className="flex justify-end items-center gap-4">
              <button className="flex justify-center items-center gap-2 px-[32px] h-[32px] border-dark border-[2px] rounded-[4px]">
                <p className="text-[12px] font-[600] text-dark">Pause</p>
              </button>
              <button className="flex justify-center items-center gap-2 px-[32px] h-[32px] bg-dark rounded-[4px]">
                <p className="text-[12px] font-[600] text-white">Upgrade</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full flex-wrap gap-[24px]">
            <div className="p-[24px] rounded-[8px] bg-white border-[#D7D7D7] border-[1px]">
              <p className="text-[16px] text-dark font-[500] mb-4">
                {single.projectType}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex flex-col items-start gap-4">
                    {stagesArray.map(([stage, details], index) => {
                      const detailObj = details as {
                        completionPercentage: number;
                      }; // Type assertion

                      const progress =
                        detailObj.completionPercentage > 0 ||
                        detailObj.completionPercentage < 25 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                              fill="#FF0000"
                            />
                          </svg>
                        ) : detailObj.completionPercentage >= 25 ||
                          detailObj.completionPercentage < 75 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                              fill="#FFB904"
                            />
                          </svg>
                        ) : detailObj.completionPercentage >= 75 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                              fill="#08FF03"
                            />
                            <path
                              d="M8.81621 12.9837C8.64954 12.9837 8.49121 12.917 8.37454 12.8003L6.01621 10.442C5.77454 10.2003 5.77454 9.80033 6.01621 9.55866C6.25788 9.31699 6.65788 9.31699 6.89954 9.55866L8.81621 11.4753L13.0995 7.19199C13.3412 6.95033 13.7412 6.95033 13.9829 7.19199C14.2245 7.43366 14.2245 7.83366 13.9829 8.07533L9.25788 12.8003C9.14121 12.917 8.98288 12.9837 8.81621 12.9837Z"
                              fill="#08FF03"
                            />
                          </svg>
                        ) : (
                          "#FFB822"
                        );

                      return (
                        <div
                          key={index}
                          className="flex justify-start gap-2 items-center"
                        >
                          {progress}
                          <p className="text-[14px] font-[500] text-[#808080]">
                            {stage}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-[34px] flex justify-start items-center gap-4">
                    <div className="flex flex-col items-center gap-[2px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                          fill="#08FF03"
                        />
                        <path
                          d="M8.81621 12.9837C8.64954 12.9837 8.49121 12.917 8.37454 12.8003L6.01621 10.442C5.77454 10.2003 5.77454 9.80033 6.01621 9.55866C6.25788 9.31699 6.65788 9.31699 6.89954 9.55866L8.81621 11.4753L13.0995 7.19199C13.3412 6.95033 13.7412 6.95033 13.9829 7.19199C14.2245 7.43366 14.2245 7.83366 13.9829 8.07533L9.25788 12.8003C9.14121 12.917 8.98288 12.9837 8.81621 12.9837Z"
                          fill="#08FF03"
                        />
                      </svg>
                      <p className="text-[12px] font-[400] text-[#343A40]">
                        Completed
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-[2px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                          fill="#FFB904"
                        />
                      </svg>
                      <p className="text-[12px] font-[400] text-[#343A40]">
                        In progress
                      </p>
                    </div>{" "}
                    <div className="flex flex-col items-center gap-[2px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                          fill="#FF0000"
                        />
                      </svg>
                      <p className="text-[12px] font-[400] text-[#343A40]">
                        Not started
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Apex
                    size={200}
                    percent={
                      single.status === "Pending"
                        ? 25
                        : single.status === "Ongoing"
                        ? 50
                        : single.status === "Completed"
                        ? 100
                        : 30
                    }
                    color1={
                      single.status === "Pending"
                        ? "#FFB822"
                        : single.status === "Ongoing"
                        ? "#FFB822"
                        : single.status === "Completed"
                        ? "#08FF03"
                        : "#FFB822"
                    }
                    text="#1E1E1E"
                    strokeWidth={25}
                  />
                </div>
              </div>
            </div>
            <div className="p-[24px] rounded-[8px] bg-white border-[#D7D7D7] border-[1px]">
              <p className="text-[16px] text-dark font-[500] mb-4">
                Upload Section{" "}
              </p>
              <div className="flex justify-between flex-col gap-[24px] items-center">
                <div className="w-full">
                  <input
                    type="file"
                    required
                    className="hidden"
                    ref={photoInput}
                    onChange={handleValidChange}
                  />
                  <div
                    className="border-[2px] border-dashed border-[#232321] rounded-[8px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                    onClick={() => {
                      if (photoInput.current) {
                        photoInput.current.click();
                      }
                    }}
                  >
                    {!image ? (
                      <>
                        <img src={img} alt="" />
                        <p className="text-[#929FA5] text-center">
                          Drop your image here, or{" "}
                          <span className="text-primary">Browse</span> <br />
                          Jpeg, png are allowed
                        </p>
                      </>
                    ) : (
                      <p className="text-green-400">
                        File uploaded successfully!
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end w-full items-center gap-4">
                  <button className="flex w-1/2 h-[48px] justify-center items-center gap-2 px-[32px] bg-dark rounded-[8px]">
                    <p className="text-[14px] font-[500] text-white">Confirm</p>
                  </button>
                  <button className="flex w-1/2 h-[48px] justify-center items-center gap-2 px-[32px] border-dark border-[2px] rounded-[8px]">
                    <p className="text-[14px] font-[500] text-[#8B909A]">
                      Cancel
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[24px] chat p-[24px] rounded-[16px]">
            <p className="text-[16px] text-dark font-[500] mb-4">
              Comment Section{" "}
            </p>

            <div className="flex justify-center items-center">
              <button className=" border-[#B0D6FF] border-[1px] rounded-full py-1 px-[28px] mb-4">
                Today
              </button>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-end w-full flex-col">
                <div className="w-[30%] bg-[#D8EBFF] p-4 rounded-tl-[25px] rounded-bl-[25px] rounded-br-[40px]">
                  <p className="text-[14px] text-[#464B4F]">
                    Good morning, i will like to change the color of the logo to
                    blue
                  </p>
                </div>
                <p className="text-[14px] text-[#464B4F]">9:24 am</p>
              </div>

              <div className="flex items-start w-full flex-col">
                <div className="w-[30%] bg-[#8AC2FF] p-4 rounded-tr-[25px] rounded-br-[25px] rounded-bl-[40px]">
                  <p className="text-[14px] text-[#464B4F]">
                    Okay... we will change it.{" "}
                  </p>
                </div>
                <p className="text-[14px] text-[#464B4F]">9:27 am</p>
              </div>
            </div>

            <div className="mt-[60px]">
              <div className="flex justify-center items-center gap-[24px]">
                <input
                  type="text"
                  className="h-[70px] border-[#989898] border-[1px] rounded-[28px] w-[60%] px-4"
                />
                <img src={send} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
