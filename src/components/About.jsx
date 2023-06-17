"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../img/about-section-img1.png";
import img2 from "../img/about-section-img2.png";
import img3 from "../img/about-section-img3.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "-10vw",
      });
    }
  }, [inView]);

  const lists = [
    { id: 1, title: "Mobile Money" },
    { id: 2, title: "Content Delivery Network" },
    { id: 3, title: "Security Management" },
    { id: 4, title: "SIEM Threat Detection" },
    { id: 5, title: "Cloud Security" },
    { id: 6, title: "Cyber Security" },
    { id: 7, title: "Digital Post" },
    { id: 8, title: "Server Security" },
  ];
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className=" bg-gradient-to-r from-[#232A44] to-[#1A2037]  md:h-[900px] h-screen py-10"
      id="about"
    >
      <div
        ref={ref}
        className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center h-full"
      >
        {/* Image */}
        <motion.div
          animate={animation}
          className="grid grid-cols-2 gap-3 items-end "
        >
          <Image src={img1} alt="about-section-img1" />
          <Image src={img2} alt="about-section-img2" />
          <Image src={img3} alt="about-section-img3" />
        </motion.div>
        {/* Text */}
        <motion.div
          animate={animation}
          className="flex flex-col gap-2 md:text-left text-center py-10">
          <h2 className="text-secondary">ABOUT US</h2>
          <h1 className="md:text-[60px] text-[26px] text-darkWhite font-bold md:leading-[70px] leading-[32px]">
            Everything starts with identity
          </h1>
          <p className="text-darkWhite md:text-[20px] text-[18px] leading-[26px]">
            At Digital Partners we start at the grassroot to build our solutions for
            identity.
          </p>
          <div className="grid md:grid-cols-2 my-4">
            {lists.map((list) => (
              <div className="flex gap-2 text-lg items-center" key={list.id}>
                <BsFillArrowRightCircleFill className="text-orange" />
                <h2 className="text-darkWhite md:text-[18px] text-[15px]">
                  {list.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="my-10">
            <Link
              onClick={handleScroll}
              href="#contact"
              className="text-left bg-secondary hover:bg-orange text-darkWhite px-12 py-3 rounded-md text-2xl"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
