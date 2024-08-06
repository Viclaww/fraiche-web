"use client";
import Image from "next/image";

const MealCard = ({ index, name, price, img }) => {
  return (
    <div
      className="flex flex-col flex-start md:h-[370px] justify-between rounded-lg border-fraiche-yellow border p-3"
      key={index}
    >
      <div className="w-full h-4/6  rounded-t-lg zoomContainer">
        <Image
          src={img}
          className="w-full h-full rounded-lg zoomImage"
          alt={name}
          width={500}
          height={300}
        />
      </div>
      <div className="md:text-lg font-medium flex flex-row justify-between items-center w-full">
        <span className="block">{name}</span>
        <span className="block">N{price}</span>
      </div>
      
      <a href={`https://wa.me/2347025706611/?text=I want to Buy ${name} for N${price} from Fraiche Palace Restaurant`}>
        <button className="bg-fraiche-yellow py-2 rounded-md w-full px-4">Order Now</button>
      </a>
    </div>
  );
};

export default MealCard;
