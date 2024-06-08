import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-screen text-white  h-screen bg-hero-bg">
      <Navbar />
      <div>
        <div className="left">
          <h3>
            Where <span>flavour</span>
            <br />
            Meets Passion
          </h3>
          <p>experience fraiche's Mastery</p>
          <button>Order Now</button>
          <button>Make A Reservation</button>
        </div>
        <div>
          <Image alt="image" width={0} height={0} />
          <Image alt="image" width={0} height={0} />
          <Image alt="image" width={0} height={0} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
