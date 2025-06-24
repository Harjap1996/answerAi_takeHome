import React from "react";

type SlideOverProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const SlideOver = ({ isOpen, onClose, children }: SlideOverProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-[#18181A] border-l border-[#525252] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default SlideOver;
