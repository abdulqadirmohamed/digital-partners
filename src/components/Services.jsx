"use client";
import React, { useEffect } from "react";

import { motion } from "framer-motion";


import Image from "next/image";
import img1 from "../img/services-img2.png";
import img2 from "../img/services-img3.png";
import img3 from "../img/services-img4.png";
import img4 from "../img/services-img5.png";
import img5 from "../img/services-img6.png";
import img6 from "../img/services-img8.png";

const Services = () => {
  const pricePlans = [
    { id: 1, logo: img3, title: "E-Government" },
    { id: 2, logo: img2, title: "Banking, Financial Services & Insurence" },
    { id: 3, logo: img1, title: "Telecom & E-commerce" },
    { id: 4, logo: img4, title: "HR & Interim" },
    { id: 5, logo: img5, title: "Media & Entertainment" },
    { id: 6, logo: img6, title: "Mobility, Travel & Hospitality" }
  ];

 
  return (
    <div className="py-10" id="services">
      <div
       
        className="xl:w-[80%] md:w-[90%] w-[90%] mx-auto flex flex-col justify-center items-center h-full"
      >
        <div className="text-left">
          <h2 className="text-secondary">OUR SERVICES</h2>
          <h1 className="md:text-[60px] text-[26px] text-primary font-bold leading-[56px]">
            Digital Identity
          </h1>
          <p className="text-black text-[22px] my-3 md:text-[20px] font-medium leading-[30px] md:w-8/12 w-full">
            If you use MobileID, you can feel confident with our handling of
            your identity. And companies, authorities and organisations can
            calmly develop their services knowing that they have chosen a safe
            and proactive provider for identifications and signatures.
          </p>
        </div>
        <motion.div
          
          className="grid md:grid-cols-3 gap-6 mt-16 my-8"
        >
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className="xl:p-12 p-6 bg-gradient-to-r to-primary from-secondary hover:bg-gradient-to-bl hover:from-primary hover:to-secondary rounded-md flex flex-col items-center cursor-pointer transition-all duration-300 ease"
            >
              <Image src={plan.logo} alt="pricing plan icon" />
              <h1 className="lg:text-[24px] text-[20px] text-darkWhite text-center">{plan.title}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
