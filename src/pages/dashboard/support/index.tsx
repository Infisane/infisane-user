import TopNav from "../../../components/TopNav";
import setting from "../../../assets/setting.svg";
import add from "../../../assets/add.svg";
import chatbot from "../../../assets/chatbot.svg";
import send from "../../../assets/send.svg";
import Faq from "../components/Faq";

const Support = () => {
  return (
    <>
      <div className="sticky top-0 w-fill">
        <TopNav title={"Support"} />

        <div className="p-[32px]">
          <div className="flex justify-start items-center gap-1">
            <img src={setting} alt="" />
            <p className="text-dark font-[500] text-[16px]">Support</p>
          </div>

          <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
            <h1 className="text-[32px] text-dark font-[600]">Support</h1>
            <button className="flex justify-center items-center gap-2 w-[160px] h-[32px] bg-dark rounded-[4px]">
              <img src={add} alt="" />

              <p className="text-[12px] font-[600] text-white">New Message</p>
            </button>
          </div>

          <div className="flex justify-between items-start gap-[24px]">
            <div className="p-[24px] chat w-[68%] h-[100vh] rounded-[8px] flex flex-col justify-between">
              <div className="flex justify-start items-center gap-4">
                <img src={chatbot} alt="" />
                <p className="text-dark text-[18px] font-[600]">Chatbot</p>
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <button className=" border-[#B0D6FF] border-[1px] rounded-full py-1 px-[28px] mb-4">
                    Today
                  </button>
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-end w-full flex-col">
                    <div className="w-[40%] bg-[#D8EBFF] p-4 rounded-tl-[25px] rounded-bl-[25px] rounded-br-[40px]">
                      <p className="text-[14px] text-[#464B4F]">
                        Good morning, i will like to change the color of the
                        logo to blue
                      </p>
                    </div>
                    <p className="text-[14px] text-[#464B4F]">9:24 am</p>
                  </div>

                  <div className="flex items-start w-full flex-col">
                    <div className="w-[40%] bg-[#8AC2FF] p-4 rounded-tr-[25px] rounded-br-[25px] rounded-bl-[40px]">
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

            <div className="w-[32%] bg-[#FFFFFFE5] p-[16px] rounded-[8px] ">
              <p className="font-[600] text-[18px] text-dark">FAQ&apos;s</p>
              <p className="mt-[2px] text-[#888888] text-[14px] mb-4">
                Welcome to the Infisane FAQ section! Find answers to common
                questions about our services and policies. For further
                assistance, contact our support team.
              </p>

              <div className="flex flex-col items-start w-full gap-4">
                <Faq
                  question="What services does Infisane offer?"
                  answer="Infisane offers a range of services including website design, logo
              creation, and graphic design. We provide custom solutions tailored
              to your specific needs to help you build a strong brand identity
              and online presence."
                />
                <Faq
                  question="What services does Infisane offer?"
                  answer="Infisane offers a range of services including website design, logo
              creation, and graphic design. We provide custom solutions tailored
              to your specific needs to help you build a strong brand identity
              and online presence."
                />
                <Faq
                  question="What services does Infisane offer?"
                  answer="Infisane offers a range of services including website design, logo
              creation, and graphic design. We provide custom solutions tailored
              to your specific needs to help you build a strong brand identity
              and online presence."
                />
                <Faq
                  question="What services does Infisane offer?"
                  answer="Infisane offers a range of services including website design, logo
              creation, and graphic design. We provide custom solutions tailored
              to your specific needs to help you build a strong brand identity
              and online presence."
                />
                <Faq
                  question="What services does Infisane offer?"
                  answer="Infisane offers a range of services including website design, logo
              creation, and graphic design. We provide custom solutions tailored
              to your specific needs to help you build a strong brand identity
              and online presence."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
