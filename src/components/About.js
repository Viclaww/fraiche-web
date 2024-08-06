"use client";
import Image from "next/image";
import forhistory from "@/images/forHistory.png";
import Jollof from '../../public/images/IMG_6213.png';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AboutHome = () => {
  useGSAP(() => {
    gsap.from(".img1", {
      x: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".img1",
        start: "top 70%",
      },
    });
    gsap.from(".text1", {
      y: 300,
      opacity: 0,
      delay: 0,
      scrollTrigger: {
        trigger: ".text1",
        start: "top 50%",
      },
    });
    gsap.from(".img2", {
      x: 300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".img2",
        start: "top 70%",
      },
    });
    gsap.from(".text2", {
      x: -300,
      opacity: 0,
      delay: 0,
      scrollTrigger: {
        trigger: ".text2",
        start: "top 50%",
      },
    });
  });
  return (
    <div className="flex flex-col px-5 gap-8 mt-16 w-full md:px-32 font-medium">
      <div className="flex flex-col justify-center items-center md:gap-9 md:flex-row">
        <Image
          className="img1 rounded-xl md:w-2/5"
          src={forhistory}
          width={0}
          height={0}
          alt="image"
        />
        <div className="flex text1 flex-col mt-3 md:w-[360px] gap-3 my-4">
          <h3 className="flex text-3xl">History</h3>
          <p className="text-justify font-normal">
            Founded in 2021, Fraiche began as a small bistro in Paris. Over the
            decades, it has grown into a renowned brand, celebrated for its
            culinary excellence and charming ambiance worldwide.
          </p>
          <button className="w-36 py-2 bg-fraiche-yellow">Read More</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:gap-9 md:flex-row-reverse">
        <Image
          className="img2 h-[300px] object-cover rounded-xl md:w-2/5"
          src={Jollof}
          width={0}
          height={0}
          alt="image"
        />
        <div className="text2 flex flex-col mt-3 md:w-[360px] gap-3 my-4">
          <h3 className="flex text-3xl">About Us</h3>
          <p className="text-justify font-normal">
            Franchie offers a delightful dining experience with a blend of
            traditional and modern cuisine, impeccable service, and a warm
            atmosphere, making every visit a memorable culinary journey.
          </p>
          <button className="w-36 py-2 bg-fraiche-yellow">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default AboutHome;
