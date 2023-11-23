"use client";
import React from "react";
import Image1 from "@/assets/pexels-cottonbro-studio-3297802.jpg";
import Image2 from "@/assets/pexels-pixabay-271715.jpg";
import Image3 from "@/assets/pexels-quang-anh-ha-nguyen-884600.jpg";
import Image4 from "@/assets/pexels-cottonbro-studio-3338537.jpg";
import Image from "next/image";

const Popular = () => {
  return (
    <div className="">
      <div className="text flex flex-col items-center justify-center">
        <h1 className="font-grechen lg:text-[5rem] md:text-[3rem] text-[2.4rem] text-[#025A4E]">
          Popular Dishes
        </h1>
        <p className="font-poppins pt-2 pb-8 text-[#025A4E] md:text-base text-[0.7rem]">
          Savor the Favorites
        </p>
      </div>
      <div className="images grid grid-rows-4 grid-cols-7  md:h-[600px] h-[400px] gap-x-4 w-[90vw] md:gap-y-8 gap-y-4 mx-auto">
        <Image
          src={Image1}
          alt="image1"
          className="row-start-1 row-span-4 col-start-1 col-span-2 h-full w-full object-cover rounded-lg"
        />
        <Image
          src={Image2}
          alt="image1"
          className="row-start-1 row-span-2 col-span-3 w-full h-full object-cover rounded-lg"
        />
        <Image
          src={Image4}
          alt="image1"
          className="row-start-1 row-span-4 col-start-6 col-span-2 h-full w-full object-cover rounded-lg"
        />
        <Image
          src={Image3}
          alt="image1"
          className="row-start-3 row-span-2 col-span-3 w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Popular;
