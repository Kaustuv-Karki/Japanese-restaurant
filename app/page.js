"use client";
import { useRef } from "react";
import Image from "next/image";
import MainImage from "../assets/pexels-janko-ferlic-590478.jpg";
import Sakura from "@/assets/sakura.jpg";
import Image2 from "@/assets/pexels-ryutaro-tsukata-5745757.jpg";
import Information from "./(components)/Information";
import Information2 from "./(components)/Information2";
import Popular from "./(components)/Popular";
import Footer from "./(components)/Footer";
export default function Home() {
  const container = useRef(null);
  return (
    <div className="relative">
      {/* <div className="navbar flex justify-between p-5 fixed top-0 z-10 text-white w-full">
        <div className="logo">LOGO</div>
        <div className="selections flex gap-x-8 mr-8">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Delicaies</h2>
          <h2>Contact</h2>
        </div>
      </div> */}
      <div className="">
        <div className="h-[100vh] relative snap-center">
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={MainImage}
            alt="main-image"
          />
          <div className="absolute bg-black/40 w-full h-full"></div>
          <div className=" flex flex-col items-center absolute justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-y-8 w-[90vw]">
            <h1 className="font-grechen text-white  lg:text-[5.1rem] md:text-[4rem] text-[3rem] text-center">
              Elysian Orchid Dining
            </h1>
            <h1 className="  text-white lg:text-[2rem] sm:text-[1.5rem] text-[1rem] font-zen  w-full text-center">
              Savor the exquisite tastes of Japan, where each dish is a
              masterpiece of flavor and tradition.
            </h1>
            <p className="text-white font-labelle md:text-[1.5rem] text-[0.9rem] text-center">
              Embark on an exquisite culinary journey. Reserve your experience
              now.
            </p>
            <div className="mt-4 border-4 px-6 py-2 cursor-pointer md:text-[1.2rem] text-[0.9rem] text-white font-zen hover:bg-black transition-all hover:scale-110">
              Book Now
            </div>
          </div>
        </div>
        <div className="h-fit overflow-hidden bg-[#EDE7DE] text-[#025A4E] w-full">
          <div className="about-us h-fit flex md:flex-row  flex-col justify-center my-10 mx-auto w-full">
            <div className="md:w-[30%] w-screen text-center">
              <h1 className=" font-grechen lg:text-[4rem] sm:text-[2.8rem] text-[2.5rem] lg:ml-[8rem] sm:ml-[0] ">
                About Us
              </h1>
            </div>
            <div className="flex flex-col md:w-[70%] w-full px-8 text-[#025A4E]">
              <h2 className="font-grechen lg:text-[2.5rem] sm:text-[1.8rem] text-[1.5rem] md:text-left text-center">
                Welcome to Elysian Orchid Dining, where authentic Japanese
                cuisine meets a contemporary dining experience.Our restaurant
                offers a culinary journey through the vibrant flavors and rich
                traditions of Japan. Each dish is a tribute to the artistry and
                precision of Japanese culinary culture.
              </h2>
              <div className="sub-cotent flex gap-x-8 mt-4">
                <p className=" w-1/2 font-poppins lg:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem]">
                  Our menu is a fusion of time-honored recipes and innovative
                  culinary techniques, ensuring an exquisite dining adventure
                  for both connoisseurs and newcomers to Japanese cuisine.
                  Whether you&apos;re craving the delicate harmony of sashimi,
                  the umami depth of ramen, or the enticing aromas of our bento
                  boxes, each dish is prepared with the finest, freshest
                  ingredients, sourced locally and imported directly from Japan.
                </p>
                <p className=" w-1/2 font-poppins  lg:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem]">
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
          <div className="image w-screen h-[50vh] ">
            <Image
              src={Sakura}
              alt="sakura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* {console.log(data)} */}
        <div>
          <Information />
          <Information2 />
        </div>
        <div className="md:min-h-[80vh] h-fit lg:mb-[3rem] sm:mb-[2rem] mb-4 mt-8">
          <Popular />
        </div>
        <div className="h-[90vh] relative">
          <Image
            src={Image2}
            alt="image"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute h-full w-full bg-black/30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center w-[80%] max-w-[60rem]">
            <h1 className="text-white font-grechen md:text-[4rem] sm:text-[3rem] text-[2.5rem] text-center">
              Ready To Experience Culinary Journey?
            </h1>
            <p className="text-white font-poppins text-center md:text-base text-[0.8rem]">
              Book A Experience Now and let us take you into a journey.
            </p>
            <div className="border border-white px-12 py-2 mt-10 text-white font-grechen lg:text-[2rem] sm:text-[1.5rem] text-[1rem]">
              Book Now
            </div>
          </div>
        </div>
        <div className="md:h-[60vh] sm:h-[60vh] h-[60vh] overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
