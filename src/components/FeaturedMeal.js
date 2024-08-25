import Link from "next/link";
import MealCard from "./MealCard";
import jollof from "@/images/jollofrice.png";
import fries from "@/images/chips.png";
import friedrice from "@/images/friedrice.png";
import grilledfish from "@/images/grilledfish.png";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const FeaturedMeals = async () => {
  let meals = await fetch(`${BACKEND_URL}/api/v1/meals`, {
    cache: "no-store",
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
        {meals?.data?.slice(0, 4).map((meal, index) => (
          <MealCard index={index} {...meal} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMeals;
