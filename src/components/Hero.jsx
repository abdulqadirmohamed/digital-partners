"use client";
import Image from "next/image";
import React, { useEffect, useState, Fragment } from "react";
import whizCyberBanner from "../img/whiz-cyber-banner.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";

const Hero = () => {
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
  });

  //
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  //

  const heroStyle = {
    backgroundImage:
      "https://www.flickr.com/photos/197122939@N08/52997327757/in/dateposted/",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundRepeat: 'no repeat',
    // filter: "blur(5px)",
    backdropfilter: "blur(50px)",
  };
  return (
    <motion.div
      className="h-[650px] w-full mx-auto relative bg-gradient-to-r from-[#1A2037] to-black"
      style={heroStyle}
    >
      <div
        ref={ref}
        className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2  items-center"
      >
        <div>
          {/* social media icon */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3 absolute bottom-24 left-32 ">
            <span className="bg-gradient-to-r to-primary from-secondary text-white p-3 rounded-md cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="bg-gradient-to-r to-primary from-secondary text-white p-3 rounded-md cursor-pointer">
              <FaTwitter />
            </span>
            <span className="bg-gradient-to-r to-primary from-secondary text-white p-3 rounded-md cursor-pointer">
              <RiInstagramFill />
            </span>
          </div>
          {/* Text */}
          <div className="col-span-1 z-48">
            <motion.h1
              animate={animation}
              className="text-white md:text-[70px] md:t-0 mt-16 text-[37px] font-bold md:leading-[70px] leading-[40px] md:text-left text-center"
            >
              Everything Starts{" "}
              <span className="animate-text bg-gradient-to-r from-[#2D76E7] to-[#802FD7] via-[#511b64] bg-clip-text text-transparent">
                With Identity
              </span>{" "}
              For Your Security
            </motion.h1>
          </div>
          {/* Diolog */}
          <div className="my-4">
            <div className="inset-0 flex md:justify-left justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-gradient-to-l to-primary from-secondary hover:to-secondary hover:from-primary bg-opacity-20 px-4 py-2 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Watch Video
              </button>
            </div>
         
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 m-10">
                  <div className="flex h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className=" bg-white flex justify-center transform  rounded-2xl  p-6 shadow-xl transition-all">
                        <div className="mt-2">
                          <ReactPlayer url="https://vimeo.com/839465389" controls />
                        </div>

                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          {/* End Diolog */}
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
