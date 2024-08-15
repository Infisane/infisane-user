/* eslint-disable @typescript-eslint/no-explicit-any */
import TopNav from "../../../components/TopNav";
import project from "../../../assets/project.svg";
import add from "../../../assets/add.svg";
import check from "../../../assets/check.svg";
import dot from "../../../assets/dot.png";
import Apex from "../../../components/PieChart";
import CustomModal from "../../../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../../../lib/useApi";
import { getAllProjects } from "../../../lib/useUser";

const Project = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const { useQuery } = useAPI();

  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
  });

  console.log(projects);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(!show);
  };

  const handleShow2 = () => {
    setShow(false);
    setShow1(false);
    setShow2(true);
  };

  const handleClose2 = () => {
    setShow2(!show2);
  };

  const handleShow1 = () => {
    setShow2(false);
    setShow(false);
    setShow1(true);
  };

  const handleClose1 = () => {
    setShow1(!show1);
  };

  return (
    <div className="min-h-screen pb-[10%]">
      {show && (
        <CustomModal
          isOpen={show}
          onClose={handleClose}
          className="lg:w-[464px]"
        >
          <p className="text-[20px] font-[600] text-dark mb-2">New Project</p>
          <p className="text-[16px] font-[500] text-[#343A40] mb-[32px]">
            Select the project you want to assist you with.
          </p>

          <div className="grid grid-cols-3 h-full gap-4 text-dark">
            <div
              className="flex w-full flex-col px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer"
              onClick={handleShow1}
            >
              <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                <div className="h-[20px] w-[20px] bg-[#9108A7] rounded-full"></div>
              </div>
              <p className="font-[500] text-[16px]">Website Design</p>
            </div>
            <div
              className="flex w-full flex-col px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer"
              onClick={handleShow2}
            >
              <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                <div className="h-[20px] w-[20px] bg-[#84071D] rounded-full"></div>
              </div>
              <p className="font-[500] text-[16px]">
                Logo <br /> Design
              </p>
            </div>{" "}
            <div className="flex w-full flex-col px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer">
              <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                <div className="h-[20px] w-[20px] bg-[#0A6708] rounded-full"></div>
              </div>
              <p className="font-[500] text-[16px]">
                Graphics and Flyer Design
              </p>
            </div>
          </div>
        </CustomModal>
      )}

      {show1 && (
        <CustomModal
          isOpen={show1}
          onClose={handleClose1}
          className="lg:w-[464px]"
        >
          <p className="text-[20px] font-[600] text-dark mb-2">New Project</p>
          <p className="text-[16px] font-[500] text-[#343A40] mb-[32px]">
            Website Design{" "}
          </p>

          <div className="mt-[32px]">
            <p className="text-[#343A40] font-[500] mb-[24px]">
              You need to contact us to continue.
            </p>
            <Link
              to={`/project/forms/${1}`}
              className="h-[56px] w-full flex justify-center items-center bg-[#1E1E1E]  text-white rounded-[4px]"
            >
              Contact
            </Link>
          </div>
        </CustomModal>
      )}

      {show2 && (
        <CustomModal
          isOpen={show2}
          onClose={handleClose2}
          className="lg:w-[75%]"
          bg="bg-[#E9E9E9]"
        >
          <p className="text-[20px] font-[600] text-dark mb-2">New Project</p>
          <p className="text-[16px] font-[500] text-[#343A40] mb-[32px]">
            Logo Design{" "}
          </p>

          <div className="grid grid-cols-4 gap-4 text-dark">
            <div className="flex w-full flex-col p-5 bg-white rounded-[5px] gap-2 cursor-pointer">
              <div className="bg-[#F1F1F1] text-[#000B33] py-1 px-[9px] w-fit rounded-[4px] font-[600] text-[10px]">
                BASIC
              </div>
              <p className="mt-[10px] font-[300] text-[10px]">
                Basic Logo Design Plan
              </p>

              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <p className="font-[600] text-[43px] text-[#000B33] leading-9">
                $50
              </p>
              <p className="text-[#000B33] text-[10px] font-[600]">Per logo</p>
              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <div className="flex flex-col gap-[6px] items-start">
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Perfect for startups and small businesses.
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Receive one custom logo concept.{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Up to two revisions included.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      High-resolution files suitable for web use.{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> JPG/JPEG </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PNG </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PDF </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mockups </p>
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <p className="text-[10px] font-[300]">
                      <span className="font-[500]">NOTE:</span> This will be
                      available in three colour formats(White, Black and
                      Coloured)
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Delivery within 10 business days.{" "}
                  </p>
                </div>
              </div>
              <button className="bg-black mt-[16px] w-full text-white text-[10px] font-[700] rounded-[3px] py-[12px]">
                Select Plan
              </button>
            </div>{" "}
            <div className="flex w-full flex-col p-5 bg-white rounded-[5px] gap-2 cursor-pointer">
              <div className="bg-[#FFD700] text-[#000B33] py-1 px-[9px] w-fit rounded-[4px] font-[600] text-[10px]">
                GOLD
              </div>
              <p className="mt-[10px] font-[300] text-[10px]">
                Gold Logo Design Plan
              </p>

              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <p className="font-[600] text-[43px] text-[#000B33] leading-9">
                $150
              </p>
              <p className="text-[#000B33] text-[10px] font-[600]">Per logo</p>
              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <div className="flex flex-col gap-[6px] items-start">
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Ideal for growing businesses{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Three custom logo concepts to choose from.{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Up to five revisions included.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      High-resolution files suitable for both web and print.{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> JPG/JPEG </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PNG </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PDF </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mockups </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> SVGs </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Brand guideline document included{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Delivery within 7 business days.{" "}
                  </p>
                </div>
              </div>
              <button className="bg-black mt-[16px] w-full text-white text-[10px] font-[700] rounded-[3px] py-[12px]">
                Select Plan
              </button>
            </div>{" "}
            <div className="flex w-full flex-col p-5 bg-white rounded-[5px] gap-2 cursor-pointer">
              <div className="bg-[#6BFFF6] text-[#000B33] py-1 px-[9px] w-fit rounded-[4px] font-[600] text-[10px]">
                DIAMOND
              </div>
              <p className="mt-[10px] font-[300] text-[10px]">
                Diamond Logo Design Plan
              </p>

              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <p className="font-[600] text-[43px] text-[#000B33] leading-9">
                $350
              </p>
              <p className="text-[#000B33] text-[10px] font-[600]">Per logo</p>
              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <div className="flex flex-col gap-[6px] items-start">
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Ideal for growing businesses{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Three custom logo concepts to choose from{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Up to five revisions included.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      High-resolution files suitable for both web and print.{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> JPG/JPEG </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PNG </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PDF </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mockups </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> SVGs </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      Print of brand products{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> 1 T-shirt </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Face Cap </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mug </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Brand guideline document included{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Delivery within 7 business days.{" "}
                  </p>
                </div>
              </div>
              <button className="bg-black mt-[16px] w-full text-white text-[10px] font-[700] rounded-[3px] py-[12px]">
                Select Plan
              </button>
            </div>{" "}
            <div className="flex w-full flex-col p-5 bg-white rounded-[5px] gap-2 cursor-pointer">
              <div className="bg-[#F2ADAD] text-[#000B33] py-1 px-[9px] w-fit rounded-[4px] font-[600] text-[10px]">
                PLATINUM
              </div>
              <p className="mt-[10px] font-[300] text-[10px]">
                Platinum Logo Design Plan
              </p>

              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <p className="font-[600] text-[43px] text-[#000B33] leading-9">
                $500
              </p>
              <p className="text-[#000B33] text-[10px] font-[600]">Per logo</p>
              <div className="bg-[#001C80] h-[.5px] w-full my-[15px]"></div>
              <div className="flex flex-col gap-[6px] items-start">
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Best for established businesses seeking a strong brand
                    identity{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    {" "}
                    Five custom logo concepts with unlimited revisions{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      High-resolution files suitable for web use.{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> JPG/JPEG </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PNG </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> PDF </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mockups </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> SVGs </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> AI Files </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Business Card </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Flyers design </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Motion design </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Comprehensive brand guideline document{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center">
                    <img src={check} alt="" />{" "}
                    <p className="text-[10px] font-[300]">
                      {" "}
                      Print of brand products{" "}
                    </p>
                  </div>
                  <div className="flex justify-start flex-col items-start gap-[5px] mt-[5px]">
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> 1 T-shirt </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Face Cap </p>
                    </div>{" "}
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Mug </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]">
                        {" "}
                        100 copies business card print{" "}
                      </p>
                    </div>
                    <div className="flex justify-start gap-[3px] items-center">
                      <img src={dot} alt="" />{" "}
                      <p className="text-[10px] font-[300]"> Jotter & Pen </p>
                    </div>{" "}
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <img src={check} alt="" />{" "}
                  <p className="text-[10px] font-[300]">
                    Priority customer support{" "}
                  </p>
                </div>
              </div>
              <button className="bg-black mt-[16px] w-full text-white text-[10px] font-[700] rounded-[3px] py-[12px]">
                Select Plan
              </button>
            </div>{" "}
          </div>
        </CustomModal>
      )}

      <div className="sticky top-0 w-fill">
        <TopNav title={"Projects"} />
      </div>

      <div className="p-[32px]">
        <div className="flex justify-start items-center gap-1">
          <img src={project} alt="" />
          <p className="text-dark font-[500] text-[16px]">Projects</p>
        </div>

        <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
          <h1 className="text-[32px] text-dark font-[600]">Projects</h1>
          <button
            onClick={handleShow}
            className="flex justify-center items-center gap-2 w-[160px] h-[32px] bg-dark rounded-[4px]"
          >
            <img src={add} alt="" />
            <p className="text-[12px] font-[600] text-white">New Project</p>
          </button>
        </div>

        {projects && projects?.data && projects.data?.length > 0 ? (
          <div className="flex justify-center items-center w-full flex-wrap gap-[24px]">
            {projects &&
              projects.data.map((project: any, i: any) => {
                 const stagesArray = project.progress
                   ? Object.entries(project.progress)
                   : [];
                return (
                  <Link
                    key={i}
                    to={`/project/${project._id}`}
                    className="p-[24px] rounded-[8px]  min-h-[300px] bg-white w-[48%] border-[#D7D7D7] border-[1px]"
                  >
                    <p className="text-[16px] text-dark font-[500] mb-4">
                      {project.projectType}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex flex-col items-start gap-4">
                          {stagesArray.map(([stage, details], index) => {
                            const detailObj = details as {
                              completionPercentage: number;
                            }; 

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
                          size={150}
                          percent={
                            project.status === "Pending"
                              ? 25
                              : project.status === "Ongoing"
                              ? 50
                              : project.status === "Completed"
                              ? 100
                              : 30
                          }
                          text="#1E1E1E"
                          color1={
                            project.status === "Pending"
                              ? "#FFB822"
                              : project.status === "Ongoing"
                              ? "#FFB822"
                              : project.status === "Completed"
                              ? "#08FF03"
                              : "#FFB822"
                          }
                          strokeWidth={25}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        ) : (
          <p className="text-center w-full font-semibold text-[20px]">No active project</p>
        )}
      </div>
    </div>
  );
};

export default Project;
