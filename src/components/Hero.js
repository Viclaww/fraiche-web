import Image from "next/image";
import heroimg1 from "@/images/heroimg1.png";
import heroimg2 from "@/images/heroimg2.png";
import heroimg3 from "@/images/heroimg3.png";

const Hero = () => {
  return (
    <div className="w-screen md:py-32 pt-36  text-white bg-no-repeat bg-cover  h-screen bg-hero-bg">
      <div className="flex h-full py-10 w-full flex-col md:flex-row justify-center gap-10 items-center">
        <div className="left flex flex-col md:text-left text-center gap-3">
          <h3 className="md:text-7xl text-5xl font-semibold">
            Where{" "}
            <span className="font-porky md:text-6xl font-medium text-flavour-green duration-0 tracking-widest">
              flavour
            </span>
            <br />
            Meets Passion
          </h3>
          <p className="md:text-3xl text-xl font-medium">
            Experience fraiche's Mastery
          </p>
          <div className="text-lg flex flex-col md:flex-row w-full gap-3">
            <button className="border-fraiche-yellow border rounded-md py-2 px-4">
              Order Now
            </button>
            <button className="bg-fraiche-yellow py-2 px-4 rounded-sm">
              Make A Reservation
            </button>
          </div>
        </div>
        <div className="w-2/3 md:w-1/3 h-1/2">
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
