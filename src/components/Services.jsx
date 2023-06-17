"use client";
import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import Image from "next/image";
import img1 from "../img/services-img2.png";
import img2 from "../img/services-img3.png";
import img3 from "../img/services-img4.png";
import img4 from "../img/services-img5.png";
import img5 from "../img/services-img6.png";
import img6 from "../img/services-img8.png";

const Services = () => {
  const pricePlans = [
    { id: 1, logo: img1, title: "Retail & E-commerce" },
    { id: 2, logo: img2, title: "Finance" },
    { id: 3, logo: img3, title: "E-Government" },
    { id: 4, logo: img4, title: "HR & Interim" },
    { id: 5, logo: img5, title: "Media & Entertainment" },
    { id: 6, logo: img6, title: "Mobility, Travel & Hospitality" },
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
    <div className="bg-primary py-10" id="services">
      <div
        ref={ref}
        className="md:w-[70%] w-[90%] mx-auto flex flex-col justify-center items-center h-full"
      >
        <div className="text-center">
          <h2 className="text-secondary">OUR SERVICES</h2>
          <h1 className="md:text-[60px] text-[26px] text-darkWhite font-bold leading-[56px]">
            Digital Identity
          </h1>
          <p className="md:text-[18px] text-[16px] text-darkWhite leading-[24px] my-4">
            If you use MobileID, you can feel confident with our handling of
            your identity. And companies, authorities and organisations can
            calmly develop their services knowing that they have chosen a safe
            and proactive provider for identifications and signatures.
          </p>
        </div>
        <motion.div
          animate={animation}
          className="grid md:grid-cols-3 gap-6 mt-16 my-8"
        >
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1D233C] hover:border-[1px] border-[1px] border-[#1D233C] hover:border-secondary rounded-md p-16 flex flex-col items-center cursor-pointer transition-all duration-300 ease"
            >
              <Image src={plan.logo} alt="pricing plan icon" />
              <h1 className="text-[24px] text-darkWhite">{plan.title}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
