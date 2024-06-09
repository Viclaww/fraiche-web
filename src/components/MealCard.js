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
          width={0}
          height={0}
        />
      </div>
      <div className="text-lg font-medium flex justify-between">
        <h3>{name}</h3>
        <p>N{price}</p>
      </div>
      <button className="bg-fraiche-yellow py-2 rounded-md">Order Now</button>
    </div>
  );
};

export default MealCard;
