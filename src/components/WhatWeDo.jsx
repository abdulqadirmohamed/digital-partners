import Image from "next/image";
import React from "react";
import img1 from "../img/whatwedo/section2-left-img.png";
import img2 from "../img/whatwedo/digipost.png";
import img3 from "../img/whatwedo/mobile_id.png";
import img4 from "../img/whatwedo/money_me.png";

const WhatWeDo = () => {
  return (
    <div className=" h-full md:h-full  flex justify-center items-center">
      <div className="xl:w-[70%] md:w-[90%] w-[90%] ">
        <div className="flex justify-center items-center">
          <Image src={img1} alt="about-section-img1" />
        </div>

        {/* <div className="col-span-3">
          <div className="flex flex-col items-center gap-2">
            <div className="text-left">
              <h2 className="text-secondary">WHAT WE DO</h2>
              <h1 className="xl:text-[60px] md:text-[40px] text-[26px] text-primary font-bold xl:leading-[70px] md:leading-[55px] leading-[32px]">
                The Perfect Solution For all
              </h1>
            </div>
            <div className="sm:grid md:grid-cols-3 hidden justify-center">
              <Image src={img3} alt="about-section-img1" />
              <Image src={img2} alt="about-section-img1" />
              <Image src={img4} alt="about-section-img1" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDo;
