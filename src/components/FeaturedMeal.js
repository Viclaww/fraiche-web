import Link from "next/link";
import MealCard from "./MealCard";
import MenuClient from "./MenuClient";

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
      <MenuClient meals={meals?.data?.slice(0, 4)} />
    </div>
  );
};

export default FeaturedMeals;
