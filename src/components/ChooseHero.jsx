import React from "react";

function ChooseHero() {
  return (
    <section
      className="bg-[#fdea8b] pt-[5%] pb-[8%] overflow-x-hidden "
      id="col"
    >
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row justify-evenly gap-4 bg-white border-4 border-black rounded-3xl box-s2 py-4 px-4">
          <div className="" data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/img7.jpeg"
              alt=""
              className=" sm:w-auto w-[200px] h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black"
            />
            <h1 className=" font-little text-4xl sm:text-6xl font-bold py-1 text-center">
              TAX
            </h1>
            <h2 className="font-little text-3xl font-bold py-1 text-center">
              0% Tax
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/img6.jpeg"
              alt=""
              className=" sm:w-auto w-[200px] h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black "
            />
            <h1 className="font-little text-4xl sm:text-6xl font-bold py-1 text-center">
              SUPPLY
            </h1>
            <h2 className="font-little text-3xl font-bold py-1 text-center">
              100 Million
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <img
              src="images/img8.jpeg"
              alt=""
              className=" sm:w-auto w-[200px] h-[200px] sm:h-[250px] mx-auto box-s rounded-3xl border-4 border-black"
            />
            <h1 className=" font-little text-3xl sm:text-6xl font-bold py-1 text-center">
              LP
            </h1>
            <h2 className="font-little text-3xl font-bold py-1 text-center">
              100% BURN
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseHero;
