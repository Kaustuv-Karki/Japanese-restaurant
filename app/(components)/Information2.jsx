"use client";

import React from "react";
import Image2 from "@/assets/pexels-ivan-samkov-8951602.jpg";
import Image from "next/image";

const Information2 = () => {
  return (
    <div className="flex h-[100vh] justify-between px-[8rem] py-[4rem] text-[#025A4E] ">
      <div className="information w-[50rem] mt-[5rem] -ml-[2rem] flex items-center flex-col">
        <h1 className="font-grechen text-[4rem] text-center">
          Gyoza Sensation
        </h1>
        <p className="font-poppins text-center w-2/3 mt-6 mb-10">
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
        <div className="border border-[#025A4E] px-12 py-2 cursor-pointer">
          Details
        </div>
      </div>
      <div className="image object-cover h-[700px] w-[500px] rounded-full overflow-hidden ">
        <Image src={Image2} alt="image1" />
      </div>
    </div>
  );
};

export default Information2;
