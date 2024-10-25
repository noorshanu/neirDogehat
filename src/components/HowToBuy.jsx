import React from "react";
import Slider from "./Slider";

function HowToBuy() {
  return (
    <section className=" py-[8%]">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-center gap-4">
          {/* <div
            className=" bg-white border-4 border-black box-s2 rounded-3xl py-8 px-4 w-1/2 h-full"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl sm:text-7xl font-bold font-little py-1 text-center">
              {" "}
              How To BUY
            </h1>
            <h2 className=" text-2xl sm:text-7xl font-bold font-little py-2 text-center">
              $DBurn
            </h2>
          </div> */}

          {/* <div
            className="bg-white border-4 border-black box-s2 rounded-3xl p-2 h-full"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/logo2.png" alt="" className=" h-[180px] sm:h-[220px]" />
          </div> */}
        </div>

        <div className=" flex items-center flex-col sm:flex-row justify-center gap-4 mt-2">
          <div
            className=" bg-white border-4 border-black box-s2 rounded-3xl py-8 px-2 flex flex-col justify-center items-center gap-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="images/img3.jpeg"
              alt=""
              className="h-[220px] img-hov cursor-pointer rounded-2xl"
            />
            <a
              href="/"
              className=" bg-white border-4 box-s2 px-4 py-1 border-black rounded-full text-2xl font-bold font-little"
            >
              Buy $BNEIRO
            </a>
          </div>

          <div
            className="bg-white border-4 border-black box-s2 rounded-3xl p-4 w-full sm:w-1/2 "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
