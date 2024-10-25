import React from "react";
import TokenInfo from "./TokenInfo";

function Taxs() {
  return (
    <section className=" pt-[10%] pb-[15%]  relative ">

<img
        src="images/coin.png"
        alt=""
        className=" absolute  top-52 left-10 h-[140px]"
      />

      <img src="images/logo2.png" alt="" className=" absolute -right-12 bottom-0 floating" />
  
  
<TokenInfo/>
      {/* <div className=" container-wrapper bg-white border-4 border-black rounded-3xl box-s2 py-4 px-4 relative z-20">
        <div className="flex flex-col sm:flex-row justify-evenly gap-4 ">
          <div data-aos="fade-right" data-aos-duration="1500">
            <img
              src="images/img5.jpeg"
              alt=""
              className=" rounded-full h-[300px] img-hov mx-auto"
            />
          </div>
          <div
            className=" flex justify-center flex-col gap-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className=" text-3xl sm:text-6xl font-little font-bold text-r">
              $DBurn Treasury
            </h2>

            <h1 className=" text-3xl sm:text-7xl font-little font-bold text-">
              4% CEX listings
            </h1>
            <h1 className="text-3xl sm:text-7xl font-little font-bold text-">
              3% marketing
            </h1>
            <h1 className="text-3xl sm:text-7xl font-little font-bold text-">
              3% burn!
            </h1>
          </div>
        </div>

        <p  className="text-center py-4">
          Team allocation? None. This is a fair launch and team has to buy in as
          well.
        </p>
      </div> */}
    </section>
  );
}

export default Taxs;
