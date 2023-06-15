import Image from "next/image";
import React from "react";
import whizCyberBanner from "../img/whiz-cyber-banner.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 items-center mt-24">
      <div>
        {/* social media icon */}
        <div>social media icon</div>
        {/* Text */}
        <div className="col-span-1">
          <h1 className="text-darkWhite text-[70px] font-bold leading-[70px]">Everything starts <span className="text-orange">With identity</span>  For Your Security</h1>
        </div>
      </div>
      {/* Image */}
      <div>
        <Image src={whizCyberBanner} alt="whiz-cyber-banner" />
      </div>
    </div>
  );
};

export default Hero;
