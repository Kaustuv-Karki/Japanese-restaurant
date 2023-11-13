"use client";
import { useRef } from "react";
import Image from "next/image";
import MainImage from "../assets/pexels-janko-ferlic-590478.jpg";
import Sakura from "@/assets/sakura.jpg";
import Information from "./(components)/Information";
import Information2 from "./(components)/Information2";
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
        <div className=" h-[150vh] overflow-hidden bg-[#EDE7DE] text-[#025A4E]">
          <div className="about-us h-[40%] flex justify-center my-10">
            <div className="w-[30%]">
              <h1 className=" font-grechen text-[4rem] ml-[10rem] ">
                About Us
              </h1>
            </div>
            <div className="flex flex-col w-[70%] px-8 text-[#025A4E]">
              <h2 className="font-grechen text-[2.5rem] ">
                Welcome to Elysian Orchid Dining, where authentic Japanese
                cuisine meets a contemporary dining experience.Our restaurant
                offers a culinary journey through the vibrant flavors and rich
                traditions of Japan. Each dish is a tribute to the artistry and
                precision of Japanese culinary culture.
              </h2>
              <div className="sub-cotent flex gap-x-8 mt-4">
                <p className=" w-1/2 font-montserrat">
                  Our menu is a fusion of time-honored recipes and innovative
                  culinary techniques, ensuring an exquisite dining adventure
                  for both connoisseurs and newcomers to Japanese cuisine.
                  Whether you're craving the delicate harmony of sashimi, the
                  umami depth of ramen, or the enticing aromas of our bento
                  boxes, each dish is prepared with the finest, freshest
                  ingredients, sourced locally and imported directly from Japan.
                </p>
                <p className=" w-1/2 font-montserrat">
                  Immerse yourself in the elegant ambiance of our dining space,
                  designed to reflect the serene beauty of Japan. Our dedicated
                  team, passionate about both the cuisine and hospitality, is
                  committed to providing an unforgettable experience, where
                  every visit to Elysian Orchid Dining is a celebration of
                  Japanese flavors and culture.
                </p>
              </div>
            </div>
          </div>
          <div className="image w-full h-full object-cover">
            <Image src={Sakura} alt="sakura" />
          </div>
        </div>
        {/* {console.log(data)} */}
        <div>
          <Information />;
          <Information2 />1
        </div>
      </div>
    </div>
  );
}
