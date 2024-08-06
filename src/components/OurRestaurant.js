"use client"
import { FaPlay } from "react-icons/fa";
import CustomVideo from "./BusyVideo";
const OurRestaurant = () => {
  return (
    <div className="flex flex-col px-6 items-center my-10 md:px-40">
      <h1 className="text-3xl">Our Restaurant</h1>
      <div className="flex justify-center items-center h-fit md:h-fit py-0 md:py-10">
        <CustomVideo src={"https://res.cloudinary.com/dv5v8l2lr/video/upload/v1722798162/Fraiche_with_text_2_tlkjdb.mp4"} type={"video/mp4"}></CustomVideo>
        {/* <video
        muted
        autoPlay
        className="w-full h-[200px] pt-5 md:h-[400px] rounded-md"
        onLoadedData={() => {
          console.log('loaded');
        }}
      >
        <source src={"https://res.cloudinary.com/dv5v8l2lr/video/upload/v1722798162/Fraiche_with_text_2_tlkjdb.mp4"} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video> */}
      </div>
    </div>
  );
};
export default OurRestaurant;
