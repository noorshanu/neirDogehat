import React from 'react'

function TokenInfo() {
  return (
    <>
    
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-10 font-little" id='col'>
          <div className="bg-white text-black rounded-[30px] p-5" data-aos="fade-right" data-aos-duration="1500">
            <p className="text-[52px] leading-[50px] mb-5">
              Token <br/>
              Information
            </p>
            <ul className="flex flex-col space-y-4">
              <li className="bg-[#000000] justify-between space-x-10 items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px] text-[#be22f7]">Token Name</p>
                <p className="text-[24px] text-[#ffffff]">NEIROH</p>
              </li>
          
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">NO TAX</p>
                <p className="text-[24px] text-white">0/0</p>
              </li>
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]"> Supply Burn</p>
                <p className="text-[24px] text-white">25%</p>
              </li>
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]"> CEX listing</p>
                <p className="text-[24px] text-white">10%</p>
              </li>
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]"> Public</p>
                <p className="text-[24px] text-white">65%</p>
              </li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-[30px] p-5" data-aos="fade-left" data-aos-duration="1500">
            <p className="text-[52px] leading-[50px] mb-5">
              Supply <br/>
              Information
            </p>
            <ul className="flex flex-col space-y-4">
              <li className="bg-[#000000] text-[#be22f7] flex-col lg:flex-row justify-between space-x-2 items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">CA </p>
                <p className="text-[9px] lg:text-[14px] text-white">BJ2ENyjuBGUQJr6CCDBcGAQNQDbayoNbDziDGrWSQQ4</p>
              </li>
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">Initial Supply</p>
                <p className="text-[24px] text-white ">1 B</p>
              </li>
              <li className="bg-[#000000]  text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">Circulating Supply</p>
                <p className="text-[24px] text-white">1 B</p>
              </li>
              <li className="bg-[#000000] text-[#be22f7] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">Liquidity</p>
                <p className="text-[24px] text-white">BURNED</p>
              </li>
            </ul>
          </div>
        </div>
    
    </>
  )
}

export default TokenInfo