"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import logo from '../img/whiz-cyber-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, url: "#home", title: "Home", active:true},
    { id: 2, url: "#about", title: "About", active:false },
    { id: 3, url: "#services", title: "Services", active:false },
    { id: 4, url: "#partners", title: "Partners", active:false },
  ];

  return (
    <nav className="px-4 py-6 transition-all duration-900 ease-in scroll-smooth">
      <div className="md:w-[70%] w-[90%] mx-auto flex items-center justify-between flex-wrap">
        <Link href="/"
          className={`flex items-center flex-shrink-0 text-white mr-6`}>
          {/* <span className="font-semibold text-xl tracking-tight"></span> */}
          <Image src={logo} alt="Digital Partners logo" />
        </Link>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white "
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-right text-lg lg:flex-grow">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                className={`block mt-4 lg:inline-block lg:mt-0 text-[20px] hover:text-secondary mr-4 ${nav.active ? 'text-secondary':'text-[#A5B6D2]'}`}
                scroll={false}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <div className="md:text-left text-right">
            <Link
              href="#contact"
              className="md:hover:bg-secondary md:bg-orange text-darkWhite md:px-10 py-3 mr-4 rounded-lg md:text-2xl text-[20px] "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;