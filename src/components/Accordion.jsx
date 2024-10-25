import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2 rounded-xl border-black border-4 h-full">
      <button
        className="flex justify-between w-full p-4 text-left text-lg font-medium text-black focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4 text-gray-700 bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="mx-auto mt-10 p-4 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-3">
      <div className="w-full sm:w-1/2">
        <AccordionItem
          title="WHAT IS THE TREASURY"
          content="The treasury is basically our 'bank' we will use this for marketing costs, listing on CEX's and burning / giving away to holders."
        />
        <AccordionItem
          title="Is $DogeBurn a good investment?"
          content=" its a fictional character and memecoin with no utility. Please invest at your own risk, and as always. Do you own research."
        />
    
      </div>
      <div className="sm:w-1/2 w-full">
        <AccordionItem
          title="IS LIQUIDITY POOL LOCKED?"
          content="YES, LP locked after seeding on Raydium."
        />
         <AccordionItem
          title="What is the future of $DBurn?"
          content="Season 1 of Doge's adventures will be released every week. With multiple fun and new things being worked "
        />
      </div>
    </div>
  );
};

export default Accordion;
