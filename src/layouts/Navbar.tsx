import React from "react";

function Navbar() {
  return (
    <div className="bg-secondary-800">
      <div className="container h-ofNavbarHeight flex space-x-12">
        <img src="images/logo.png" className="h-[140px] translate-y-2" alt="" />

        <div className="flex items-center space-x-16">
          <a
            href="/"
            className="text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            home
          </a>
          <a
            href="/"
            className="text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            about
          </a>
          <a
            href="/"
            className="text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            game
          </a>
          <a
            href="/"
            className="text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            nfts
          </a>
          <a
            href="/"
            className="text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            team
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
