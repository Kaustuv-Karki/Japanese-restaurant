import React from "react";

const Footer = () => {
  return (
    <div className=" relative w-full h-full bg-[#26362D]">
      <div className="flex flex-col justify-center items-center absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-grechen text-white text-[6rem] text-center w-[50vw] mt-[8rem]">
          Savor the Extraordinary
        </h1>
        <p className="text-white font-montserrat text-center w-[800px]">
          Step into the enchanting world of Elsyian Orchid, where every dish
          tells a story, and every bite is a journey. Our Culinary Adventure
          Awaits!
        </p>
        <div className="border px-10 py-2 font-grechen text-white text-[2rem] mt-8">
          Contact Us
        </div>
      </div>
      <h1 className="absolute top-[60%] left-1/2 -translate-x-1/2 font-grechen text-[#6C8076] text-center text-[16rem] w-full">
        Elysian Orchid
      </h1>
    </div>
  );
};

export default Footer;
