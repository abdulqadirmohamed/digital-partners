import Image from "next/image";
import React from "react";
import img from '../img/who-we-are-img.png'


const WhoWeAre = () => {
  return (
    <div className="bg-gradient-to-r to-[#232A44] from-[#1A2037] h-[650px]">
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center gap-6">
        {/* Text */}
        <div className="flex flex-col gap-6 md:text-left text-center">
          <h2 className="text-secondary">WHO WE ARE</h2>
          <h1 className="md:text-[60px] text-[26px] text-darkWhite font-bold md:leading-[70px] leading-[32px]">
            New Creation is a leading provider of digital identity solutions.
          </h1>
          <p className="text-darkWhite md:text-[20px] text-[18px] leading-[26px]">
            Our vision is to build technology for people to trust each other in a
            digital world. We bring trust to identity in every step of the
            customer journey from onboarding to off boarding. With us, safety and
            security always come first. We do not share any data with anyone else.
            Our top priority is to keep MobileID as safe and reliable as it has
            always been.
          </p>
        </div>
        {/* Image */}
        <div>
          <Image src={img} alt="Who we are"/>
        </div>
      </div>
    </div>
    );

};

export default WhoWeAre;
