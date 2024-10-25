import { BsTwitterX,  } from "react-icons/bs";
import {  FaTelegram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaReddit } from "react-icons/fa";

function Footer() {
  return (
    <section className=" mt-4     hero-main py-4 " id="contact">
      <div className=" container-wrapper relative ">

        <div className=" flex justify-between items-center flex-col sm:flex-row gap-3">
          <div>
            <img src="images/logo.png" alt="" className=" h-[100px]" />
          </div>
          <div>
            <p className=" text-white">Copyright © 2024 NeiroWifHat - All Rights Reserved.</p>
          </div>
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
                  href="https://coinmarketcap.com/currencies/neirowifhatA" target="_blank"  rel="noreferrer"
                  className=" text-xl text-black bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                 <img src="images/cmc.png" alt="" className=" w-auto h-5" />
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
     
      </div>
    </section>
  );
}

export default Footer;
