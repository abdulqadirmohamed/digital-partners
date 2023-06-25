'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import img1 from "../img/pricing-plan-icon1.png";
import img2 from "../img/pricing-plan-icon2.png";
import img3 from "../img/pricing-plan-icon3.png";
import img4 from "../img/pricing-plan-icon4.png";

const Guidelines = () => {
  const pricePlans = [
    { id: 1, logo: img1 },
    { id: 2, logo: img2 },
    { id: 3, logo: img3 },
    { id: 4, logo: img4 },
  ];

 
  return (
    <div className="py-10" id="guidlines">
      <div
        className="md:w-[70%] w-[90%] mx-auto flex flex-col justify-center items-center h-full"
      >
        <div className="text-center">
          <h2 className="text-secondary">WE FOLLOW THESE</h2>
          <h1 className="md:text-[60px] text-[30px] text-primary font-bold md:leading-[70px] leading-[32px]">
            Guidelines
          </h1>
        </div>
        <motion.div 
        className="grid grid-cols-4 md:gap-6 gap-4 md:mt-16 mt-8">
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-100 p-4 md:p-10 rounded-full md:rounded-md cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Image src={plan.logo} alt="pricing plan icon" className="md:w-full w-[50px]" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;
