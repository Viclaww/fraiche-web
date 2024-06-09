import Link from "next/link";
import MealCard from "./MealCard";
import jollof from "@/images/jollofrice.png";
import fries from "@/images/chips.png";
import friedrice from "@/images/friedrice.png";
import grilledfish from "@/images/grilledfish.png";

const FeaturedMeals = () => {
  const meals = [
    { name: "Jollof Rice", price: 2000, img: jollof },
    { name: "Fries", price: 2000, img: fries },
    { name: "Fried Rice", price: 2000, img: friedrice },
    { name: "Grilled Fish", price: 2000, img: grilledfish },
  ];
  return (
    <div className="flex font-medium md:px-24 my-5 flex-col w-full">
      <div className="flex items-end my-3 justify-between">
        <h3 className="text-3xl">Featured Meals</h3>
        <Link className="text-lg text-fraiche-yellow" href="/">
          See more
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-4 grid-cols-2">
        {meals.map(({ name, price, img }, index) => (
          <MealCard index={index} img={img} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMeals;
