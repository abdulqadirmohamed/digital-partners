import Image from "next/image";
import React from "react";
import whizCyberBanner from "../img/whiz-cyber-banner.png";

const Hero = () => {
  return (
    <div className="h-[650px]">
      <div className="grid md:grid-cols-2 order-last items-center mt-24 md:w-[70%] w-[90%] mx-auto ">
        <div>
          {/* social media icon */}
          <div className="hidden md:block">social media icon</div>
          {/* Text */}
          <div className="col-span-1">
            <h1 className="text-darkWhite md:text-[70px] text-[37px] font-bold md:leading-[70px] leading-[40px] md:text-left text-center">
              Everything starts{" "}
              <span className="animate-text bg-gradient-to-r from-[#D88730] to-[#1A2037] via-[#9336B4] bg-clip-text text-transparent font-black">With identity</span> For Your
              Security
            </h1>
          </div>
        </div>
        {/* Image */}
        <div>
          <Image src={whizCyberBanner} alt="whiz-cyber-banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
