import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram, BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="py-6 bg-black">
      <div className="px-10 grid grid-cols-3 items-center">
        <div className="flex items-center space-x-6">
          <button className="text-xl text-white font-staatliches px-3 py-1 border-2 border-white uppercase">
            token WHITE PAPER
          </button>
          <button className="text-xl text-white font-staatliches px-3 py-1 border-2 border-white uppercase">
            game WHITE PAPER
          </button>
        </div>

        <p className="text-center text-xl text-white">
          ©2022 RevivalOfAvalanche. All rights reserved.
        </p>

        <div className="flex items-center justify-end space-x-4">
          <a href="/" target="_blank" className="text-2xl">
            <IoLogoDiscord className="fill-secondary" />
          </a>
          <a href="/" target="_blank" className="text-2xl">
            <BsInstagram className="fill-secondary" />
          </a>
          <a href="/" target="_blank" className="text-2xl">
            <AiFillTwitterCircle className="fill-secondary" />
          </a>
          <a href="/" target="_blank" className="text-2xl">
            <BsTelegram className="fill-secondary" />
          </a>
          <a href="/" target="_blank" className="text-2xl">
            <BsYoutube className="fill-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
