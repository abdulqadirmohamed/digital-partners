"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../img/glowing_blue.jpg";

const heroStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/network-digital-technology-background_56104-689.jpg?w=1480&t=st=1687591449~exp=1687592049~hmac=e9f74dd0633efe449ba752c779c07e8d1f29303f641be8ba08ae5f0143e51723")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    // filter: "blur(5px)",
    backdropfilter: "blur(50px)",
  };

const Mission = () => {
    
  return (
    <div className="shadow-sm md:h-[700px] h-full py-10 relative" id="about" style={heroStyle}>
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center h-full">
        {/* Text */}
        <div className="flex flex-col gap-2 md:text-left text-center py-10">
          <h1 className="md:text-[60px] text-[26px] text-white font-bold md:leading-[70px] leading-[32px]">
            For the next generation of digital life
          </h1>
          <p className="text-white text-[18px] md:text-[20px]  leading-[26px]">
            At Digital Partner, our mission is to create technology solutions for people to
            take full advantage of the digital world, safely, privately, and
            confidently – so together, we can build a better tomorrow.
          </p>
        </div>
        {/* Image */}
        <div className="absolute ">
          {/* <Image src={img} className="h-full z-[-10]" alt="about-section-img1" /> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;
