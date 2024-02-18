"use Client";
import React from "react";

const HighLightSec = ({ children, text, customClass }) => {
  return (
    <div
      className={`relative z-30 shadow-[inset_-2px_-2px_60px_#465953] items-center overflow-hidden border border-[#707D61]/50 text-white transition-all duration-400 rounded-lg cursor-pointer group ease bg-midColor hover:shadow-[inset_-8px_-8px_80px_#4F5E59] hover:border-[#334640] ${customClass}`}
    >
      {children ? children : text}
    </div>
  );
};

export default HighLightSec;
