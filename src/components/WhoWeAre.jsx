"use client";
import Image from "next/image";
import React, { useEffect } from "react";


import img from "../img/who-we-are-img.png";

const WhoWeAre = () => {
 
  return (
    <div className="h-full py-10  ">
      <div
        className="xl:w-[70%] md:w-[90%] w-[90%] mx-auto grid lg:grid-cols-2 md:grid-cols-1 items-center gap-6"
      >
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-secondary">WHO WE ARE</h2>
          <h1 className="xl:text-[60px] md:text-[40px] text-[26px] xl:leading-[70px] md:leading-[55px] leading-[32px] text-primary font-bold">
            Digital Partners is a leading provider of digital identity
            solutions.
          </h1>
          <p className="text-black text-[22px] md:text-[20px] font-medium leading-[30px]">
            Our vision is to build technology for people to trust each other in
            a digital world. We bring trust to identity in every step of the
            customer journey from onboarding to off boarding. With us, safety
            and security always come first. We do not share any data with anyone
            else. Our top priority is to keep MobileID as safe and reliable as
            it has always been.
          </p>
        </div>

        <div className="flex lg:justify-end justify-center">
          <Image src={img} alt="Who we are" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
