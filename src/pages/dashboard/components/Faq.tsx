import { useState } from "react";
import arrouUp from '../../../assets/arrow-up.svg'
import arrouDown from '../../../assets/arrow-down.svg'

type FaqType = {
    question: string;
    answer: string;
  };

const Faq = ({question, answer}: FaqType ) => {
    const [show, setShow] = useState(false)
    return (
      <>
        <div className="border-[#E9E9E9] border-[1px] rounded-[8px] p-[6px] w-full">
          <div
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <h2 className="text-[14px] text-[#343A40] font-[600]">
              {question}
            </h2>
            <img src={!show ? arrouDown : arrouUp} alt="" />
          </div>

         {show && <div className="mt-[6px]">
            <p className="text-[12px] text-[#888888]">
              {answer}
            </p>
          </div>}
        </div>
      </>
    );
}
 
export default Faq;