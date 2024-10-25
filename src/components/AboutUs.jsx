import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="-mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden hero-main "
      id="about"
    >
      <img
        src="images/coin.png"
        alt=""
        className=" absolute  bottom-28   right-64 mx-auto h-[190px] "
      />

      <div className=" container-wrapper pt-[5%] pb-5">
        <div className="relative  my-12  ">
          <div className=" flex justify-between items-center flex-col sm:flex-row ">
            <div className=" w-full sm:w-1/2">
              <img src="images/tax.png" alt="" className=" floating" />
            </div>

            <div className=" w-full sm:w-1/2 ">
              <div className="bg-[#be22f7] border-4 box-s2 rounded-2xl border-black py-2 max-w-sm mx-auto px-2 -rotate-3">
                <h1 className="text-center font-bold text-xl">
                  KABOSU SISTER IS OFF THE LEASH! Exchange listing is coming on
                  Nov 5th!
                </h1>
              </div>

              <div className=" bg-white border-4 box-s2 rounded-2xl border-black py-8 max-w-sm mx-auto px-2">
                <h1 className="text-lg sm:text-2xl font-bold text-center mb-2 text-black">
                  The Heartbeat of Solana's Meme Community
                </h1>
                <p className=" mx-auto text-center px-2 text-base font-medium  text-black">
                  NEIROH, our sweet 10-year-old rescue dog, has joined the Doge
                  family, bringing joy and wagging tails. In memory of the
                  legendary Kabosu, we’re here to give NEIROH a special gift—a
                  cozy hat that reflects her beautiful spirit and the love she
                  brings into our lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2  relative z-20 py-1 bg-[#ffffff] border-t-2 border-l-2 border-r-2 border-black rounded-2xl w-full max-w-full sm:max-w-xl px-4 mx-auto">
          <CopyAddress />{" "}
          <button className="copy">
            <span
              data-text-end="Copied!"
              data-text-initial="Copy to clipboard"
              className="tooltip"
            ></span>
            <span>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 6.35 6.35"
                y="0"
                x="0"
                height="20"
                width="20"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="clipboard"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                  ></path>
                </g>
              </svg>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 24 24"
                y="0"
                x="0"
                height="18"
                width="18"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark"
              >
                <g>
                  <path
                    data-original="#000000"
                    fill="currentColor"
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
