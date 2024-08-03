"use client";
import { useState, useEffect } from "react";
import MealCard from "@/components/MealCard";
import heroimg1 from "@/images/heroimg1.png";
export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState([
    {
      filter: "All",
      active: true,
    },
    {
      filter: "African Dishes",
      active: false,
    },
    {
      filter: "Intercontinental Dishes",
      active: false,
    },
    {
      filter: "Continental Dishes",
      active: false,
    },
    {
      filter: "Specials",
      active: false,
    },
  ]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://fraiche-backend.onrender.com/api/v1/meals"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMeals(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  if (loading) {
    return  <div className="flex flex-col px-5 md:px-14 md:pt-32">
    <header className="">
      <h3 className="text-white text-2xl">Our Menu</h3>
    </header>
    <div className="grid grid-cols-2 py-20  md:pt-14 md:py-32 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <MealCard
          name={"Loading..."}
          index={4}
          img={heroimg1}
          price={"Loading..."}
        />
    </div>
  </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col px-5 md:px-14 md:pt-32">
      <header className="">
        <h3 className="text-white text-2xl">Our Menu</h3>
      </header>
      <button type="button" className="flex flex-row mt-3">
        {filters.map((meal, y) => (
          <div
            key={y}
            className={
              meal.active
                ? "rounded-full w-fit mx-3  h-8 flex flex-row items-center px-3 bg-fraiche-yellow cursor-pointer"
                : "rounded-full w-fit  h-8 flex flex-row items-center bg-transparent border-fraiche-yellow border-[1px] mx-3 px-3 cursor-pointer"
            }
            onClick={() => {
              filters.forEach((x,y) => {x.active = false});
              filters[y].active = true;
              // setMeals(meals.filter((x) => x.tag === meal.filter));
              setFilters([...filters]);
            }}
          >
            {meal.filter}
          </div>
        ))}
      </button>
      <div className="grid grid-cols-2 py-20  md:pt-14 md:py-32 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {meals.data.map(({ name, image, price }, index) => (
          <MealCard
            name={name}
            index={index}
            img={image}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
