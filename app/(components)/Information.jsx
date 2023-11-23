"use client";

import React from "react";
import Image1 from "@/assets/pexels-adhitya-rizky-3345727.jpg";
import Image from "next/image";

const Information = () => {
  return (
    <div className="flex md:flex-row flex-col items-center md:min-h-[100vh] h-fit  md:justify-between  lg:px-[8rem] sm:px-[4rem] px-[2rem] lg:py-[4rem] sm:py-[2rem] py-[1rem] text-[#025A4E] bg-[#EDE7DE]">
      <div className="image object-cover md:h-[700px] md:w-[500px] h-[50vh] min-h-[30rem] w-full  lg:rounded-full rounded-[40%] overflow-hidden ">
        <Image
          src={Image1}
          alt="image1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="information w-[90vw] max-w-[50rem] lg:mt-[5rem] sm:mt-[2rem] mt-[1rem] flex items-center flex-col">
        <h1 className="font-grechen lg:text-[4rem] sm:text-[3rem] text-[2rem] text-center">
          Shirmp Tempura Don Delignt
        </h1>
        <p className="font-poppins text-center w-full mt-6 mb-10 sm:my-4 lg:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem] ">
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
        <div className="border border-[#025A4E] md:px-12 md:py-2 px-10 py-2 cursor-pointer font-poppins md:text-[1rem] text-[0.8rem]">
          Details
        </div>
      </div>
    </div>
  );
};

export default Information;
