import React from "react";

function Video() {
  return (
    <>
      <div className="container">
        <img
          src="images/video.png"
          className="max-w-[842px] mb-12 mx-auto"
          alt=""
        />
      </div>
      <div className="h-[55px] relative z-10">
        <div
          className="absolute top-0 left-0 h-full  w-[90%] bg-[rgba(0,0,0,.6)] -z-20"
          style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0% 100%)" }}
        ></div>
        <div className="container flex items-center space-x-8 h-full justify-center">
          <p className="text-2xl uppercase text-secondary-800">
            POWERED BY THE BEST
          </p>

          <img src="images/avalanche.png" className="h-[80%]" alt="" />
        </div>
      </div>
    </>
  );
}

export default Video;
