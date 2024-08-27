"use client";
import { useState, useEffect } from "react";
import MealCard from "@/components/MealCard";
import heroimg1 from "@/images/heroimg1.png";
import MenuClient from "@/components/MenuClient";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(BACKEND_URL);
export default function Menu() {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState([
    {
      filter: "All",
      name: "All",
      active: true,
    },
    {
      filter: "African",
      name: "African Dishes",
      active: false,
    },
    {
      filter: "Inter Dishes",
      name: "Intercontinental Dishes",
      active: false,
    },
    {
      filter: "Continental",
      name: "Continental Dishes",
      active: false,
    },
  ]);

  const [cartMeals, setCartMeals] = useState([]);

  const locallyStoredMeals = () => {
    return JSON.parse(localStorage.getItem("fraiche-cart"));
  };

  useEffect(() => {
    if (locallyStoredMeals()) {
      setCartMeals(locallyStoredMeals());
    } else {
      setCartMeals([]);
    }
  }, []);

  const addToCart = (meal, quantity) => {
    let newCart;
    let localcart = locallyStoredMeals();
    const mealExist = localcart.filter((x) => x.meal._id == meal._id);

    if (mealExist.length < 1) {
      newCart = [...localcart, { meal, quantity }];
    } else {
      newCart = cartMeals;
    }
    localStorage.setItem("fraiche-cart", JSON.stringify(newCart));

    setCartMeals(locallyStoredMeals());
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BACKEND_URL}/api/v1/meals`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setMeals(result);
        setFetchedMeals(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  if (loading) {
    return (
      <div className="flex flex-col px-5 md:px-14 md:pt-32">
        <header className="">
          <h3 className="text-white text-2xl">Our Menu</h3>
        </header>
        <div className="grid grid-cols-2 py-20  md:pt-14 md:py-32 gap-5 md:grid-cols-3 lg:grid-cols-4">
          loading
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(meals);

  return (
    <div className="flex flex-col px-5 md:px-14 md:pt-32">
      <header className="">
        <h3 className="text-white text-2xl">Our Menu</h3>
      </header>
      <button type="button" className="flex my-5 flex-row mt-3">
        {filters.map((meal, y) => (
          <div
            key={y}
            className={
              meal.active
                ? "rounded-full w-fit mx-3  h-8 flex flex-row items-center px-3 bg-fraiche-yellow cursor-pointer"
                : "rounded-full w-fit  h-8 flex flex-row items-center bg-transparent border-fraiche-yellow border-[1px] mx-3 px-3 cursor-pointer"
            }
            onClick={() => {
              filters.forEach((x, y) => {
                x.active = false;
              });
              filters[y].active = true;
              if (meal.filter !== "All") {
                setMeals(meals.filter((x) => x.tag == filters[y].filter));
              } else {
                setMeals(...fetchedMeals);
              }
              setFilters([...filters]);
            }}
          >
            {meal.name}
          </div>
        ))}
      </button>
      <MenuClient meals={meals?.data} />
    </div>
  );
}
