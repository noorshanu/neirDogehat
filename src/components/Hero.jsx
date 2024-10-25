import React from "react";

function Hero() {
  return (
    <section className=" relative   py-20 hero-main ">
      <div className=" container-wrapper  ">
        <div className=" flex flex-col sm:flex-row justify-between gap-4  ">
          <div
            className=" w-full sm:w-1/2  ml-8 relative"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {/* <h2 className=" text-[#ffffff] text-4xl font-bold font-dream txt-s">
              Welcome To
            </h2> */}
            <img src="images/hero.png" alt="" className=" w-[300px] sm:w-auto" />

            {/* <h1 className=" txt-s text-[100px] font-bold text-[#be22f7] font-little stroke-black  ">
              {" "}
              Black Neiro
            </h1> */}

            <p className=" text-white text-lg pr-5">
              NeiroWifHat – the OG hat-wearing Doge, the real sister of DOGE!
              Leading the Neiro Army like an absolute boss: Bulls? Bears? HA!
              It’s all about memes and fueled by Lambo dreams, bro! The grind?
              Simple—laugh our way straight to the moon, in pure alpha style.
              VROOOOOM
            </p>
            <div className="bg-[#ffffff] text-black text-[11px] sm:text-[14px] z-30 w-[350px] sm:w-full mt-4 -rotate-0 sm:-rotate-3 rounded-full border-4 px-5 py-[5px] border-black font-semibold">
            BJ2ENyjuBGUQJr6CCDBcGAQNQDbayoNbDziDGrWSQQ4
            </div>
            <div className=" mt-4 flex gap-2 items-start justify-start">
              <a
                href="https://www.dextools.io/app/en/token/neirowifhat?t=1729839618061"
                className="  font-dream box-s2  text-base  sm:text-xl text-black bg-[#ffffff] hover:bg-[#be22f7] rounded-full py-2 px-3 border-2 border-[#000]  hover:text-[#fff]  text-center font-bold uppercase"
              >
                {" "}
                <img src="images/dextools.svg" alt="" className="w-auto h-16" />
                
              </a>

              <a
                href="https://dexscreener.com/solana/hmkxdwjebumoojotrldevmwkn9sfe7qrhauyxoykbbyi"
                className="  font-dream box-s2  text-base  sm:text-xl text-black bg-[#ffffff] hover:bg-[#be22f7] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]  text-center font-bold uppercase"
              >
                {" "}
                <img src="images/dex.png" alt=""  className="w-auto h-16 rounded-full"/>
              </a>
              <a
                href="https://jup.ag/swap/SOL-BJ2ENyjuBGUQJr6CCDBcGAQNQDbayoNbDziDGrWSQQ4"
                className="  font-dream box-s2  text-base  sm:text-xl text-black bg-[#ffffff] hover:bg-[#be22f7] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]  text-center font-bold uppercase"
              >
                {" "}
                <img src="images/jup.png" alt=""  className="w-auto h-16 rounded-full"/>
              </a>
            </div>
          </div>

          <div
            className=" w-full sm:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/logo2.png" alt="" className=" mx-auto h-[350px] sm:h-[auto]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
