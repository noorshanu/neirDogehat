import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const Slider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: '1',
      pretitle:"CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
      content: 'Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.'
    },
    {
      title: ' 2',
      pretitle:'SEND YOUR SOLANA TO A WALLET',
      content: 'CREATE AN ACCOUNT WITH PHANTOM, BACKPACK OR ANY WALLET OF YOUR CHOICE'
    },
    {
      title: '3',
      pretitle:'TRANSFER SOLANA',
      content: 'TRANSFER YOUR SOLANA TO YOUR WALLET.'
    },
    {
      title: ' 4',
      pretitle:'BUY $DogeBurn',
      content: 'CONNECT YOUR WALLET TO A DECENTRALIZED EXCHANGE LIKE JUPITER OR RAYDIUM'
    }
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <div className="slider h-auto sm:h-[320px] relative ">
      <div className="slider-content">
        <div className="slide" key={currentStep}>
          <h2 className=' font-bold font-dream text-3xl p-2 box-s2 rounded-full bg-[#f4dc75] border-2 border-black w-14 h-auto text-center absolute -top-12 -left-4 '>{steps[currentStep].title}</h2>
          <h2 className=' font-bold font-dream text-3xl py-2'>{steps[currentStep].pretitle}</h2>
          <p>{steps[currentStep].content}</p>
        </div>
        <button onClick={handleNext} className=' font-bold text-2xl font-dream flex items-center justify-center gap-2 bg-[#f4dc75] mt-4 rounded-full border-2 border-black'>  Next <FaArrowRightLong className=' mt-2' /></button>
      </div>
      <div className="indicator-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`indicator ${index === currentStep ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
