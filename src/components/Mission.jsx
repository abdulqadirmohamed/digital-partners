"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../img/mission.png";



const Mission = () => {
    
  return (
    <div className="bg-gradient-to-r to-black from-slate-800 shadow-sm md:h-[700px] h-full py-10 relative" id="about">
      <div className="xl:w-[70%] md:w-[90%] w-[90%] mx-auto grid md:grid-cols-2 items-center h-full">
        {/* Text */}
        <div className="flex flex-col gap-2 text-left py-10">
          <h1 className="md:text-[60px] text-[23px] text-white font-bold md:leading-[70px] leading-[32px]">
            For the next generation of digital life
          </h1>
          <p className="text-white text-[18px] md:text-[20px]  leading-[26px]">
            At Digital Partner, our mission is to create technology solutions for people to
            take full advantage of the digital world, safely, privately, and
            confidently – so together, we can build a better tomorrow.
          </p>
        </div>
        {/* Image */}
        <div className="flex lg:justify-end justify-center">
          <Image src={img} className="" alt="about-section-img1" />
        </div>
      </div>
    </div>
  );
};

export default Mission;

