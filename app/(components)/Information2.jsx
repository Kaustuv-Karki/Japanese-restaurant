"use client";

import React from "react";
import Image2 from "@/assets/pexels-ivan-samkov-8951602.jpg";
import Image from "next/image";

const Information2 = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center md:min-h-[100vh] h-fit md:justify-between lg:px-[8rem] sm:px-[4rem] px-[2rem] lg:py-[4rem] sm:py-[2rem] py-[1rem] text-[#025A4E]  ">
      <div className="information w-[90vw] max-w-[50rem] lg:mt-[5rem] sm:mt-[2rem] mt-[1rem] flex items-center flex-col">
        <h1 className="font-grechen lg:text-[4rem] sm:text-[3rem] text-[2rem] text-center">
          Gyoza Sensation
        </h1>
        <p className="font-poppins text-center w-full mt-6 mb-10 sm:my-4 lg:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem] ">
          Savor the exquisite taste of our Gyoza, perfectly pan-seared Japanese
          dumplings. Each delicate parcel is meticulously handcrafted, encasing
          a tantalizing blend of finely minced pork, vegetables, and aromatic
          seasonings. The thin, golden-brown wrappers reveal a delectable
          filling that strikes the perfect balance between savory and aromatic
          flavors. Served with a tangy dipping sauce, our Gyoza offers a
          harmonious blend of textures and tastes, a testament to the precision
          and artistry of Japanese cuisine. At [Restaurant Name], our Gyoza
          embodies tradition with a touch of innovation, promising a culinary
          journey that delights the senses.
        </p>
        <div className="border border-[#025A4E] md:px-12 md:py-2 px-10 py-2 cursor-pointer font-poppins md:text-[1rem] text-[0.8rem]">
          Details
        </div>
      </div>
      <div className="image object-cover md:h-[700px] md:w-[500px] h-[50vh] min-h-[30rem] w-full  lg:rounded-full rounded-[40%] overflow-hidden ">
        <Image
          src={Image2}
          alt="image1"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Information2;
