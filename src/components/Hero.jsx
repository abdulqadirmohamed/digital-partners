'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import whizCyberBanner from "../img/whiz-cyber-banner.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Hero = () => {
  const {ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(()=>{
    if(inView){
      animation.start({
        x: 0,
        transition:{
          type: "spring", 
          duration: 3, 
          bounce: 0.5
        }
      })
    }
    if(!inView){
      animation.start({
       x: '-20vw'
      })
    }

  })
  return (
    <motion.div className="h-[650px] relative" >
      <div ref={ref} className="grid md:grid-cols-2 order-last items-center mt-24 md:w-[70%] w-[90%] mx-auto">
        <div className="">
          {/* social media icon */}
          <div className='hidden md:flex flex-col justify-center gap-3 absolute bottom-24 left-32 '>
            <span className='bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer'><FaFacebookF /></span>
            <span className='bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer'><FaTwitter /></span>
            <span className='bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer'><RiInstagramFill /></span>
          </div>
          {/* Text */}
          <div className="col-span-1">
            <motion.h1 
            animate={animation}
            className="text-darkWhite md:text-[70px] text-[37px] font-bold md:leading-[70px] leading-[40px] md:text-left text-center">
              Everything starts{" "}
              <span className="animate-text bg-gradient-to-r from-[#D88730] to-[#1A2037] via-[#9336B4] bg-clip-text text-transparent font-black">With identity</span> For Your
              Security
            </motion.h1>
          </div>
        </div>
        {/* Image */}
        <motion.div animate={animation}>
          <Image src={whizCyberBanner} alt="whiz-cyber-banner" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
