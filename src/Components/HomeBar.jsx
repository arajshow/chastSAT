"use client";
import { prepData } from "@/data/prepData";
import React from "react";
import Card from "./Core/Card";

const HomeBar = () => {
  return (
    <div className="flex flex-col gap-10 items-center md:ml-[4%] md:mr-[1%] mx-[6%] mt-8 mb-60 max-w-maxContent">
      {/* heading */}
      <div>
        <p className="text-white text-5xl font-semibold">
          Hey, <span className="text-highlight">Anand!</span>
        </p>
        <p className="text-white text-5xl font-semibold">
          How's your prep for the{" "}
          <span className="text-highlight">March SAT</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 h-full cursor-pointer">
        {prepData.map((data, id) => (
          <Card key={id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeBar;
