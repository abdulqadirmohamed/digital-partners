'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";


import 'swiper/css';
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
  ]

  return (
    <div className="md:h-[550px] md:h-[750px] py-10" id='partners'>
      <div className="md:w-[70%] w-[90%] mx-auto items-center h-full">
        <div className="text-center">
          <h2 className="text-secondary">OUR SERVICES</h2>
          <h1 className="text-[60px] text-darkWhite font-bold leading-[56px]">
            Digital Identity
          </h1>
        </div>
        <Swiper
        className='mt-16'
          spaceBetween={50}
          slidesPerView={5}
          Autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {logos.map((logoImg) => (
            <SwiperSlide key={logoImg.id}>
              <div className='bg-[#1D233C] p-5 flex items-center justify-center hover:bg-[#1A2037] cursor-pointer'>
                <Image src={logoImg.logo} />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners