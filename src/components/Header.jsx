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
    { id: 1, url: "#home", title: "Home" },
    { id: 2, url: "#about", title: "About" },
    { id: 3, url: "#services", title: "Services" },
    { id: 4, url: "#partners", title: "Partners" },
    { id: 5, url: "#contact", title: "Contact" },
  ];
  
  return (
    <nav className="px-4 py-6 transition-all duration-900 ease-in scroll-smooth">
      <div className="md:w-[70%] w-[90%] mx-auto flex items-center justify-between flex-wrap">
        <Link href="/"
          className="flex items-center flex-shrink-0 text-white mr-6">
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
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-secondary mr-4"
                scroll={false}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          {/* <div className="text-left">Social Media</div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;