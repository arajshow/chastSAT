"use client";
import React from "react";
import Image from "next/image";
import HighLightSec from "./Core/HighLightSec";
import { leadearboardSec } from "@/data/leadearboardSec";
import { PiMedalFill } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
  console.log("data", leadearboardSec[-1]);
  return (
    <div className="flex flex-col my-4 mx-8 gap-5 cursor-pointer">
      <div className="flex flex-row gap-2 items-center justify-start">
        <Image
          src="https://res.cloudinary.com/diowelnqf/image/upload/v1708223784/photo_ql9q9g.png"
          className="relative aspect-w-16 aspect-h-16 rounded-full overflow-hidden"
          width={32}
          height={32}
        />
        <p className=" text-color1 font-medium">
          Chat<span className="font-semibold">SAT</span>
        </p>
      </div>

      {/* remaining area */}
      <div className="flex flex-col gap-4">
        <HighLightSec text={"New Thread"} customClass={"w-full px-5 py-4 "} />

        {/* streak Section */}
        <div className="relative flex flex-row z-30 w-full box-with-shadows items-center justify-center px-5 py-2 mx-auto overflow-hidden border border-[#707D61] text-color1 transition-all duration-500  rounded-lg cursor-pointer group ease bg-midColor">
          <div className="w-full hidden xl:block">
            <svg
              className="transform -rotate-90 w-[75%] h-[75%]"
              viewBox="0 0 100 100"
            >
              {/* Progress circle */}
              <circle
                className="text-[#394440] progress-ring__circle stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <circle
                className="text-highlight progress-ring__circle stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="330"
                strokeDashoffset={400 - (400 * 4) / 7}
              />
              <foreignObject x="0" y="0" width="100" height="100">
                {" "}
                <div className="flex flex-col transform translate-y-7 text-[0.8em] items-center rotate-90">
                  <p className=" text-highlight"> {"4/7"}</p>
                  <p className="font-semibold">Streak</p>
                </div>
              </foreignObject>
            </svg>
          </div>
          <div className="xl:w-[75%] flex flex-col xl:gap-2 gap-1 xl:items-end justify-center">
            <div className="flex flex-row gap-2 items-center font-semibold text-3xl pb-3">
              <PiMedalFill className="text-highlight " />
              <p className=" text-white">0/233</p>
              <span className="text-highlight font-bold">XP</span>
            </div>
            <HighLightSec
              text={"Take a Quiz"}
              customClass={
                "text-[0.9em] clg:w-[90%] text-center py-2 justify-center clg:my-0 my-2"
              }
            />
          </div>
        </div>

        {/* leaderBoard */}
        <div className="relative flex flex-col max-h-[320px] gap-2 z-30 pb-3 w-full box-with-shadows items-center justify-start mx-auto overflow-hidden font-bold border border-[#707D61] text-color1 transition-all duration-500 rounded-lg cursor-pointer group ease bg-midColor">
          <HighLightSec text={"Leaderboard"} customClass={"w-full px-5 py-3"} />
          {leadearboardSec.slice(0, 3).map((data) => (
            <HighLightSec
              key={data.id}
              customClass={`hover:scale-105 w-[90%] mx-auto px-5 py-3 ${
                data.id === "54."
                  ? "bg-gradient-to-b from-highlight/50 to-LcornerColor border-[#334640] "
                  : ""
              }`}
            >
              <div className={`flex flex-row justify-between`}>
                <div className="flex flex-row justify-start items-center gap-1">
                  <span className=" text-highlight">{data.id}</span>
                  <PiMedalFill className="text-highlight" />
                  <Image
                    src="https://res.cloudinary.com/diowelnqf/image/upload/v1708223784/photo_ql9q9g.png"
                    className="relative aspect-w-16 aspect-h-16 rounded-full overflow-hidden"
                    width={20}
                    height={20}
                  />
                  <p>{data.title}</p>
                </div>

                <div className="xl:flex flex-row items-center justify-end gap-1 hidden">
                  <p className="text-[1.2em] text-white">0/233</p>
                  <span className="text-highlight">XP</span>
                </div>
              </div>
            </HighLightSec>
          ))}
          <HighLightSec
            key={leadearboardSec[53].id}
            customClass={`hover:scale-105 flex-shrink-0 w-[90%] mx-auto px-5 py-3 bg-gradient-to-b from-highlight/50 to-LcornerColor border-[#334640]`}
          >
            <div className={`flex flex-row justify-between`}>
              <div className="flex flex-row justify-start items-center gap-1">
                <span className=" text-highlight">
                  {leadearboardSec[53].id}
                </span>
                <PiMedalFill className="text-highlight" />
                <Image
                  src="https://res.cloudinary.com/diowelnqf/image/upload/v1708223784/photo_ql9q9g.png"
                  className="relative aspect-w-16 aspect-h-16 rounded-full overflow-hidden"
                  width={20}
                  height={20}
                />
                <p>{leadearboardSec[53].title}</p>
              </div>

              <div className="xl:flex flex-row items-center justify-end gap-1 hidden">
                <p className="text-[1.2em] text-white">0/233</p>
                <span className="text-highlight">XP</span>
              </div>
            </div>
          </HighLightSec>
        </div>

        {/* name deatail */}
        <div className="flex flex-col gap-3 cursor-pointer">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="https://res.cloudinary.com/diowelnqf/image/upload/v1708223784/photo_ql9q9g.png"
              className="relative aspect-w-16 aspect-h-16 rounded-full overflow-hidden"
              width={48}
              height={48}
            />
            <p className="text-[1.3em]">Anand Raj</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BiLogOut />
            <p className="text-[0.8em]">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

// hover:box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
