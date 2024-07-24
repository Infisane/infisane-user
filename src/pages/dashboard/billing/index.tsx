import TopNav from "../../../components/TopNav";
import search from "../../../assets/search.svg";
import visa from "../../../assets/visa.svg";
import wifi from "../../../assets/wifi.svg";
import chip from "../../../assets/chip.svg";
import angleR from "../../../assets/angleR.svg";
import angleL from "../../../assets/angleL.svg";
import check from "../../../assets/check.svg";
import dot from "../../../assets/dot.png";
import visaa from "../../../assets/visaa.svg";
import paypal from "../../../assets/paypal.svg";
import master from "../../../assets/master.svg";
import minus from "../../../assets/minus.svg";
import circle from "../../../assets/tick-circle.svg";
import CustomModal from "../../../components/Modal";
import { useState } from "react";
import add from "../../../assets/add.svg";

const Billing = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setShow1(false)
    setShow2(false)
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
    <>
      {show && (
        <CustomModal
          isOpen={show}
          onClose={handleClose}
          className="lg:w-[464px]"
        >
          <p className="text-[20px] font-[600] text-dark mb-[32px]">
            Add Payment Method
          </p>

          <div className="flex flex-col w-full h-full gap-6 text-dark">
            <div className="flex w-full justify-between px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer">
              <div className="flex items-start gap-2 flex-col">
                <p className="text-[#1E1E1ECC] text-[12px] font-[500]">
                  Card Number
                </p>
                <input
                  type="text"
                  className="text-dark text-[14px] font-[600] border-none outline-none"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </div>
              <img src={master} alt="" />
            </div>
            <div className="flex justify-between items-center gap-[24px]">
              <div className="flex w-1/2 justify-between px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer">
                <div className="flex items-start gap-2 flex-col">
                  <p className="text-[#1E1E1ECC] text-[12px] font-[500]">
                    Expiration
                  </p>
                  <input
                    type="text"
                    className="text-dark text-[14px] font-[600] border-none outline-none"
                    placeholder="02/25"
                  />
                </div>
              </div>
              <div className="flex w-1/2 justify-between px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer">
                <div className="flex items-start gap-2 flex-col">
                  <p className="text-[#1E1E1ECC] text-[12px] font-[500]">CVC</p>
                  <input
                    type="text"
                    className="text-dark text-[14px] font-[600] border-none outline-none"
                    placeholder="xxx"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between px-[12px] py-[16px] border-[#D7D7D7] border-[2px] rounded-[8px] gap-2 cursor-pointer">
              <div className="flex items-start gap-2 flex-col">
                <p className="text-[#1E1E1ECC] text-[12px] font-[500]">
                  Cardholder Name{" "}
                </p>
                <input
                  type="text"
                  className="text-dark text-[14px] font-[600] border-none outline-none"
                  placeholder="John Johnson"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <button onClick={handleClose} className="h-[56px] w-1/2 border-dark border-[2px] font-[600] flex justify-center items-center bg-[#fff]  text-[#808080] rounded-[8px] gap-[10px]">
                Cancel
              </button>
              <button
                // onClick={handleShow}
                className="h-[56px] w-1/2 flex justify-center font-[600] items-center bg-[#1E1E1E]  text-white rounded-[8px] gap-[10px]"
              >
                <img src={add} alt="" />
                Add
              </button>
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
          <p className="text-[20px] font-[600] text-dark mb-[32px]">
            Edit Payment
          </p>
          <p className="text-[16px] font-[500] text-[#343A40] mb-[24px]">
            Available payment method{" "}
          </p>

          <div className="flex flex-col gap-[24px] w-full">
            <div className="border-[#007BFF] border-[3px] rounded-[8px] py-4 px-3 flex justify-between items-center">
              <div className="flex justify-start items-center gap-[6px]">
                <img src={master} alt="" />
                <div className="flex flex-col items-start gap-2">
                  <p className="text-[#1E1E1ECC] font-[500] text-[12px] ">
                    xxxx xxxx xxxx 0890
                  </p>
                  <p className="text-[16px] font-[600] text-dark">
                    Expiries 02/25
                  </p>
                </div>
              </div>

              <div>
                <img src={circle} alt="" />
              </div>
            </div>
            <div className="border-[#E9E9E9] border-[2px] rounded-[8px] py-4 px-3 flex justify-between items-center">
              <div className="flex justify-start items-center gap-[6px]">
                <img src={visaa} alt="" />
                <div className="flex flex-col items-start gap-2">
                  <p className="text-[#1E1E1ECC] font-[500] text-[12px] ">
                    xxxx xxxx xxxx 0890
                  </p>
                  <p className="text-[16px] font-[600] text-dark">
                    Expiries 02/25
                  </p>
                </div>
              </div>
            </div>
            <div className="border-[#E9E9E9] border-[2px] rounded-[8px] py-4 px-3 flex justify-between items-center">
              <div className="flex justify-start items-center gap-[6px]">
                <img src={paypal} alt="" />
                <div className="flex flex-col items-start gap-2">
                  <p className="text-[#1E1E1ECC] font-[500] text-[12px] ">
                    xxxx xxxx xxxx 0890
                  </p>
                  <p className="text-[16px] font-[600] text-dark">
                    Expiries 02/25
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <button className="h-[56px] w-1/2 border-dark border-[2px] font-[600] flex justify-center items-center bg-[#fff]  text-[#808080] rounded-[8px] gap-[10px]">
                <img src={minus} alt="" />
                Delete
              </button>
              <button
                onClick={handleShow}
                className="h-[56px] w-1/2 flex justify-center font-[600] items-center bg-[#1E1E1E]  text-white rounded-[8px] gap-[10px]"
              >
                <img src={add} alt="" />
                Add
              </button>
            </div>
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
          <p className="text-[20px] font-[600] text-dark mb-2">
            Subscription Plans
          </p>
          <p className="text-[16px] font-[500] text-[#343A40] mb-[32px]">
            Logo Design{" "}
          </p>

          <div className="grid grid-cols-4 gap-4 text-dark">
            <div className="flex w-full flex-col p-5 bg-[#54A7FF] rounded-[5px] gap-2 cursor-pointer">
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
              <button className="text-black border-[2px] border-dark mt-[16px] w-full bg-white text-[10px] font-[700] rounded-[3px] py-[12px]">
                Active
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
        <TopNav title={"Billing"} />
      </div>

      <div className="p-[32px]">
        <div className="flex justify-start items-center gap-1">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.783 19.6631H5.21634C3.14134 19.6631 1.45801 17.9797 1.45801 15.9047V10.2964C1.45801 8.22143 3.14134 6.53809 5.21634 6.53809H14.783C16.858 6.53809 18.5413 8.22143 18.5413 10.2964V11.4964C18.5413 11.8381 18.258 12.1214 17.9163 12.1214H16.233C15.9413 12.1214 15.6747 12.2298 15.483 12.4298L15.4747 12.4381C15.2413 12.6631 15.133 12.9714 15.158 13.2881C15.208 13.8381 15.733 14.2797 16.333 14.2797H17.9163C18.258 14.2797 18.5413 14.5631 18.5413 14.9047V15.8964C18.5413 17.9797 16.858 19.6631 14.783 19.6631ZM5.21634 7.78809C3.83301 7.78809 2.70801 8.91309 2.70801 10.2964V15.9047C2.70801 17.2881 3.83301 18.4131 5.21634 18.4131H14.783C16.1663 18.4131 17.2913 17.2881 17.2913 15.9047V15.5381H16.333C15.0747 15.5381 14.008 14.6047 13.908 13.4047C13.8413 12.7214 14.0913 12.0464 14.5913 11.5548C15.0247 11.1131 15.608 10.8714 16.233 10.8714H17.2913V10.2964C17.2913 8.91309 16.1663 7.78809 14.783 7.78809H5.21634Z"
              fill="black"
            />
            <path
              d="M2.08301 11.6721C1.74134 11.6721 1.45801 11.3887 1.45801 11.0471V7.23879C1.45801 5.99712 2.24134 4.87207 3.39967 4.43041L10.0163 1.93041C10.6997 1.67207 11.458 1.76378 12.0497 2.18045C12.6497 2.59712 12.9997 3.27211 12.9997 3.99711V7.16377C12.9997 7.50543 12.7163 7.78877 12.3747 7.78877C12.033 7.78877 11.7497 7.50543 11.7497 7.16377V3.99711C11.7497 3.68044 11.5997 3.38877 11.333 3.20543C11.0663 3.0221 10.7497 2.98043 10.4497 3.0971L3.83301 5.59709C3.15801 5.85543 2.69967 6.51379 2.69967 7.23879V11.0471C2.70801 11.3971 2.42467 11.6721 2.08301 11.6721Z"
              fill="black"
            />
            <path
              d="M16.3331 15.5387C15.0747 15.5387 14.0081 14.6054 13.9081 13.4054C13.8414 12.7137 14.0914 12.0387 14.5914 11.5471C15.0164 11.1137 15.5997 10.8721 16.2247 10.8721H17.9581C18.7831 10.8971 19.4164 11.547 19.4164 12.347V14.0638C19.4164 14.8638 18.7831 15.5137 17.9831 15.5387H16.3331ZM17.9414 12.1221H16.2331C15.9414 12.1221 15.6747 12.2304 15.4831 12.4304C15.2414 12.6637 15.1247 12.9804 15.1581 13.297C15.2081 13.847 15.7331 14.2887 16.3331 14.2887H17.9664C18.0747 14.2887 18.1747 14.1888 18.1747 14.0638V12.347C18.1747 12.222 18.0747 12.1304 17.9414 12.1221Z"
              fill="black"
            />
            <path
              d="M11.6663 11.3301H5.83301C5.49134 11.3301 5.20801 11.0467 5.20801 10.7051C5.20801 10.3634 5.49134 10.0801 5.83301 10.0801H11.6663C12.008 10.0801 12.2913 10.3634 12.2913 10.7051C12.2913 11.0467 12.008 11.3301 11.6663 11.3301Z"
              fill="black"
            />
          </svg>{" "}
          <p className="text-dark font-[500] text-[16px]">Billing</p>
        </div>

        <div className="mt-4 mb-[32px]">
          <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
            <h1 className="text-[32px] text-dark font-[600]">Billing</h1>
          </div>

          <div className="flex justify-between items-start w-full gap-[24px]">
            <div className="bg-white w-[74%] rounded-[8px] p-[24px]">
              <div className="relative">
                <img src={search} className="absolute top-2 left-1" alt="" />
                <input
                  type="search"
                  className="h-[38px] border-[1px] border-[#E9E9E9] outline-none w-[250px] pr-1 pl-[32px] text-[#444444]"
                  placeholder="Search"
                />
              </div>

              <div className="overflow-x-auto w-full mt-4">
                <table className=" text-left text-sm font-light lg:w-full">
                  <thead className="border-b font-medium border-[#D9E2E6] lg:mx-[10px] rounded-md mb-4">
                    <tr className="rounded-md mb-4 text-[#475156]">
                      <th
                        scope="col"
                        className="px-6 text-[20px] text-[#444444] font-[6OO] py-4"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 text-[20px] text-[#444444] font-[6OO] py-4"
                      >
                        Invoice
                      </th>
                      <th
                        scope="col"
                        className="px-6 text-[20px] text-[#444444] font-[6OO] py-4"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 text-[20px] text-[#444444] font-[6OO] py-4"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 text-[20px] text-[#444444] font-[6OO] py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="mt-3">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-[#F2F4F5] text-[14px]">
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        01/6/24
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[600] text-[#444444] text-[16px]">
                        INV-12345{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[500] text-[#444444] text-[16px]">
                        $50.00{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        Paid{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#fff] text-[12px]">
                        <button className="bg-[#1E1E1E] h-[30px] w-[77px] rounded-[4px]">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-[#F2F4F5] text-[14px]">
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        01/6/24
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[600] text-[#444444] text-[16px]">
                        INV-12345{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[500] text-[#444444] text-[16px]">
                        $50.00{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        Paid{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#fff] text-[12px]">
                        <button className="bg-[#1E1E1E] h-[30px] w-[77px] rounded-[4px]">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-[#F2F4F5] text-[14px]">
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        01/6/24
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[600] text-[#444444] text-[16px]">
                        INV-12345{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[500] text-[#444444] text-[16px]">
                        $50.00{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        Paid{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#fff] text-[12px]">
                        <button className="bg-[#1E1E1E] h-[30px] w-[77px] rounded-[4px]">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-[#F2F4F5] text-[14px]">
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        01/6/24
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[600] text-[#444444] text-[16px]">
                        INV-12345{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[500] text-[#444444] text-[16px]">
                        $50.00{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        Paid{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#fff] text-[12px]">
                        <button className="bg-[#1E1E1E] h-[30px] w-[77px] rounded-[4px]">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-[#F2F4F5] text-[14px]">
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        01/6/24
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[600] text-[#444444] text-[16px]">
                        INV-12345{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[500] text-[#444444] text-[16px]">
                        $50.00{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#444444] text-[16px]">
                        Paid{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-[400] text-[#fff] text-[12px]">
                        <button className="bg-[#1E1E1E] h-[30px] w-[77px] rounded-[4px]">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-[24px] flex justify-center items-center gap-5">
                <img src={angleR} alt="" />
                <div className="flex justify-center items-center gap-2">
                  <div className="h-10 w-10 flex justify-center items-center bg-[#1E1E1E] rounded-full text-[#fff] text-[14px] font-[600]">
                    01
                  </div>
                  <div className="h-10 w-10 flex justify-center items-center bg-[#E9E9E9] rounded-full text-[#343A40] text-[14px] font-[600]">
                    02
                  </div>
                  <div className="h-10 w-10 flex justify-center items-center bg-[#E9E9E9] rounded-full text-[#343A40] text-[14px] font-[600]">
                    03
                  </div>{" "}
                  <div className="h-10 w-10 flex justify-center items-center bg-[#E9E9E9] rounded-full text-[#343A40] text-[14px] font-[600]">
                    04
                  </div>{" "}
                  <div className="h-10 w-10 flex justify-center items-center bg-[#E9E9E9] rounded-full text-[#343A40] text-[14px] font-[600]">
                    05
                  </div>
                </div>
                <img src={angleL} alt="" />
              </div>
            </div>

            <div className="w-[26%] flex flex-col gap-[24px] ">
              <div className="bg-white w-full rounded-[8px] p-[16px]">
                <div className="flex justify-between items-center w-full mb-4">
                  <p className="text-[#1E1E1E] text-[18px] font-[600]">
                    Payment Method
                  </p>
                  <button
                    onClick={handleShow1}
                    className="text-[12px] font-[600] text-[#888888] underline"
                  >
                    Edit Payment
                  </button>
                </div>
                <div className="grad px-[15px] py-[14px] rounded-[10px] ">
                  <div className="mb-[52px]">
                    <img src={visa} alt="" />
                  </div>
                  <div className="flex justify-between items-center mb-[30px]">
                    <img src={chip} alt="" />
                    <img src={wifi} alt="" />
                  </div>
                  <div>
                    <p className="tracking-[5px] text-[12px] font-[700] text-white pb-[10px]">
                      2002 0301 0019 0943
                    </p>
                    <div className="flex justify-between items-center w-full mb-4">
                      <p className="tracking-[2px] text-[12px] font-[500] text-white">
                        KEVIN RAMIREZ
                      </p>
                      <p className="tracking-[2px] text-[12px] font-[500] text-white">
                        30/12
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white w-full rounded-[8px] p-[16px]">
                <div className="flex justify-between items-center w-full mb-2">
                  <p className="text-[#1E1E1E] text-[18px] font-[600]">
                    Subscription Plans{" "}
                  </p>
                </div>
                <p className="text-[#888888] text-[14px] mb-4">
                  Manage your subscription plan. View details about your current
                  plan and explore options to upgrade or downgrade based on your
                  needs.
                </p>

                <div className="flex flex-col items-start w-full gap-[16px]">
                  <div className="border-[1px] border-[#E9E9E9] rounded-[8px] p-[6px] w-full flex justify-between items-start">
                    <div className="flex justify-start items-center gap-1">
                      <div className="w-[28px] h-[28px] rounded-full bg-[#14141714] flex justify-center items-center">
                        <div className="h-[20px] w-[20px] bg-[#84071D] rounded-full"></div>
                      </div>
                      <h2 className="font-[600] text-#343A40] text-[13px]">
                        Logo Design
                      </h2>
                    </div>
                    <div className="text-right flex flex-col gap-0">
                      <h3 className="text-[12px] text-[#71839B] font-[500]">
                        Active
                      </h3>
                      <p className="text-[#343A40] underline font-[600] text-[14px] ">
                        $50
                      </p>

                      <button
                        onClick={handleShow2}
                        className="mt-[10px] text-[10px] text-white h-[20px] rounded-[4px] bg-[#1E1E1E] px-[12px]"
                      >
                        Upgrade
                      </button>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#E9E9E9] rounded-[8px] p-[6px] w-full flex justify-between items-center">
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
                        Active
                      </h3>
                      <p className="text-[#343A40] underline font-[600] text-[14px] ">
                        $200
                      </p>

                      <button
                        onClick={handleShow2}
                        className="mt-[10px] text-[10px] text-[#1E1E1E] h-[20px] rounded-[4px] border-[1px] border-[#1E1E1E] px-[12px]"
                      >
                        Downgrade
                      </button>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#E9E9E9] rounded-[8px] p-[6px] w-full flex justify-between items-center">
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
                        Active
                      </h3>
                      <p className="text-[#343A40] underline font-[600] text-[14px] ">
                        $30
                      </p>

                      <button className="mt-[10px] text-[10px] text-white h-[20px] rounded-[4px] bg-[#1E1E1E] px-[12px]">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
