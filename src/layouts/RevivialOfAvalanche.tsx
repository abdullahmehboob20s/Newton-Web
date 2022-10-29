import Stripe from "components/Stripe";
import React from "react";
import Video from "./Video";

function RevivialOfAvalanche() {
  return (
    <div className="pb-100px">
      <div className="py-150px relative">
        <img
          src="images/wahmen.png"
          className="absolute top-[43%] -translate-y-1/2 left-[4%] w-[40%] h-[90%] max-h-full object-contain"
          alt=""
        />

        <div className="container flex items-center justify-end">
          <div className="relative flex flex-col items-center">
            <img
              src="images/logo-secondary.svg"
              className="w-[100%] max-w-[640px]  mx-auto mb-6"
              alt=""
            />
            <p className="text-xl max-w-[600px]  text-white opacity-90 text-center font-light">
              Is a unique fighting game on Avalanche(AVAX) blockchain which
              involves skill and planning to play. It is a game resembling
              Tekken, Street Fighter, and Mortal Kombat. The main difference,
              most character and guild data is saved on the blockchain, and you
              can earn crypto playing it. It also has some RPG elements to it.
              When fighting other players and participating in tournaments, your
              level and rank will increase.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <Stripe direction="left" />
      </div>

      <Video />
    </div>
  );
}

export default RevivialOfAvalanche;
