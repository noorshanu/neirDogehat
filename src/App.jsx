import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <div className=" main-bg">
          <Navbar />
          <Hero />
        </div>
        <BorderSec />
        <AboutUs />

        <div className="   ">
          <div className="bg-[#be22f7] font-little text-center text-[40px] lg:text-[100px] flex justify-center items-center z-30  h-[140px] border-y-4 border-black w-full  ">
            <img
              src="images/star.png"
              alt=""
              className=" h-[30px] sm:h-[80px] anime2"
            />

            <p className=" text-white">Tokenomics</p>

            <img
              src="images/star.png"
              alt=""
              className="h-[30px] sm:h-[80px] anime2"
            />
          </div>
        </div>
        <Taxs />
        {/* <ChooseHero /> */}

        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  ">
          <div className="bg-[#be22f7] font-little w-[calc(100vw+100px)] -translate-x-14 text-center text-[40px] lg:text-[100px] -translate-y-10 flex justify-center items-center z-30 top-0 rotate-3 h-[140px] border-y-4 border-black absolute ">
            <p>How To Buy $BNEIRO</p>
          </div>
        </div>
        <HowToBuy />

        <Faq/>
        <Footer/>
      
      

      
      </div>
    </>
  );
}

export default App;
