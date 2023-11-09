"use client";
import { useRef } from "react";
import Image from "next/image";
import MainImage from "../assets/pexels-janko-ferlic-590478.jpg";
import useScrollSnap from "react-use-scroll-snap";
import ScrollSnap from "scroll-snap";

export default function Home() {
  const container = useRef(null);
  useScrollSnap({ ref: container, duration: 100, delay: 10 });
  return (
    <>
      <div className="navbar flex justify-between p-5 sticky top-0 z-10 text-white">
        <div className="logo">LOGO</div>
        <div className="selections flex gap-x-8 mr-8">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Delicaies</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="" ref={container}>
        <div className="h-[100vh] relative">
          <Image
            className="top-0 left-0 h-full w-full object-cover"
            src={MainImage}
            alt="main-image"
          />
          {/* <h1 className="text-black">This is the content</h1> */}
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
    </>
  );
}
