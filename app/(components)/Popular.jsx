"use client";
import React from "react";
import Image1 from "@/assets/pexels-cottonbro-studio-3297802.jpg";
import Image2 from "@/assets/pexels-pixabay-271715.jpg";
import Image3 from "@/assets/pexels-quang-anh-ha-nguyen-884600.jpg";
import Image4 from "@/assets/pexels-cottonbro-studio-3338537.jpg";
import Image from "next/image";

const Popular = () => {
  return (
    <div>
      <div className="text flex flex-col items-center justify-center">
        <h1 className="font-grechen text-[5rem] text-[#025A4E]">
          Popular Dishes
        </h1>
        <p className="font-poppins pt-2 pb-8 text-[#025A4E]">
          Savor the Favorites
        </p>
      </div>
      <div className="images grid grid-rows-3 grid-cols-8  h-[600px] gap-x-4 px-2">
        <Image
          src={Image1}
          alt="image1"
          className="row-start-1 row-span-3 col-span-2 h-full w-full object-cover"
        />
        <Image
          src={Image2}
          alt="image1"
          className="row-start-1 row-span-2 col-span-3 w-full h-full object-cover"
        />
        <Image
          src={Image4}
          alt="image1"
          className="row-start-1 row-span-3 col-span-2 h-full w-full object-cover"
        />
        <Image
          src={Image3}
          alt="image1"
          className="row-start-1 row-span-2 col-span-3 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Popular;
