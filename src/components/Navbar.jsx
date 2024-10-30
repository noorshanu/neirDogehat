import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitterX} from "react-icons/bs";
import {  FaTelegram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaReddit } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="   z-40">
      <div className=" container-wrapper mx-auto  flex justify-between items-center  px-8 py-1 ">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/logo.png" className="h-[100px]" alt=" Logo" />

       
        </a>

        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center bg-white shadow-xl border-2 border-black rounded-full">
          <a href="/" className="text-[#be22f7] font-bold text-lg px-3 py-2">Home</a>
          <a href="#about" className="text-[#be22f7] font-bold text-lg px-3 py-2">About</a>
          <a href="#col" className="text-[#be22f7] font-bold text-lg px-3 py-2">Tokenomics</a>
          <a href="/images/whitepaper.pdf"  className="text-[#be22f7] font-bold text-lg px-3 py-2">Whitepaper</a>
         
          <a href="#contact" className="text-[#be22f7] font-bold text-lg px-3 py-2">Contact Us</a>
        </div>

        {/* Wallet Connect button */}
        <div className="md:flex items-center">
        <div className=" flex items-center gap-4 text-white  ml-5">
        <a
                  href="https://x.com/NeiroWifHatSol_?t=TNEd9laESB1-7SfVRZ1nuQ&s=09" rel="noreferrer" target="_blank"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/NeiroWifHat_SOLANA" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://coinmarketcap.com/currencies/neirowifhat/" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] hidden sm:block rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                 <img src="images/cmc.png" alt="" className=" w-auto h-5 " />
                </a>
                <a
                  href="https://www.tiktok.com/@neirowifhat?_t=8qq0vacfLBm&_r=1" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                 <IoLogoTiktok />
                </a>
              </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-white rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4 flex flex-col"
          >
              <a href="/" className="text-[#be22f7] font-bold text-lg px-3 py-2">Home</a>
          <a href="#about" className="text-[#be22f7] font-bold text-lg px-3 py-2">About</a>
          <a href="#col" className="text-[#be22f7] font-bold text-lg px-3 py-2">Tokenomics</a>
         
          <a href="#contact" className="text-[#be22f7] font-bold text-lg px-3 py-2">Contact Us</a>
            
            <div className=" flex items-center gap-4 text-white mb-6 ml-5">
            <a
                  href="https://x.com/NeiroWifHatSol_?t=TNEd9laESB1-7SfVRZ1nuQ&s=09"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/NeiroWifHat_SOLANA" target="_blank" rel="noreferrer"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://www.tiktok.com/@neirowifhat?_t=8qq0vacfLBm&_r=1" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                 <IoLogoTiktok />
                </a>
                <a
                  href="https://www.reddit.com/r/NeiroWifHat/s/d0AUa5oaDA" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                 <FaReddit />
                </a>
              </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
