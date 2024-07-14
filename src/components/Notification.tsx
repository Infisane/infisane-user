import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      console.log("closed");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlayy"
      onClick={handleOverlayClick}
    >
      <div className="absolute lg:right-[55px] bg-white rounded-[8px] top-[40px] lg:top-[90px] shadow-lg w-[90%] lg:w-[426px] p-[24px]">
        {/* <div className="bg-white rounded-lg w-[90%] lg:w-[40%] max-w-md mx-auto relative"> */}
          {/* <div className="p-4 absolute top-0 right-2 flex justify-center items-center"> */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 border-[#475156] text-center flex justify-center items-center rounded-full border-[2px] w-[20px] text-white bg-black h-[20px]"
            >
              &times;
            </button>
          {children}
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Modal;
