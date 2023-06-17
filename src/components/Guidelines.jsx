'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

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

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-20vw",
      });
    }
  }, [inView]);

  return (
    // <div className="bg-primary md:h-[650px] h-screen">
    //   <div className="md:w-[70%] w-[90%]  mx-auto flex flex-col justify-center items-center md:h-full h-screen">
    <div className="bg-primary py-10" id="guidlines">
      <div
      ref={ref}
        className="md:w-[70%] w-[90%] mx-auto flex flex-col justify-center items-center h-full"
      >
        <div className="text-center">
          <h2 className="text-secondary">WE FOLLOW THESE</h2>
          <h1 className="text-[60px] text-darkWhite font-bold leading-[56px]">
            Guidelines
          </h1>
        </div>
        <motion.div 
        animate={animation}
        className="grid md:grid-cols-4 gap-6 mt-16">
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1D233C] hover:border-[1px] border-[1px] border-[#1D233C] hover:border-secondary rounded-md p-16 cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Image src={plan.logo} alt="pricing plan icon" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;
