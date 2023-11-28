import React from "react";

const Footer = () => {
  return (
    <div className=" relative w-full h-full bg-[#26362D]">
      <div className="flex flex-col justify-center items-center absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] pb-4">
        <h1 className="font-grechen text-white lg:text-[6rem] sm:text-[4rem] text-[3rem] text-center w-[50vw] mt-[8rem]">
          Savor the Extraordinary
        </h1>
        <p className="text-white font-montserrat text-center w-full max-w-[800px]">
          Step into the enchanting world of Elsyian Orchid, where every dish
          tells a story, and every bite is a journey. Our Culinary Adventure
          Awaits!
        </p>
        <div className="border z-10 px-10 py-2 font-grechen text-white md:text-[2rem] text-[1rem] mt-8 ">
          Contact Us
        </div>
      </div>
      <h1 className="absolute bottom-0 md:translate-y-20 sm:translate-y-12 translate-y-10 left-1/2 -translate-x-1/2 font-grechen text-[#6C8076] text-center lg:text-[13rem] md:text-[10rem] text-[5rem] w-[150vw]">
        Elysian Orchid
      </h1>
    </div>
  );
};

export default Footer;
