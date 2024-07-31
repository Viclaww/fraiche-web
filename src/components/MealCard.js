"use client";
import Image from "next/image";

const MealCard = ({ index, name, price, img }) => {
  return (
    <div
      className="flex flex-col md:h-[350px] justify-between rounded-lg border-fraiche-yellow border p-3"
      key={index}
    >
      <div className="w-full h-3/5 bg-red-500 rounded-lg">
        <Image
          src={img}
          className="w-full h-full object-fill"
          alt={name}
          width={150}
          height={150}
        />
      </div>
      <div className="md:text-lg font-medium flex justify-between">
        <h3>{name}</h3>
        <p>N{price}</p>
      </div>
      
      <a href={`https://wa.me/2347025706611/?text=I want to Buy ${name} for N${price} from Fraiche Palace Restaurant`}>
        <button className="bg-fraiche-yellow py-2 rounded-md w-full">Order Now</button>
      </a>
    </div>
  );
};

export default MealCard;
