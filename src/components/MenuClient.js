"use client";

import MealCard from "./MealCard";

const MenuClient = ({ meals }) => {
  const locallyStoredMeals = () => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("fraiche-cart") || "[]";
    }
    return "[]";
  };

  let cartMeals = JSON.parse(locallyStoredMeals());

  const addToCart = (meal, quantity) => {
    let newCart;
    console.log(meal);
    let localcart = locallyStoredMeals();
    const mealExist = cartMeals.find((x) => x.meal._id == meal._id);
    if (!Boolean(mealExist)) {
      newCart = [...cartMeals, { meal, quantity }];
      cartMeals = [...newCart];
    } else {
      newCart = JSON.parse(localcart);
      cartMeals = [...newCart];
    }

    localStorage.setItem("fraiche-cart", JSON.stringify(newCart));
  };

  return (
    <div className="grid gap-5 md:grid-cols-4 my-8 grid-cols-2">
      {meals.map((meal) => (
        <MealCard meal={meal} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default MenuClient;
