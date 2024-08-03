import Link from "next/link";
import MealCard from "./MealCard";
import jollof from "@/images/jollofrice.png";
import fries from "@/images/chips.png";
import friedrice from "@/images/friedrice.png";
import grilledfish from "@/images/grilledfish.png";

const FeaturedMeals = async () => {
  let meals = await fetch('https://fraiche-backend.onrender.com/api/v1/meals', {
    cache: 'no-store'
  });
  meals = await meals.json();
  return (
    <div className="flex font-medium px-5 md:px-24 my-5 flex-col w-full">
      <div className="flex items-end my-3 justify-between">
        <h3 className="text-3xl">Featured Meals</h3>
        <Link className="text-lg text-fraiche-yellow" href="/menu">
          See more
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-4 grid-cols-2">
        {meals.data.slice(0,4).map(({ name, price, image }, index) => (
          <MealCard index={index} img={image} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMeals;
