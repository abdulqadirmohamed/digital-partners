"use client";
import Image from "next/image";
import React from "react";
import logo from "../img/digital-partners-logo.png";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { id: 1, url: "#services", title: "Services" },
    { id: 2, url: "#partners", title: "Partners" },
    { id: 3, url: "#about", title: "About" },
    { id: 4, url: "#contact", title: "Contact" },
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
    <div className="" id="contact">
      <div className="md:w-[70%] w-[90%] mx-auto h-full mt-5 py-10">
        <div className="flex md:justify-between justify-center gap-4">
          <div className="flex flex-col justify-center gap-4">
            <Link href="#home" onClick={handleScroll}>
              <Image src={logo} alt="Digital Partners logo" />
            </Link>
            <p className="text-[#A5B6D2] font-normal">
              Everything starts with identity...
            </p>
            <div className="flex md:justify-between justify-center gap-3">
              <span className="bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer">
                <FaTwitter />
              </span>
              <span className="bg-[#242B44] hover:bg-orange text-darkWhite p-3 rounded-md cursor-pointer">
                <RiInstagramFill />
              </span>
            </div>
          </div>
          <div className="md:block hidden">
            <h1 className="md:text-[24px] text-darkWhite font-bold my-2">
              About Us
            </h1>
            <div>
              {navLinks.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.url}
                  className="flex gap-1 items-center"
                  onClick={handleScroll}
                >
                  <svg
                    className="w-4 h-4 mr-1.5 text-[#1572B9] dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-[#A5B6D2] hover:text-secondary">
                    {nav.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:block hidden">
            <h1 className="md:text-[24px] text-darkWhite font-bold my-2">
              Contact Info
            </h1>
            <div>
              <div className="flex gap-2 items-center cursor-pointer group">
                <span className="text-orange group-hover:text-secondary">
                  <MdEmail />
                </span>
                <p className="text-[#A5B6D2] hover:underline group-hover:text-secondary">
                  sales@digitalpartner.tech
                </p>
              </div>
              <div className="flex gap-2 items-center cursor-pointer group">
                <span className="text-orange group-hover:text-secondary">
                  <MdEmail />
                </span>
                <p className="text-[#A5B6D2] hover:underline group-hover:text-secondary">
                  info@digitalpartner.tech
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* col 2 */}
        {/* col 1 */}
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="divide"></div>
      <div className="md:w-[70%] w-[90%] mx-auto h-full py-3 flex justify-center">
        <h2 className="text-[#A5B6D2] font-light">
          © {currentYear} New Creation, All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
