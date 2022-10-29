import Stripe from "components/Stripe";
import React from "react";

function About() {
  return (
    <>
      <Stripe direction="right" />
      <div className="py-100px relative z-10">
        <img
          src="images/about-us-banner-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 pointer-events-none select-none"
          alt=""
        />

        <div className="relative h-[260px] w-[80%] z-20">
          <img
            src="images/about-us-bg.png"
            className="absolute top-0 left-0 w-full h-full -z-20 select-none pointer-events-none drop-shadow-[0px_0px_14px_rgba(0,0,0,1)]"
            alt=""
          />
          <img
            src="images/about-us-stripe.png"
            className="absolute bottom-0 left-0 -z-20 w-[90%] h-[56px]"
            alt=""
          />

          <div className="w-[42%] ml-[11%] text-center h-full flex flex-col justify-center items-center pb-[64px]">
            <h1 className="font-eras-demi text-2xl drop-shadow-navLinks text-secondary-1000 uppercase mb-4">
              About US
            </h1>

            <p className="font-eras-demi text-gradient text-xl drop-shadow-navLinks font-black">
              Newton Mint Labs is a company of experienced developers, on the
              path to change blockchain gaming industry and NFT standards.
            </p>
          </div>
        </div>
      </div>
      <Stripe direction="left" />
    </>
  );
}

export default About;
