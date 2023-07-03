"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../img/about-section-img1.png";
import img2 from "../img/about-section-img2.png";
import img3 from "../img/about-section-img3.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const About = () => {
  const lists = [
    { id: 1, title: "MobileID" },
    { id: 2, title: "Security Management" },
    { id: 10, title: "BankID" },
    { id: 4, title: "Content Delivery Network" },
    { id: 3, title: "Mobile Money" },
    { id: 5, title: "Digital Post" },
    { id: 6, title: "SIEM Threat Detection" },
    { id: 7, title: "Cloud Security" },
    { id: 8, title: "Cyber Security" },
    { id: 9, title: "Server Security" },
  ];
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="h-full  py-10" id="about">
      <div className="xl:w-[70%] md:w-[90%] w-[90%]  mx-auto grid lg:grid-cols-2 md:grid-cols-1 items-center h-full">
        {/* Image */}
        <div className="grid grid-cols-2 gap-3 items-end ">
          <Image src={img1} alt="about-section-img1" />
          <Image src={img2} alt="about-section-img2" />
          <Image src={img3} alt="about-section-img3" />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-2 md:text-left text-center py-10">
          <h2 className="text-secondary">ABOUT US</h2>
          <h1 className="xl:text-[60px] md:text-[40px] text-[26px] text-primary font-bold xl:leading-[70px] md:leading-[55px] leading-[32px]">
            Everything starts with identity
          </h1>
          <p className="text-lightBlack text-[18px] md:text-[20px]  leading-[26px]">
            At Digital Partners we start at the grassroot to build our solutions
            for identity.
          </p>
          <div className="grid sm:grid-cols-2 my-4 md:mx-0 mx-auto">
            {lists.map((list) => (
              <div className="flex gap-2 text-lg items-center" key={list.id}>
                <BsFillArrowRightCircleFill className="text-secondary" />
                <h2 className="text-lightBlack text-[18px] list-outside">
                  {list.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="my-10">
            <Link
              onClick={handleScroll}
              href="#contact"
              className="bg-gradient-to-r to-primary from-secondary hover:bg-orange text-darkWhite px-12 py-3 rounded-md text-2xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
