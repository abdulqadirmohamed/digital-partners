import Image from "next/image";
import React from "react";
import img1 from "../img/whatwedo/section2-left-img.png";
import img2 from "../img/whatwedo/digipost.png";
import img3 from "../img/whatwedo/mobile_id.png";
import img4 from "../img/whatwedo/money_me.png";

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-r from-[#232A44] to-[#1A2037] h-full md:h-[750px] py-10 ">
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-4 items-center h-full">
        <div className="col-span-1">
          <Image src={img1} alt="about-section-img1" />
        </div>

        <div className="col-span-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="md:text-left text-center">
              <h2 className="text-secondary">WHAT WE DO</h2>
              <h1 className="md:text-[60px] text-[26px] text-darkWhite font-bold md:leading-[70px] leading-[32px]">
                The Perfect Solution For all
              </h1>
            </div>
            <div className="grid md:grid-cols-3 justify-center">
              <Image src={img2} alt="about-section-img1" />
              <Image src={img3} alt="about-section-img1" />
              <Image src={img4} alt="about-section-img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
