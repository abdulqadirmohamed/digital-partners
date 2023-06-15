import Image from "next/image";
import React from "react";
import img1 from "../img/whatwedo/section2-left-img.png";
import img2 from "../img/whatwedo/digipost.png";
import img3 from "../img/whatwedo/mobile_id.png";
import img4 from "../img/whatwedo/money_me.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const WhatWeDo = () => {

  return (
    <div className=" bg-gradient-to-r from-[#232A44] to-[#1A2037] h-[650px]">
      <div className="w-[70%] mx-auto grid grid-cols-2 items-center h-full">
        {/* Image */}
        <div className="grid grid-cols">
          <Image src={img1} alt="about-section-img1" />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h2 className="text-secondary">WHAT WE DO</h2>
          <h1 className="text-[52px] text-darkWhite font-bold leading-[56px]">
            The Perfect Solution For all
          </h1>
          <div className="grid grid-cols-3">
            <Image src={img2} alt="about-section-img1" />
            <Image src={img3} alt="about-section-img1" />
            <Image src={img4} alt="about-section-img1" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
