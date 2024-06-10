import { FaPlay } from "react-icons/fa";

const OurRestaurant = () => {
  return (
    <div className="flex gap-5 flex-col px-6 items-center my-10 md:px-40">
      <h1 className="text-3xl">Our Restaurant</h1>
      <div className="w-full bg-restaurant-video-placeholder flex justify-center items-center bg-center bg-contain h-[20vh] md:h-[70vh]">
        <span className="rounded-full cursor-pointer p-5 bg-fraiche-yellow">
          <FaPlay size={30} />
        </span>
      </div>
    </div>
  );
};
export default OurRestaurant;
