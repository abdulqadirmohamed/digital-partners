"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import img from "../img/who-we-are-img.png";

const WhoWeAre = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 40,
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
  });

  return (
    <div className="md:h-[650px] h-full py-10">
      <div
        ref={ref}
        className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center gap-6"
      >
        <div className="flex flex-col gap-6 md:text-left text-center">
          <h2 className="text-secondary">WHO WE ARE</h2>
          <h1 className="md:text-[60px] text-[26px] text-primary font-bold md:leading-[70px] leading-[32px]">
            Digital Partners is a leading provider of digital identity
            solutions.
          </h1>
          <p className="text-lightBlack md:text-[20px] text-[18px] leading-[26px]">
            Our vision is to build technology for people to trust each other in
            a digital world. We bring trust to identity in every step of the
            customer journey from onboarding to off boarding. With us, safety
            and security always come first. We do not share any data with anyone
            else. Our top priority is to keep MobileID as safe and reliable as
            it has always been.
          </p>
        </div>

        <motion.div animate={animation}>
          <Image src={img} alt="Who we are" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
