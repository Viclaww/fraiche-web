"use client";
import Image from "next/image";
import heroimg1 from "@/images/heroimg1.png";
import heroimg2 from "@/images/heroimg2.png";
import heroimg3 from "@/images/heroimg3.png";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  // const flavour = document.querySelector(".flavour");
  // console.log(flavour);

  useGSAP(() => {
    gsap.from(".flavour", 1, {
      text: "ofualrv",
      delay: 1,
      ease: "none",
    });
    gsap.from(".left", 2, {
      x: -200,
      opacity: 0,
    });
  });

  return (
    <div className="w-screen md:py-32  pt-36  text-white bg-no-repeat bg-cover  h-screen bg-hero-bg">
      <div className="flex h-full py-10 md:py-0 w-full flex-col md:flex-row justify-center gap-10 items-center">
        <div className="left flex flex-col md:text-left text-center gap-3">
          <h3 className="md:text-6xl text-5xl font-semibold">
            Where every 
            <span className="flavour font-porky md:text-6xl ml-5 font-medium text-flavour-green duration-0 tracking-widest">
              bite
            </span>
            <br />
            tells a story
          </h3>
          <p className="md:text-3xl text-xl font-medium">
            Experience Fraiche's Mastery
          </p>
          <div className="text-lg flex justify-center flex-row w-full gap-3">
            <Link
              href={"/menu"}
              className="border-fraiche-yellow bg-fraiche-yellow w-fit border rounded-md py-2 px-4"
            >
              Order Now
            </Link>
            {/* <button className="bg-fraiche-yellow py-2 px-4 rounded-sm">
              Make A Reservation
            </button> */}
          </div>
        </div>
        <div className="w-2/3 scale-75 md:scale-100 md:w-1/3 ">
          <div className="grid gap-3 grid-cols-2">
            <Image
              className="w-full"
              src={heroimg1}
              alt="image"
              width={0}
              height={0}
            />
            <Image
              className="row-span-2 h-full"
              src={heroimg3}
              alt="image"
              width={0}
              height={0}
            />
            <Image
              className="w-full"
              src={heroimg2}
              alt="image"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
