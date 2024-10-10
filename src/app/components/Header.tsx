'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for mobile menu

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#CDFAD5]">
      {/* Logo */}
      <span className="text-3xl font-sans md:ml-16 font-bold text-[#185519]">𝐑𝐢𝐯𝐨</span>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={24}  /> : <FiMenu size={24}  />}
        </button>
      </div>

      {/* Navigation Links (Desktop and Mobile) */}
      <ul className={`md:flex space-x-6 absolute md:relative top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto bg-[#CDFAD5] md:bg-transparent flex-col md:flex-row items-center md:space-x-6 p-6 md:p-0 z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li>
          <Link href="/" aria-label="Home" className="font-medium text-[#185519] font-sans">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/shop" aria-label="Shop" className="font-medium text-[#185519] font-sans">
            SHOP
          </Link>
        </li>
        <li>
          <Link href="/features" aria-label="Features" className="font-medium text-[#185519] font-sans">
            FEATURES
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contact" className="font-medium text-[#185519] font-sans">
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Cart Icon and Login Button */}
      <div className="hidden md:flex items-center space-x-4 font-extrabold text-[#185519] md:mr-16">
        <TbShoppingBagPlus size={24} />
        <button className="px-6 py-2 bg-[#CDFAD5] text-[#185519] rounded hover:bg-[#185519] hover:text-[#CDFAD5] border-[#185519] border-2">
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Header;
