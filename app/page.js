"use client";
import { useRef } from "react";
import Image from "next/image";
import MainImage from "../assets/pexels-janko-ferlic-590478.jpg";

export default function Home() {
  const container = useRef(null);
  return (
    <div className="relative">
      <div className="navbar flex justify-between p-5 fixed top-0 z-10 text-white w-full">
        <div className="logo">LOGO</div>
        <div className="selections flex gap-x-8 mr-8">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Delicaies</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="">
        <div className="h-[100vh] relative snap-center">
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={MainImage}
            alt="main-image"
          />
          <div className="absolute bg-black/40 w-full h-full"></div>
          <div className=" flex flex-col items-center absolute justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-y-8">
            <h1 className="font-grechen text-white  text-[5.1rem]">
              Elysian Orchid Dining
            </h1>
            <h1 className="  text-white text-[2rem] font-zen   w-[40rem] text-center">
              Savor the exquisite tastes of Japan, where each dish is a
              masterpiece of flavor and tradition.
            </h1>
            <p className="text-white font-labelle text-[1.5rem]">
              Embark on an exquisite culinary journey. Reserve your experience
              now.
            </p>
            <div className="mt-4 border-4 px-6 py-2 cursor-pointer text-[1.2rem] text-white font-zen hover:bg-black transition-all hover:scale-110">
              Book Now
            </div>
          </div>
        </div>
        <div className=" h-[100vh]">
          <Image
            className="top-[0] left-0 h-full w-full object-cover"
            src={MainImage}
            alt="main-image"
          />
          {/* <h1 className="text-black">This is the content</h1> */}
        </div>
      </div>
    </div>
  );
}
