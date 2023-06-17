"use client";
import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import img1 from "../img/partners/partners-icon1.png";
import img2 from "../img/partners/partners-icon2.png";
import img3 from "../img/partners/partners-icon3.png";
import img4 from "../img/partners/partners-icon4.png";
import img5 from "../img/partners/partners-icon5.png";
import img6 from "../img/partners/partners-icon6.png";
import img7 from "../img/partners/partners-icon7.png";
import img8 from "../img/partners/partners-icon8.png";

const Partners = () => {
  const logos = [
    { id: 1, logo: img1 },
    { id: 2, logo: img2 },
    { id: 3, logo: img3 },
    { id: 4, logo: img4 },
    { id: 5, logo: img5 },
    { id: 6, logo: img6 },
    { id: 7, logo: img7 },
    { id: 8, logo: img8 },
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
          bounce: 0.5,
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
    <div className="md:h-[550px] py-10" id="partners">
      <div ref={ref} className="md:w-[70%] w-[90%] mx-auto items-center h-full">
        <motion.div animate={animation} className="text-center">
          <h2 className="text-secondary">PARTNERS</h2>
          <h1 className="md:text-[60px] text-[26px] text-darkWhite font-bold leading-[56px]">
            We're Working With
          </h1>
        </motion.div>
        <Swiper
          className="mt-16"
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView:2,
            },
            576: {
              // width: 576,
              slidesPerView: 3,
            },
            768: {
              // width: 768,
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((logoImg) => (
            <SwiperSlide key={logoImg.id}>
              <div className=" bg-[#1D233C] p-5 flex items-center justify-center hover:bg-[#1A2037] cursor-pointer">
                <Image src={logoImg.logo} alt="Digital Partners logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
