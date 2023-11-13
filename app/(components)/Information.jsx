"use client";

import React from "react";
import Image1 from "@/assets/pexels-adhitya-rizky-3345727.jpg";
import Image from "next/image";

const Information = () => {
  return (
    <div className="flex h-[100vh] justify-between px-[8rem] py-[4rem] ">
      <div className="image object-cover h-[700px] w-[500px] rounded-full overflow-hidden ">
        <Image src={Image1} alt="image1" />
      </div>
      <div className="information w-[50rem] mt-[5rem] flex items-center flex-col">
        <h1 className="font-grechen text-[4rem] text-center">
          Shirmp Tempura Don Delignt
        </h1>
        <p className="font-montserrat text-center w-2/3 mt-6 mb-10">
          Indulge in the crispy, golden perfection of our Shrimp Tempura. This
          traditional Japanese dish features plump, succulent shrimp delicately
          coated in a light, crispy batter and fried to a delightful crunch.
          Served alongside a dipping sauce and paired with fluffy rice, this
          dish exemplifies the harmony of textures and flavors that defines
          authentic tempura. At [Restaurant Name], our Shrimp Tempura is
          meticulously crafted using the freshest, highest-quality ingredients,
          ensuring a culinary experience that elevates this classic dish to new
          heights. Dive into the delectable simplicity of this iconic Japanese
          favorite.
        </p>
        <div className="border border-black px-12 py-2 cursor-pointer">
          Details
        </div>
      </div>
    </div>
  );
};

export default Information;
